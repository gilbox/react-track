# react-track

Avoid it if you can, but for a certain class of (mostly animation-related)
problems, you need to query the DOM. This library provides a way to track
DOM elements in a functional, declarative manner. Also included are 
various composable utilities for creating complex timeline-based animation 
in a react-y component-driven fashion.

    npm install react-track --save
    
- [Demo](http://gilbox.github.io/react-track/examples/demo/demo.html): [[source](https://github.com/gilbox/react-track/blob/master/examples/demo/app.js)] tracking components and tweening
- [Demo2](http://gilbox.github.io/react-track/examples/demo2/demo.html): [[source](https://github.com/gilbox/react-track/blob/master/examples/demo2/app.js)] tweening, `<Timeline />`, `react-motion`

<sub>This repo currently 
contains a number of components and functions that don't depend
on each other, but compose nicely to create interesting animations.
Some of the code is related to tracking DOM elements, but the rest
are more generally applicable to animation.
At some point they may be split up into various npm packages but for now
they all live in `react-track`.</sub>

## `<TrackDocument />`

Used to track:

- `document.documentElement`
- `document.documentElement.getBoundingClientRect()`

```
import {TrackDocument, Track} from 'react-track';
import {getDocumentRect,
        getDocumentElement} from 'react-track/tracking-formulas';
        
// ...render:
  <TrackDocument formulas={[getDocumentRect]}>
  {rect => 
    <div>
      The height of documentElement is {rect.height}
    </div>}
  </TrackDocument>
```
      
## `<Track />`

Use `<Track />` to track any Component instance. For example,
track an `<h2 />`:

    import {TrackDocument, Track} from 'react-track';
    import {topTop} from 'react-track/tracking-formulas';
    
    
    // ...render:
      <TrackDocument formulas={[topTop]}>
      {topTop => 
        
        <Track component="h2" formulas={[topTop]}>
        {(H2,posTopTop) => 
          <H2>My top is {posTopTop}px from the viewport's top.</H2>
        }</Track>
        
      }</TrackDocument>
      

or track your `AwesomeComponent`

    // ...render:
      <TrackDocument formulas={[topTop]}>
      {topTop => 
        
        <Track component={AwesomeComponent} formulas={[topTop]}>
        {(AwesomeComponentTracked,posTopTop) => 
          <AwesomeComponentTracked>
            My top is {posTopTop}px from the viewport's top.
          </AwesomeComponentTracked>
        }</Track>
        
      }</TrackDocument>
      
Note that in the code above, there are two different
scopes with a `topTop` variable. One scope is nested
inside of the other. The `topTop` variable of the inner
scope is the result of calling the `topTop` of the
outer scope which returns type function. Here is the definition of the `topTop`
function of the outer scope:

    export const topTop = containerRect => rect => 
      ~~(rect.top - containerRect.top);
      
In the outer scope, the `<TrackDocument />` component supplies
the `containerRect` argument, which comes from 
`document.documentElement.getClientBoundingRect()`.
In the inner scope, the `<Track />` component supplies the `rect` argument
which comes from `awesomeDOMElement.getClientBoundingRect()`.

## `<TrackedDiv />`

It's pretty common to need to track a div, so there's
`TrackedDiv` component which is a slightly simpler version of `Track`:

    import {TrackDocument, TrackedDiv} from 'react-track';
    import {topBottom} from 'react-track/tracking-formulas';
    
    // ...render:
      <TrackDocument formulas={[topBottom]}>
      {topBottom => 
        
        <TrackedDiv formulas={[topBottom]}>
        {(posTopBottom) => 
          <b>My top is {posTopBottom}px from the viewport's bottom</b>
        }</TrackedDiv>
        
      }</TrackDocument>
      
## `tracking-formulas.js`

The tracking components
explained above all accept a `formulas` prop which expects an array
of formula functions. When a tracking component renders, it passes
the same arguments to all of the `formulas` and the results
are passed as arguments into the function which you should 
supply to the `children` prop of the tracking component.

The signature for all formula functions which are passed as an 
array into the `formulas` prop is:
 
    trackingFormula(rect, element) {
      // return any type
    }
    
Of course, it's common to only utilize the first
or second argument.

Notice that all of the following are valid formulas
that only utilize a single argument:

    const getDocumentRect = documentRect => documentRect;
    const getDocumentElement = (_,documentElement) => documentElement;
    const calculateScrollY = ({top}) => -top;

Here's a valid formula which returns a valid formula:

    const centerCenter = (containerRect, container) => rect => 
      ~~(rect.top + rect.height / 2 - containerRect.top - container.clientHeight / 2);

When a formula returns a formula, we are calculating something that
relies on tracking two different elements. In this case, `centerCenter`
calculates the distance from the vertical center of some element to
the vertical center of some container element. The container element could
be `document.documentElement` if you utilize `TrackDocument`, 
or it could be any other DOM element if you utilize `Track` or `TrackedDiv`.

Creating custom formulas is relatively easy. 
Check out [`tracking-formulas.js`](https://github.com/gilbox/react-track/blob/master/src/tracking-formulas.js)
for inspiration.

## `tween(currentFrame, keyframes)`

The first argument, `currentFrame` is a number representing the current 
position in the animation **timeline**. It can represent actual time, or as in the 
example below, it can represent the current scroll position.

The aforementioned **timeline** is represented by the `keyframes`
argument which is an object whose entries represent 
timeline positions and their associated values.
Note that `tween` assumes that the keyframes are sorted. 

    import {TrackDocument, Track} from 'react-track';
    import {topTop} from 'react-track/tracking-formulas';
    import {tween} from 'react-track/tween';
    import {rgb, translate3d} from 'react-track/tween-value-factories';

    // ...render:
      <TrackDocument formulas={[topTop]}>
      {topTop => 
        
        <Track component={AwesomeComponent} formulas={[topTop]}>
        {(AwesomeComponentTracked,posTopTop) => 
          <AwesomeComponentTracked
            style={tween(scrollY, {
              [posTopTop]: { opacity: 1, color: rgb(255,0,0), transform: translate3d(0,150,0) },
              [posTopTop+200]: { opacity: 0, color: rgb(0,255,0), transform: translate3d(0,100,0) } })} />
        }</Track>
        
      }</TrackDocument>

Tweening values that require special formatting is
super-easy. All you have to do is create a new
tween value factory. Check out 
[`tween-value-factories.js`](https://github.com/gilbox/react-track/blob/master/src/tween-value-factories.js)
and you'll see what I mean.

I need to add more documentation about the `tween` function, but in the 
meantime see the examples in the repo.

## `<Timeline />`

Timeline as a component. Manages the state of `time`.
Timeline as a component is super-handy. 
You can spend less time thinking about managing the current
time and more time building your animation. 

    <Timeline 
      playOnMount={true}
      min={0} 
      max={100} 
      loop={true}>
    {({time, playing, togglePlay, setTime}) => 
      <div>
        
        The timeline is {playing ? '' : 'not '}playing! <br />
        Current time is {time}. <br />
        
        We can easily create a pause button like this:<br />
        <button onClick={togglePlay}>
          {playing ? 'pause' : 'play'}
        </button>
        
        <br />
        
        ... or jump around the timeline: <br />
        <button onClick={event => setTime(50)}>
          Jump to 50
        </button>
        
      </div>
    }</Timeline>

The `<Timeline />` component is pretty basic right now. If you 
encounter a missing feature that you need, please add it and submit a PR. 
You'll find that modifying the component is straightforward.
