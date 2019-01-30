import Sequence from './Sequence';

export default class Phrase extends Sequence {
    constructor (Bar) {
        super();
        this.Bar = Bar;
    }

    init = bars => {
        this.Bar.init();
        `|: ${this.Bar.getString()} |`.repeat(bars)
    }
}
