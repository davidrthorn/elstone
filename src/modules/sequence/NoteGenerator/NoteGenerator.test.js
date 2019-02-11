import NoteGenerator from './NoteGenerator'

test("Generate returns a rest when random number is greater than density", () => {
    const MockRandomizer = () => 0.8
    const ng = new NoteGenerator({
        randomizer: MockRandomizer,
        density: 0.5,
    })
    expect(ng.generate()).toBe('z')
})

test("Generate returns note at the appropriate index for a given random number", () => {
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

test("noteOtherThan returns 'z' when it runs out of attempts", () => {
    let ng = new NoteGenerator({})
    ng.generate = () => 'c'

    expect(ng.noteOtherThan('c')).toBe('z')
})

test("noteOtherThan returns 'a' when it pops up after a run of lastNotes", () => {
    let ng = new NoteGenerator({})
    let MockValues = ['c', 'c', 'c', 'c', 'a']
    let counter = 0
    ng.generate = () => MockValues[counter++]

    expect(ng.noteOtherThan('c')).toBe('a')
})