export default class SequenceGenerator {
    constructor ({length=16, maxConsecutive=3, noteGenerator}) {
        this.length = length
        this.maxConsecutive = maxConsecutive
        this.noteGenerator = noteGenerator
    }

    generate = () => {
        let lastNote = 'z'
        let consecutive = 1
        let result = ''
        let remaining = this.length

        while (remaining--) {
            let note = this.noteGenerator.generate()

            if (note === lastNote && ++consecutive > this.maxConsecutive) {
                let attempts = 0
                while (note === lastNote) {
                    note = this.noteGenerator.generate()
                    if (++attempts > 8) {
                        note = 'z'
                        attempts = 0
                    }
                }
                consecutive = 1
            }

            result += note
            lastNote = note
        }

        return result
    }
}