# react-track

Track the position of DOM elements.

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
which comes from `document.documentElement.getClientBoundingRect()`.

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

The signature for all `formulas` props is:
 
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

Here's another valid formula which returns a valid formula:

    const centerCenter = (containerRect, container) => rect => 
      ~~(rect.top + rect.height / 2 - containerRect.top - container.clientHeight / 2);


## `tween(currentFrame, keyframes)`

This repo includes an animation utility function which should probably
be maintained as a separate project, but for now it lives here.

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

I need to add more documentation about the `tween` function, but in the 
meantime see the example in the repo.