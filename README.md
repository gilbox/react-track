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
