import React, {Component} from 'react';
import cx from 'classnames';
import {Easer} from 'functional-easing';
import {tween, combine} from 'react-track/tween';
import {rgb, rgba, scale, rotate, 
        px, percent, translate3d} from 'react-track/tween-value-factories';
import Scrubber from './Scrubber';
import stateful from 'react-stateful-stream';
import raf from 'raf';

const easeOutBounce = new Easer().using('out-bounce');

const MIN_TIME = 0;
const MAX_TIME = 100;

const styles = {
  scrubber: {
    width: '100%',
    boxSizing: 'border-box',
  }
};

@stateful({
  time: 0,
  playing: true
})
class App extends Component {
  componentDidMount() {
    // animation loop
    const frame = () => {
      const {playing, time, edit} = this.props;
      if (playing) {
        edit(state => 
          ({...state, time: state.time === MAX_TIME ? MIN_TIME : state.time+1}));
      }
      raf(frame);
    };
    raf(frame);
  }
  
  render() {
    const {time, playing, edit} = this.props;

    return (
      <div>
        <h2
          style={tween(time, {
            [MIN_TIME]: { transform: rotate(0) },
            [MAX_TIME]: { transform: rotate(360) } }, easeOutBounce)}>
          spin
        </h2>
        
        <button
          onClick={event => 
            edit(state => ({...state, playing: !state.playing}))}>
          {playing ? 'pause' : 'play'}
        </button>
        
        <Scrubber
          style={styles.scrubber}
          min={MIN_TIME}
          max={MAX_TIME}
          value={time}
          onChangeValue={time => 
            edit(state => ({...state, time}))} />
            
      </div>
    )
  }
}

React.render(<App/>, document.getElementById('example'));
