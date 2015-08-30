import React, {Component} from 'react';
import {Easer} from 'functional-easing';
import {tween} from 'react-track/tween';
import {rotate, percent} from 'react-track/tween-value-factories';
import Scrubber from './Scrubber';
import Timeline from 'react-track/timeline';
import {Spring} from 'react-motion';

const easeOutBounce = new Easer().using('out-bounce');
const easeOutSine = new Easer().using('out-sine');

const MIN_TIME = 0;
const MAX_TIME = 100;

const styles = {
  scrubber: {
    width: '100%',
    boxSizing: 'border-box',
  },
  ball: {
    borderRadius: '50%', 
    width: '20px', 
    height: '20px',
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.2
  }
};

class App extends Component {
  
  render() {
    return (
      <Timeline 
        playOnMount={true}
        min={MIN_TIME} 
        max={MAX_TIME} 
        loop={true}>
      {({time, playing, togglePlay, setTime}) => {
        
        const top = (100 + 40 * Math.sin(time/5));
        const left = tween(time, {
          [MIN_TIME]: 0,
          [MAX_TIME]: 100
        }, easeOutSine);
        
        return <div style={{padding: 30}}>
        
          <Spring endValue={{val: {top,left}}}>
          {interpolated =>
            <div
              style={{
                ...styles.ball,
                top: interpolated.val.top,
                left: interpolated.val.left + '%',
              }} />
          }</Spring>
          
          <div 
            style={{
              ...styles.ball,
              top,
              left: left + '%'
            }}/>
          
          <h2
            style={tween(time, {
              [MIN_TIME]: { transform: rotate(0) },
              [MAX_TIME]: { transform: rotate(360) } }, 
              easeOutBounce)}>
            spin
          </h2>
          
          <button onClick={togglePlay}>
            {playing ? 'pause' : 'play'}
          </button>
          
          <Scrubber
            style={styles.scrubber}
            min={MIN_TIME}
            max={MAX_TIME}
            value={time}
            onChangeValue={setTime} />
            
        </div>}
        
      }</Timeline>
    )
  }
}

React.render(<App/>, document.getElementById('example'));
