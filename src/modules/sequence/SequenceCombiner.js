export default class SeqeuenceCombiner {
    combine = sequences => {
        let result = ''
        const s = sequences.slice()
        const columns = this.toColumns(s)

        while (columns.length) {
            result += this.combineNotes(
                columns.shift()
            )
        }
        return result
    }

    combineNotes = column => {
        column = column.split('').sort().join('')

        const invalids = column.match(/[^a-gz]/gi)
        if (invalids) {
            const list = invalids
                .map(i => "'" + i + "'")
                .join(', ')
            throw new Error('Unsupported characters: ' + list)
        }

        if (column.search(/[a-g]+/gi) === -1) {
            return column.slice(-1)
        }

        column = this.removeRests(column)
        column = this.addBrackets(column)
        return this.removeDuplicates(column)
    }

    toColumns = arr => {
        const result = [];
        const desc = arr.sort((a, b) => b.length - a.length);
        let i = desc.length;
        while (i--) {
            for (let j = 0; j < desc[i].length; j++) {
                let note = desc[i][j];
                result[j] = result[j]
                    ? note + result[j]
                    : note;
            }
        }
        return result
    }

    removeDuplicates = column => {
        let result = ''
        for (let i = 0; i < column.length; i++) {
            if (!result.includes(column[i])) {
                result += column[i]
            }
        }
        return result
    }

    addBrackets = column => column.replace(/[a-g]{2,}/gi, '[$&]') 

    removeRests = column => column.replace(/z/gi, '')
}
