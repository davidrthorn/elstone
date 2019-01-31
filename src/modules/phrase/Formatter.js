export default class Formatter {
    formatNoteValues = noteString => {
        let output = noteString;
        const replacements = {
            'zz([a-y])': 'z$1',
            '([a-y])zz': '$12',
            '([a-y])z([a-y])': '$1$2',
            'zzz': 'z2',
        };

        for (let target in replacements) {
            output = output.replace(
                new RegExp(target, 'gi'),
                replacements[target]
            );
        };

        return output;
    }

    addTripletBrackets = noteString => {
        let output = noteString;
        const replacements = [
            'z[a-y]z',
            'z[a-y][a-y]',
            '[a-y][a-y][a-y]',
            '[a-y][a-y]z',
        ];

        replacements.forEach(r => {
            output = output.replace(new RegExp(r, 'gi'), '(3$&');
        });

        return output;
    }

    format = (noteString) => {
        let output = noteString;
        output = this.addTripletBrackets(output);
        output = this.formatNoteValues(output);
        return output;
    }
}