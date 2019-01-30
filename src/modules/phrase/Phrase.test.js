import Phrase from './Phrase';

test('Phrase includes 2 bars separated by pipes', () => {
    const barValue = 'ccc ddd zzz aaa';
    let mockBar = {};
    mockBar.init = () => {};
    mockBar.getString = () => barValue;

    const P = new Phrase(mockBar);
    P.init(2)

    expect(P.getString()).toBe(`|: ${mockBar.getString()} | ${mockBar.getString()} :|`);
});
