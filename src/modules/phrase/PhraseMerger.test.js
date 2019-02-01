import PhraseMerger from './PhraseMerger';
    const pm = new PhraseMerger();

// test('Simultaneous notes are wrapped in square brackets, rests are paired down', () => {
//     const pm = new PhraseMerger();
//     const toMerge = [
//         'ccz ccz caz zcz',
//         'DDz zaz zza aca',
//     ];

//     expect(pm.merge(toMerge)).toBe('[cD][cD]z c[ac]z caa aca')
// })

// test('Creates column strings', () => {
//     expect(pm.columnStrings(['aa b', 'zz'])).toEqual(['az', 'az', ' ', 'b']);
//     expect(pm.columnStrings(['aaa', 'bbb', 'ccc'])).toEqual(['abc', 'abc', 'abc']);
// })

test('Combines notes correctly', () => {
    expect(pm.combineNotes('acDz')).toBe('[acD]')
    expect(pm.combineNotes('zzz')).toBe('z')
    expect(pm.combineNotes('zzd')).toBe('d')
    expect(pm.combineNotes('bAd')).toBe('[bAd]')
})