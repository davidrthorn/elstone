export default class PhraseMerger {

    merge = phrases => {
        let newPhrase = '';
        const [matrix, longest] = this.arrayToMatrix(phrases);

        for (let i = 0; i < longest; i++) {
            for (let i = 0; i < matrix.length; i++) {

            }
        }

    }


    combineNotes = column =>
        column.search(/[a-g]/gi) === -1
            ? 'z'
            : column
                .replace(/(x|z)/gi, '')
                .replace(/\w{2,}/gi, '[$&]');


    columnStrings = arr => {
        let result = [];
        let desc = arr.slice(0).sort((a, b) => b.length - a.length);
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