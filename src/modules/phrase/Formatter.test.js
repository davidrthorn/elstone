import Formatter from './Formatter';

test('Rest formatting is correct', () => {
    const fh = new Formatter();
    expect(fh.formatNoteValues('czz zzz azG zzB')).toBe('c2 z2 aG zB')
})

test('Triplet brackets added correctly', () => {
    const fh = new Formatter();
    expect(fh.addTripletBrackets('czc cBc zcA zzd zzz c2')).toBe('(3czc (3cBc (3zcA zzd zzz c2')
})