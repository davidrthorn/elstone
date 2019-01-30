export default class Sequence {
    constructor (lastNote='c', density=0.7, range=['c']) {
        this.lastNote = lastNote;
        this.noteString = '';
        this.density = density; 
        this.range = range;
    }

    getString = () => this.noteString;
    
    clear = () => {
        this.noteString = '';
        return this
    }
}