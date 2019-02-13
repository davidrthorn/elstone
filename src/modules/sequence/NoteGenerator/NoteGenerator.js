export default class NoteGenerator {
    constructor ({range=['c'], density=0.6, randomizer=Math.random}) {
        this.range = range
        this.density = density
        this.randomizer = randomizer
    }
    
    generate = () => {
        if (this.randomizer() > this.density) {
            return 'z'
        }
        const randomIndex = Math.floor(this.randomizer() * this.range.length)
        return this.range[randomIndex]
    }

    noteOtherThan = lastNote => {
        let attempts = 10
        while (attempts--) {
            let note = this.generate()
            if (note === lastNote) {
                return note
            }
        }
        return 'z'
    }
}
