import React, {Component} from 'react';
import RollButton from './RollButton';

class App extends Component {

  render() {
    return (
      <div>
        <a href="https://github.com/gilbox/react-track">
          <img
            style={{position: 'absolute', top: 0, right: 0, border: 0}}
            src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67"
            alt="Fork me on GitHub"
            dataCanonicalSrc="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png" /></a>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}>
          <div>
            <div style={{ width: 300, textAlign: 'center', marginBottom: '20px' }}>
              <code>button inspired by <a href="https://precursorapp.com/">precursor app</a></code>
            </div>
            <div>
              <RollButton
                width={300}
                height={70}
                staticText="Hug"
                list={['Softly', 'Blindly', 'Later',
                       'Twice', 'Longingly', 'Randomly',
                       'Always', 'Freely', 'Warmly',
                       'Generously', 'Forever', 'Often',
                       'Money', 'Gold', 'Funny',
                       'Scrappy', 'Steampunk', 'Instant',
                       'Homemade', 'DIY', 'Green',
                       'Fun', 'Funky', 'Burpy']} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

React.render(<App/>, document.getElementById('example'));
