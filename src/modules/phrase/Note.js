export default class Note {
    constructor (randomizer, density=0.7, range=['c']) {
        this.randomizer = randomizer;
        this.density = density;
        this.range = range;
    }
    generate = () => this.randomizer() > this.density
      ? 'z'
      : this.range[Math.floor(this.randomizer() * this.range.length)];
}