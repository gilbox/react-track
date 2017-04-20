import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import raf from 'raf';

export const defaultRect = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
const identity = x => x;

export function createInjector(component) {
  return class Track extends React.Component {
    static propTypes = { trackedRef: PropTypes.func,
                         children: PropTypes.func.isRequired,
                         formulas: PropTypes.array }

    static defaultProps = { formulas: [identity], component }

    constructor(props) {
      super(props);

      const self = this;

      this.DecoratedComponent = class extends React.Component {
        static propTypes = { trackedRef: PropTypes.func }

        render() {
          const {
            trackedRef = self.props.trackedRef || identity,
            formulas,
            component,
            ...rest } = {...self.props, ...this.props};
          return <props.component
                    {...rest}
                    ref={r => trackedRef(self.nodeRef = r)} />
        }
      }
      this.state = {};
    }

    componentWillReceiveProps() {
      const node = findDOMNode(this.nodeRef);
      const rect = node.getBoundingClientRect();
      this.setState({rect, node});
    }

    render() {
      const {rect=defaultRect, node={}} = this.state;
      return this.props.children(this.DecoratedComponent,
        ...this.props.formulas.map(formula => formula(rect, node)));
    }
  };
}

export const Track = createInjector('div');

export class TrackDocument extends React.Component {
  static propTypes = { children: PropTypes.func.isRequired,
                       formulas: PropTypes.array,
                       updateOnDidMount: PropTypes.bool }

  static defaultProps = { formulas: [identity], updateOnDidMount: false }

  constructor(props) {
    super(props);
    this.state = { rect: null };
  }

  componentDidMount() {
    const { cancel } = raf;
    let rafId;

    const update = () => {
      this.setState({ rect: document.documentElement.getBoundingClientRect() });
    }

    const handleScroll = event => {
      cancel(rafId);
      rafId = raf(update);
    };

    window.addEventListener('scroll', handleScroll);

    this.removeScrollHandler = () => {
      cancel(rafId);
      window.removeEventListener('scroll', handleScroll);
    }

    if (this.props.updateOnDidMount) {
      update();
    }
  }

  componentWillUnmount() {
    this.removeScrollHandler();
  }

  render() {
    let {rect} = this.state;
    let element = typeof document !== 'undefined' && document.documentElement;
    if (!rect) {
      if (element) {
        rect = element.getBoundingClientRect();
      } else {
        rect = defaultRect;
        element = {}; // bah
      }
    }
    return this.props.children(...this.props.formulas.map(formula => formula(rect, element)))
  }
}

export function createTrackedComponent(component) {
  return class Tracked extends React.Component {
    static propTypes = { children: PropTypes.func.isRequired,
                         formulas: PropTypes.array,
                         component: PropTypes.oneOfType([PropTypes.element,
                                                               PropTypes.string]) }

    static defaultProps = { formulas: [identity], component }

    constructor(props) {
      super(props);
      this.state = {};
    }

    componentWillReceiveProps() {
      const node = findDOMNode(this.nodeRef);
      const rect = node.getBoundingClientRect();
      this.setState({rect, node});
    }

    render() {
      const {rect=defaultRect, node={}} = this.state;
      const {props} = this;
      const {
        formulas,
        component,
        ...rest } = props;

      return (
        <props.component ref={r => this.nodeRef = r} {...rest}>
          {props.children(...props.formulas.map(formula => formula(rect, node)))}
        </props.component>
      );
    }
  };
}

export const TrackedDiv = createTrackedComponent('div');
