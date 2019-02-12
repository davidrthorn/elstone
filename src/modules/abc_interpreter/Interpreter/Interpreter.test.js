import AbcInterpreter from './Interpreter'

const i = new AbcInterpreter()

test('splitByGroup splits a sequence into the appropriate groups', () => {
    expect(i._splitToGroups('aabccdeefggc', 3)).toBe('aab ccd eef ggc')
    expect(i._splitToGroups('aabccdeefggc', 4)).toBe('aabc cdee fggc')
})

test('splitByGroup leaves a shorter final group when sequence length is not divisible by group length', () => {
    expect(i._splitToGroups('aabccdeefgg', 3)).toBe('aab ccd eef gg')
    expect(i._splitToGroups('aabccdeefgg', 4)).toBe('aabc cdee fgg')
})

test('splitByGroup leaves sequence alone when group length is 0', () => {
    expect(i._splitToGroups('aabccdeefggg', 0)).toBe('aabccdeefggg')
})

test('splitByGroup returns empty string for empty sequence', () => {
    expect(i._splitToGroups('', 4)).toBe('')
})

test('splitByGroup handles bracketed notes', () => {
    expect(i._splitToGroups('A[bc]d[EFg]', 2)).toBe('A[bc] d[EFg]')
    expect(i._splitToGroups('A[bc]', 2)).toBe('A[bc]')
    expect(i._splitToGroups('[abc][def][ade][age]', 2)).toBe('[abc][def] [ade][age]')
    expect(i._splitToGroups('[abc][def][cab]', 2)).toBe('[abc][def] [cab]')
})

test('_splitToColumns works as expected', () => {
    expect(i._splitToColumns('[AB]cd[EF]')).toEqual(['[AB]', 'c', 'd', '[EF]'])
    expect(i._splitToColumns('[AB][EF]')).toEqual(['[AB]', '[EF]'])
})

test('_addNoteValuesToGroup adds eight notes to appropriate triplet phrases when swung', () => {
    expect(i._addNoteValuesToGroup('AzB')).toBe('AB')
})

test('_addNoteValuesToGroup handles brackets', () => {
    expect(i._addNoteValuesToGroup('[Abc]zB')).toBe('[Abc]B')
    expect(i._addNoteValuesToGroup('zzz')).toBe('z2')
    expect(i._addNoteValuesToGroup('[cd]zz')).toBe('[cd]2')
})

test('_addNoteValuesToGroup leaves inappropriate groups alone', () => {
    expect(i._addNoteValuesToGroup('ccz')).toBe('ccz')
    expect(i._addNoteValuesToGroup('[cc]dz')).toBe('[cc]dz')
})

test('_addTripletBrackets adds brackets where appropriate', () => {
    expect(i._addTripletBrackets('ccz')).toBe('(3ccz')
    expect(i._addTripletBrackets('zAc')).toBe('(3zAc')
    expect(i._addTripletBrackets('zbz')).toBe('(3zbz')
})

test('_addTripletBrackets handles simultaneous notes', () => {
    expect(i._addTripletBrackets('c[cA]z')).toBe('(3c[cA]z')
    expect(i._addTripletBrackets('z[Ab][Da]')).toBe('(3z[Ab][Da]')
    expect(i._addTripletBrackets('z[abc]z')).toBe('(3z[abc]z')
})

test('_addTripletBrackets leaves groups alone that shouldnt be touched', () => {
    expect(i._addTripletBrackets('czc')).toBe('czc')
    expect(i._addTripletBrackets('cc')).toBe('cc')
    expect(i._addTripletBrackets('cczA')).toBe('cczA')
})