import React, { Component } from 'react';
import './App.css';

import abc from 'abcjs';
import PhraseContainer from './modules/phrase/PhraseContainer';

class App extends Component {

  componentDidMount() {
    const pc = new PhraseContainer();
    const phrase = pc.create();
    phrase.init(2);
    console.log('Phrase: ' + phrase.getString());
    this.renderBars(this.compileNoteString(phrase.getString()));
  }

  render() {
    return (
      <div className="App">
        <div id="paper"></div>
      </div>
    )
  }

  compileNoteString = (noteString) => `%%flatbeams 1
        M:4/4
        K:clef=perc
        V:all stems=up
        ${noteString}`

  renderBars = noteString => {
    abc.renderAbc("paper", noteString, {scale: 2})
  }
}

export default App;
