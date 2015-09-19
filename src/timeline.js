import React, {Component} from 'react';
import raf from 'raf';

export class Timeline extends Component {
  // todo: prop types & default props

  constructor(props, context) {
    super(props, context);

    const {timeliner=new Timeliner(props)} = props;

    this.state = {
      time: timeliner.time
    };

    this.timeliner = timeliner;
  }

  componentDidMount() {
    if (this.props.playOnMount) this.timeliner.play();
    this._addListener();
  }

  componentWillUnmount() {
    this._removeListener();
  }

  componentWillRecieveProps(nextProps) {
    if (nextProps.timeliner && nextProps.timeliner !== this.timeliner) {
      this._removeListener();
      this.timeliner = nextProps.timeliner;
      this._addListener();
    }
  }

  _addListener() {
    this._listenerId = this.timeliner.addListener(time => this.setState({time}));
  }

  _removeListener() {
    this.timeliner.removeListener(this._listenerId);
  }

  render() {
    return this.props.children(this.timeliner)
  }
}

export class Timeliner {

  constructor(options={}) {
    this.listeners = {};
    this.lastListenerId = 0;

    this.tick = ::this.tick;
    this.play = ::this.play;
    this.pause = ::this.pause;
    this.setPlay = ::this.setPlay;
    this.setTime = ::this.setTime;
    this.togglePlay = ::this.togglePlay;

    Object.keys(options).forEach(option =>
      this[option] || (this[option] = options[option])
    );

    this.time = this.time || 0;

    if (this.playing) raf(this.tick);
  }

  tick() {
    const {playing, time} = this;

    if (time >= this.max) {
      if (this.loop) {
        this.time = this.min;
      }
    } else {
      // todo: arbitrary increment
      this.time = time+1;

      Object.keys(this.listeners).forEach(id =>
        this.listeners[id](this.time)
      );
    }

    if (playing) raf(this.tick);
  }

  setTime(time) {
    this.time = time;
  }

  play() { this.setPlay(true) }
  pause() { this.setPlay(false) }

  setPlay(playing) {
    if (!this.playing && playing) raf(this.tick);
    this.playing = playing;
  }

  togglePlay(playing) {
    if (!this.playing) raf(this.tick);
    this.playing = !this.playing;
  }

  addListener(callback) {
    this.listeners[++this.lastListenerId] = callback;
    return this.lastListenerId;
  }

  removeListener(id) {
    delete this.listeners[id];
  }
}
