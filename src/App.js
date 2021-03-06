import React, { Component } from 'react';
import './App.css';

import abc from 'abcjs';
import NoteGenerator from './modules/sequence/NoteGenerator/NoteGenerator'
import SequenceGenerator from './modules/sequence/SequenceGenerator/SequenceGenerator'
import SequenceCombiner from './modules/sequence/SequenceCombiner/SequenceCombiner'
import AbcInterpreter from './modules/abc_interpreter/Interpreter/Interpreter'

class App extends Component {

  componentDidMount() {
    let noteGenerator = new NoteGenerator({
      range: ['c'],
      density: 0.5,
    })

    let config = {
      length: 12,
      maxConsecutive: 2,
      noteGenerator: noteGenerator,
    }

    let sg = new SequenceGenerator(config)
    const s1 = sg.generate()

    const s2 = 'DzzzDzzzzDzz'

    const combiner = new SequenceCombiner()
    const sequence = combiner.combine([s1, s2])
    const interpreter = new AbcInterpreter()
    this.renderBars(this.compileNoteString(interpreter.interpretSequence(sequence, 3)))
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
