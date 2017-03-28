# react-track

Avoid it if you can, but for a certain class of (mostly animation-related)
problems, you need to query the DOM. This library provides a way to track
DOM elements in a functional, declarative manner.

    npm install react-track --save


**Note: tweening, animation, and timeline-related stuff lives here: [`react-imation`](https://github.com/gilbox/react-imation)**


- [Demo](http://gilbox.github.io/react-track/examples/demo/demo.html): [[source](https://github.com/gilbox/react-track/blob/master/examples/demo/app.js)] tracking components and tweening


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

It's important to note that `AwesomeComponent` must be stateful in this example.
At the time of writing `react-track` does not support stateless functional
components (SFCs) due to its reliance on the ref attribute, which such
components do not provide. In order to track an SFC, wrap it in a
[TrackedDiv](#trackeddiv-).

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

### `trackedRef`

`<Track />` supports an optional `trackedRef` prop which
is type `Function`, and works the same way as the functional form of 
React's built-in `ref` prop.

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

## Contributing

### Publishing to NPM

- First make sure to bump the version number in `package.json` in accordance with semantic versioning practices. If you think a major version bump is warranted, go for it!

        # preparation
        npm run build-npm
        
        # actually publish to npm
        npm run publish

- Create a git tag and publish it

        git tag vVERSION.NUMBER.WHATEVER
        git push origin vVERSION.NUMBER.WHATEVER
