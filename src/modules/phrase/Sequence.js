export default class Sequence {
    constructor (lastNote='z', density=0.7, range=['c']) {
        this.lastNote = lastNote;
        this.noteString = '';
        this.density = density; 
        this.range = range;
    }

    getString = () => this.noteString;
}