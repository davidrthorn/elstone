import React, { Component } from 'react';
import './App.css';

import abc from 'abcjs';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteString: `%%flatbeams 1
        M:4/4
        K:clef=perc
        V:all stems=up
        |: (3Dcz cD (3Dcc z2 :|`
    }
  }
  
  componentDidMount() {
    this.renderBars()
  }
  render() {
    return (
      <div className="App">
        <div id="paper"></div>
      </div>
    )
  }

  compileNoteString = () => {
    this.setState({
      noteString: `%%flatbeams 1
        M:4/4
        K:clef=perc
        V:all stems=up
        |: (3Dcz cA (3Dcc z2 :|`
    })
  }

  renderBars = () => {
    abc.renderAbc("paper", this.state.noteString, {scale: 2})
  }
}

export default App;
