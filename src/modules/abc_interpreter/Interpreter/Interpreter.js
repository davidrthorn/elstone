export default class AbcInterpreter {
    constructor (swung=false) {
        this.swung = swung
    }

    _splitToGroups = (sequence, groupLength) => {
        let result = ''
        const cols = this._splitToColumns(sequence)

        for (let i = 0; i < cols.length; i++) {
            if (i && i % groupLength === 0) {
                result += ' '
            }
            result += cols[i]
        }
        return result
    }

    _splitToColumns = sequence => sequence.match(/(\[[a-g]+\]|[a-gxz])/gi) || []

    _addNoteValuesToGroup = group => {
        const notes = this._splitToColumns(group)
        if (notes[1] === 'z') {
            if (notes[2] === 'z') {
                return notes[0] + '2'
            }
            return notes[0] + notes[2]
        }
        return group
    }

    _addNoteValuesToSequence = sequence => {
        const groups = sequence.split(' ')
        let withRests = groups.map(group => this._addNoteValuesToGroup(group))

        return withRests.join(' ')
    }
}