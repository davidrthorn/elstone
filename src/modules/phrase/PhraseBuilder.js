import Note from './Note';
import { TripletGroup } from './Group';
import Bar from './Bar';
import Phrase from './Phrase';
import Formatter from './Formatter';

export default class PhraseBuilder {
    create = ({
        density = 0.7,
        range = ['c'],
        groupType = 'triplet'
    }) => {
        const randomizer = Math.random;
        const note = new Note(
            randomizer,
            density,
            range,
        )
        let group;
        switch (groupType) {
            case 'triplet':
                group = new TripletGroup(note);
                break
            default:
                group = new TripletGroup(note);
        }

        return new Phrase(
            new Bar(group),
            new Formatter()
        )
    }
}
