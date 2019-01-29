import Sequence from './Sequence';
import NoteGenerator from './NoteGenerator';

class Group extends Sequence {
    constructor(lastNote='c') {
        super();
        this.lastNote = lastNote;
        this.noteString = '';
        this.NoteGenerator = new NoteGenerator(Math.round, this.density, this.range);
    }
}

export class TripletGroup extends Group {

    init = () => {
        let consecutive = 1;

        for (let i = 0; i < 3; i++) {
            let note = this.NoteGenerator.generate();
            if (note === this.lastNote) {
                consecutive++;
            }
            if (consecutive > 3) {
                let attempts = 5;
                while (note === this.lastNote && attempts--) {
                    note = this.NoteGenerator.generate();
                    if (!attempts) {
                        note = 'z';
                    }
                }
                consecutive = 0;
            }
            this.noteString += note;
            this.lastNote = note;
        }
    return this
    }

    fixRests = notes => {
        const mp = {
            'zzc': 'zc',
            'czz': 'c2',
            'czc': 'cc',
            'zzz': 'z2',
        }
        return notes in mp ? mp[notes] : notes
    }

    getRawString = () => {
        return this.noteString
    }
    
    getString = () => {
        return this.fixRests(this.noteString)
    }

}