import React, {Component} from 'react';
import raf from 'raf';

export default class Timeline extends Component {
  // todo: prop types & default props
  
  constructor(props, context) {
    super(props, context);
    
    this.tick = ::this.tick;
    
    this.expose = {
      setTime: ::this.setTime,
      togglePlay: ::this.togglePlay
    }
    
    this.state = {
      time: props.initialTime || 0, // todo: defaultProps
      playing: !! props.playOnMount
    };
  }
  
  tick() {
    const {playing, time} = this.state;
    
    if (time >= this.props.max) {
      if (this.props.loop) {
        this.setState({time: this.props.min});
      }
    } else {
      this.setState({time: time+1});  // todo: arbitrary increment
    }
    
    if (playing) raf(this.tick);
  }
  
  setTime(time) {
    this.setState({time});
  }
  
  togglePlay() {
    if (!this.state.playing) raf(this.tick);
    this.setState({playing: !this.state.playing});
  }
  
  componentDidMount() {
    if (this.state.playing) raf(this.tick);
  }
  
  render() {
    return this.props.children({
      ...this.state,
      ...this.expose
    })
  }
}