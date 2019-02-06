import NoteGenerator from './NoteGenerator'

test("Returns a rest when random number is greater than density", () => {
    const MockRandomizer = () => 0.8
    const ng = new NoteGenerator({
        randomizer: MockRandomizer,
        density: 0.5,
    })
    expect(ng.generate()).toBe('z')
})

test("Returns note at the appropriate index for a given random number", () => {
    let MockRandomizer = () => 0.4
    let ng = new NoteGenerator({
        randomizer: MockRandomizer,
        density: 0.6,
        range: ['a', 'b', 'c'],
    })
    expect(ng.generate()).toBe('b')

    MockRandomizer = () => 0.8
    ng = new NoteGenerator({
        randomizer: MockRandomizer,
        density: 0.9,
        range: ['a', 'b', 'c'],
    })
    expect(ng.generate()).toBe('c')
})