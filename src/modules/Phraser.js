class Phraser {
  constructor (range = ['c'], density = 0.7, randomizer = Math.random) {
    this.range = range;
    this.density = density;
    this.randomizer = randomizer;
  }

  getNote = () =>
    this.randomizer() > this.density
      ? 'z'
      : this.range[Math.floor(this.randomizer() * this.range.length)]

  triplet = previousNote => {
    previousNote = previousNote || 'z';
    let final = '';
    let consecutive = 1;
    
    for (let i = 0; i < 3; i++) {
      let note = this.getNote();
      if (note === previousNote) {
        consecutive++
      }
      if (consecutive > 2) {
        let attempts = 5;
        while (note === previousNote && attempts--) {
          note = this.getNote()
        }
      }
      final += note;

      return final
    }
  }

  tripletBar = () => {
    
  };

  tripletPhrase = bars => {
    let inner = '|: ';
    while (bars--) {
      inner += this.tripletBar();
      inner += bars ? '| ' : ' :|';
    }

    return `%%flatbeams 1
      K: clef=perc
      M: 4/4
      (3Dcz dd`
  };
}

export class PhraseCleaner {

  fixRests = phrase => {
    const replacements = {
      'zzz': 'z2x',
      'zz([a-y])': 'z$1',
      '([a-y])zz': '$12x',
      '([a-y])z([a-y])': '$1$2',
    }

    for (let r in replacements) {
      let rxp = new RegExp(r, 'gi');
      phrase = phrase.replace(rxp, replacements[r]);
    }

    return phrase
  };

  addTripletBrackets = phrase => {
    const aaa = '[a-y]{3}';
    const zaa = 'z[a-y]{2}';
    const aaz = '[a-y]{2}z';
    const zaz = 'z[a-y]z';

    const rxp = new RegExp(`(${aaa}|${zaa}|${aaz}|${zaz})`, 'gi')

    return phrase.replace(rxp, '(3$1')
  };

  clean = phrase => {
    phrase = this.fixRests(phrase);
    phrase = this.addTripletBrackets(phrase);
    return phrase
  };
}

export default Phraser;