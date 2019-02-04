import PhraseMerger from './PhraseMerger';
    const pm = new PhraseMerger();

test('Simultaneous notes are wrapped in square brackets, rests are paired down', () => {
    const pm = new PhraseMerger();
    const toMerge = [
        'ccz ccz caz zcz',
        'DDz zaz zza aca',
    ];

    expect(pm.merge(toMerge)).toBe('[Dc][Dc]z c[ac]z caa a[cc]a')
})

test('columnStrings creates column strings', () => {
    expect(pm.columnStrings(['aa b', 'zz'])).toEqual(['az', 'az', ' ', 'b']);
    expect(pm.columnStrings(['aaa', 'bbb', 'ccc'])).toEqual(['abc', 'abc', 'abc']);
})

test('combineNotes combines notes correctly', () => {
    expect(pm.combineNotes('acDz')).toBe('[Dac]')
    expect(pm.combineNotes('zzz')).toBe('z')
    expect(pm.combineNotes('zzd')).toBe('d')
    expect(pm.combineNotes('bAd')).toBe('[Abd]')
    expect(pm.combineNotes('z d')).toBe('d')
    expect(pm.combineNotes('   ')).toBe(' ')
})
