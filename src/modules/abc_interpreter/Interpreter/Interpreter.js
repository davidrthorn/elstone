export default class AbcInterpreter {
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

    _splitToColumns = sequence => sequence.match(/(\[[a-g]+\]|[a-g])/gi) || []
}