export default class SequenceGenerator {
    constructor ({length=16, maxConsecutive=3, noteGenerator}) {
        this.length = length
        this.maxConsecutive = maxConsecutive
        this.noteGenerator = noteGenerator
    }

    generate = () => {
        let result = ''
        let l = this.length
        while (l--) {
            result += this.noteGenerator.generate()
        }

        return result
    }
}