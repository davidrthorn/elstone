export default class AbcInterpreter {
    splitToGroups = (sequence, groupLength) => {
        if (!sequence.length) {
            return ''
        }
        if (!groupLength) {
            return sequence
        }

        const target = new RegExp('.{1,' + groupLength + '}', 'g')
        return sequence
            .match(target)
            .join(' ')
    }
}