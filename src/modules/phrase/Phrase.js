import Sequence from './Sequence';

export default class Phrase extends Sequence {
    constructor (Bar, Formatter) {
        super();
        this.Bar = Bar;
        this.Formatter = Formatter;
    }

    init = bars => {
        this.noteString += '|:'
        for (let i = 0; i < bars; i++) {
            let ending = i === bars - 1 ? ':|' : '|';
            this.Bar.init();
            this.noteString += ' ' + this.Bar.getString() + ' ' + ending;
        }
    }

    getFormattedString = () => this.Formatter.format(this.noteString);
}
