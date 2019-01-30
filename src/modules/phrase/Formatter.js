export default class Formatter {
    formatNoteValues = noteString => {
        const valueMap = {
            'zz[a-y]': 'z$1',
            '[a-y]zz': '$12',
            '[a-y]z[a-y]': '$1$1',
            'zzz': 'z2',
        }
        return noteString
            .split(' ')
            .map(notes => notes in valueMap ? valueMap[notes] : notes)
            .join(' ')
    }

    addTripletBrackets = noteString => {
        const triplets = [
            'czc',
            'ccc',
        ]
    }
}