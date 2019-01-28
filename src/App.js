import React, { Component } from 'react';
import './App.css';

import abc from 'abcjs';

class App extends Component {
  componentDidMount() {
    abc.renderAbc('paper',
    `%%flatbeams 1
    M:4/4
    K:clef=perc
    V:all stems=up
    |: (3Dcz cA (3Dee z2 :|`, {scale: 2})
  }
  render() {
    return (
      <div className="App">
        <div id="paper"></div>
      </div>
    );
  }
}

export default App;
