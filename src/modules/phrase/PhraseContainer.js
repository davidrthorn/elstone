import Note from './Note';
import { TripletGroup } from './Group';
import Bar from './Bar';
import Phrase from './Phrase';
import Formatter from './Formatter';

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
            ),
            new Formatter()
        )
    }
}
