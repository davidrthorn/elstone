import Sequence from './Sequence';

export default class Phrase extends Sequence {
    constructor (Bar) {
        super();
        this.Bar = Bar;
        this.noteString = '|:';
    }

    init = bars => {
        for (let i = 0; i < bars; i++) {
            let ending = i === bars - 1 ? ':|' : '|';
            this.Bar.init();
            this.noteString += ' ' + this.Bar.getString() + ' ' + ending;
        }
    }
}
