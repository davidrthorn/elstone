import Sequence from './Sequence';

class Group extends Sequence {
    constructor(Note) {
        super();
        this.Note = Note;
    }
}

export class TripletGroup extends Group {

    init = () => {
        this.clear();
        let consecutive = 1;

        for (let i = 0; i < this.consecutive; i++) {
            let note = this.Note.generate();
            if (note === this.lastNote) {
                consecutive++;
            }
            if (consecutive > 3) {
                let attempts = 5;
                while (note === this.lastNote && attempts--) {
                    note = this.Note.generate();
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
}