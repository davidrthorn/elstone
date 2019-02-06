export class SequenceGenerator {
    constructor ({length=16, maxConsecutive=3, noteGenerator}) {
        this.length = length
        this.maxConsecutive = maxConsecutive
        this.noteGenerator = noteGenerator
    }
}