export default class AbcInterpreter {
    splitToGroups = (sequence, groupLength) =>
        sequence
            .match(
                new RegExp('.{1,' + groupLength + '}', 'g')
            )
            .join(' ')
}