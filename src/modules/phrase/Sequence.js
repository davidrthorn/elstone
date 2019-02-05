export default class Sequence {
    constructor (lastNote='c', density=0.7, range=['c'], maxConsecutive=3) {
        this.lastNote = lastNote;
        this.noteString = '';
        this.density = density; 
        this.range = range;
        this.consecutive = maxConsecutive;
    }

    getString = () => this.noteString;
    
    clear = () => {
        this.noteString = '';
        return this
    }
}