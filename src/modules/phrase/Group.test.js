import { TripletGroup } from './Group';

test('Group does not include 3 notes that match last known note', () => {
    const TG = new TripletGroup();
    TG.NoteGenerator.generate = () => {
        return 'c'
    };

    TG.init();

    expect(TG.getRawString()).toBe('ccz')
});


test('Fix rests replaces notes correctly', () => {
    const TG = new TripletGroup();

    expect(TG.fixRests('czc')).toBe('cc')
    expect(TG.fixRests('czz')).toBe('c2')
    expect(TG.fixRests('zzc')).toBe('zc')
    expect(TG.fixRests('zzz')).toBe('z2')
    expect(TG.fixRests('zcz')).toBe('zcz')
});
