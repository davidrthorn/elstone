import Formatter from './Formatter';

test('Rest formatting is correct', () => {
    const fh = new Formatter();
    expect(fh.formatNoteValues('czz zzz azG zzB')).toBe('c2 z2 aG zB');
})

test('Triplet brackets added where appropriate', () => {
    const fh = new Formatter();
    expect(fh.addTripletBrackets('ccz cBc zcA zAz')).toBe('(3ccz (3cBc (3zcA (3zAz');
})

test('Triplet brackets not added where inappropriate', () => {
    const fh = new Formatter();
    const shouldNotChange = 'zzd zzz c2 Azd';
    expect(fh.addTripletBrackets(shouldNotChange)).toBe(shouldNotChange);
})