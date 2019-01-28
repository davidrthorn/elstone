import React, { Component } from 'react';
import './App.css';

import abc from 'abcjs';

class App extends Component {
  componentDidMount() {
    abc.renderAbc('paper',
    `%%flatbeams 1
    (3Dcz cc (3Dcc z2x`, {scale: 2})
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
