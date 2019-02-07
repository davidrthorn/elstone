import SequenceGenerator from './SequenceGenerator'

test('Returns a sequence containing no more than the specified maximum consecutive notes', () => {
    const MockNoteGenerator = {
        generate: () => 'c'
    }

    const sg = new SequenceGenerator({length: 16, noteGenerator: MockNoteGenerator})
    expect(sg.generate()).toBe('ccczccczccczcccz')
})