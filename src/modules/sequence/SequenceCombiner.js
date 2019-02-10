export default class SeqeuenceCombiner {
    merge = sequences => {
        let result = '';
        const phraseCopy = sequences.slice();
        const columns = this.columnStrings(phraseCopy);

        while (columns.length) {
            result += this.combineNotes(
                columns.shift()
            );
        }
        return result
    }

    combineNotes = column =>
        column.search(/^(x|z|[ ])\1*$/gi) !== -1
            ? column[0]
            : column
                .replace(/(x|z|[ ])/gi, '')
                .split('')
                .sort()
                .join('')
                .replace(/[a-g]{2,}/gi, '[$&]')

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
}
