import Note from './Note';
import { TripletGroup } from './Group';
import Bar from './Bar';
import Phrase from './Phrase';

export default class PhraseContainer {
    create = () => {
        const randomizer = Math.random;
        return new Phrase(
            new Bar(
                new TripletGroup(
                    new Note(
                        randomizer
                    )
                )
            )
        )
    }
}
