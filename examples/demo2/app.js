import React, {Component} from 'react';
import {Easer} from 'functional-easing';
import {tween} from 'react-track/tween';
import {rotate} from 'react-track/tween-value-factories';
import Scrubber from './Scrubber';
import Timeline from 'react-track/timeline';

const easeOutBounce = new Easer().using('out-bounce');

const MIN_TIME = 0;
const MAX_TIME = 100;

const styles = {
  scrubber: {
    width: '100%',
    boxSizing: 'border-box',
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
      {({time, playing, togglePlay, setTime}) =>
        
        <div style={{padding: 30}}>
        
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
            
        </div>
        
      }</Timeline>
    )
  }
}

React.render(<App/>, document.getElementById('example'));
