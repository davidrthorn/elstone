import SequenceGenerator from './SequenceGenerator'

test('Returns a sequence containing no more than the specified maximum consecutive notes', () => {
    const MockNoteGenerator = {}
    let counter = 0;

    MockNoteGenerator.generate = () => 'c'

    const sg = new SequenceGenerator({length: 8, noteGenerator: MockNoteGenerator})
    expect(sg.generate()).toBe('ccczcccz')
})