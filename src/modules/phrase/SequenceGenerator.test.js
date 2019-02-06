import SequenceGenerator from './SequenceGenerator'

test('Returns a sequence containing no more than the specified maximum consecutive notes', () => {
    let counter = 0;
    const MockGenerator = () =>
        counter++ % 4 === 0
            ? 'z'
            : 'c'
})