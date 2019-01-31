import React, { Component } from 'react';
import './App.css';

import abc from 'abcjs';
import PhraseContainer from './modules/phrase/PhraseContainer';

class App extends Component {

  componentDidMount() {
    const pc = new PhraseContainer();
    const phrase = pc.create();
    phrase.init(1);
    console.log('Phrase: ' + phrase.getFormattedString());

    this.renderBars(this.compileNoteString(phrase.getFormattedString()));
  }

  render() {
    return (
      <div className="App">
        <div id="paper"></div>
      </div>
    )
  }

  compileNoteString = (noteString) => `%%flatbeams 1
        M: 4/4
        K: clef=perc
        V:all stems=up
        ${noteString}`

  renderBars = noteString => {
    abc.renderAbc(
      "paper",
      noteString,
      {
        scale: 2,
        add_classes: true,
        staffwidth: 600,
      },
      {},
      {
        oneSvgPerLine: true,
      }
    )
  }
}

export default App;
