import React, {Component} from 'react';
import {Easer} from 'functional-easing';
import {tween} from 'react-track/tween';
import {translateY} from 'react-track/tween-value-factories';
import Timeline from 'react-track/timeline';
import stateful from 'react-stateful-stream';
import {track, derive} from 'react-derive';
import u from 'updeep';
const immutable = u({});

const easeOutElastic = new Easer().using('out-elastic').withParameters(2,.6);
const easeOutSine = new Easer().using('out-sine');

const borderColor = 'rgba(255,255,255,1.0)';
const listStyle = { color: '#ccc' };

@stateful(immutable({
  isOver: false,
  currentIndex: 0
}))
@derive({
  @track('currentIndex')
  newList({currentIndex, list}) { // re-arrange list
    const currentItem = list[currentIndex];
    return list.filter(item => item !== currentItem)
               .sort(() => Math.random() - .5);
  },

  @track('currentIndex')
  partitionedList() {
    return [ this.newList().slice(0,-3),
             this.newList().slice(-3)    ];
  }
})
export default class RollButton extends Component {
  render() {
    const { currentIndex,
            staticText,
            edit,
            isOver,
            list,
            partitionedList,
            width,
            height } = this.props;
    const [topList, bottomList] = partitionedList;
    const update = updates => edit(u(updates));
    const currentText = list[currentIndex];

    return (
      <div
        style={{
          width,
          height,
          cursor: 'pointer',
          border: '4px solid ' + borderColor,
          background: isOver ? borderColor : 'transparent',
          borderRadius: 2,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
        onMouseEnter={event => {
          this.timeline.setTime(0);
          this.timeline.play();
          update({
            currentIndex: ~~(Math.random() * list.length),
            isOver: true
          });
        }}
        onMouseLeave={event =>
          update({isOver: false})}>
        <div
          style={{
            position: 'relative',
            verticalAlign: 'middle',
            color: isOver ? 'black' : 'white',
          }}>

          <div style={{ display: 'inline-block' }}>
           {staticText}&nbsp;
          </div>

          <div style={{display: 'inline-block', position: 'relative'}}>
            <Timeline ref={ref => this.timeline=ref} max={53}>
            {({time}) =>
              isOver &&
                <div style={{
                  position: 'absolute',
                  ...tween(time, {
                      0: { transform: translateY(450), ease: easeOutSine },
                      30: { transform: translateY(-15), ease: easeOutElastic },
                      50: { transform: translateY(0) },
                    })
                  }}>
                  <div style={{opacity: tween(time, {0: 1, 30: 1, 40: 0}), position: 'absolute', bottom: 0, textAlign: 'left'}}>
                    {topList.map(item =>
                      <div style={listStyle} key={item}>{item}</div>)}
                  </div>
                  <div style={{position: 'absolute', top: '100%', textAlign: 'left'}}>
                    <div style={{color: 'black', opacity: tween(time, {0:0.4, 18:0.4, 22:1})}}>{currentText}</div>
                    {bottomList.map(item =>
                      <div style={{opacity: tween(time, {0: 1, 30: 1, 40: 0}), ...listStyle}} key={item}>{item}</div>)}
                  </div>
                </div>
            }</Timeline>
            <span style={isOver ? {color: 'transparent'} : {}}>{currentText}</span>
          </div>

        </div>
      </div>)
  }
}
