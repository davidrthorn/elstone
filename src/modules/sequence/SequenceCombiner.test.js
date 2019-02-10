import SequenceCombiner from './SequenceCombiner'

const sc = new SequenceCombiner()

test("toColumns combines the right notes", () => {
    expect(sc.toColumns(["abc", "def", "ghi"])).toEqual(["adg", "beh", "cfi"])
})

test("toColumns handles diffent group lengths", () => {
    expect(sc.toColumns(["a", "de", "hij"])).toEqual(["hda", "ie", "j"])
})

test("toColumns handles arrays with empty strings", () => {
    expect(sc.toColumns(["a", "", "hij"])).toEqual(["ha", "i", "j"])
})

test("toColumns handles empty arrays", () => {
    expect(sc.toColumns([])).toEqual([])
})

test("combineNotes reduces strings of only rests to one rest", () => {
    expect(sc.combineNotes("zzz")).toBe("z")
})

test("combineNotes throws an error when invalid characters are supplied", () => {
    expect(() => {
        sc.combineNotes("zxz")
    }).toThrowError("Unsupported characters: 'x'")
    expect(() => {
        sc.combineNotes("z z")
    }).toThrowError("Unsupported characters: ' '")
    expect(() => {
        sc.combineNotes("Ab y")
    }).toThrowError("Unsupported characters: ' ', 'y'")
})

test("combineNotes adds brackets in the right way", () => {
    expect(sc.combineNotes("ab")).toBe("[ab]")
    expect(sc.combineNotes("Ab")).toBe("[Ab]")
    expect(sc.combineNotes("zb")).toBe("b")
    expect(sc.combineNotes("bcD")).toBe("[Dbc]")
})

test("combineNotes removes copies of the same note", () => {
    expect(sc.combineNotes("ccz")).toBe("c")
})

test("combineNotes returns empty string for empty string", () => {
    expect(sc.combineNotes("")).toBe("")
})

test("combine returns empty string when supplied with empty array", () => {
    expect(sc.combine([])).toEqual('')
})

test("combine correctly combines sequences correctly", () => {
    expect(sc.combine(['abcz', 'dzdz', 'zzzz', 'ccc'])).toEqual('[acd][bc][cdc]z')
    expect(sc.combine(['abzz', 'zzdz'])).toEqual('abdz')
})

test('removeDuplicates removes duplicates', () => {
    expect(sc.removeDuplicates('ccc')).toBe('c')
    expect(sc.removeDuplicates('cac')).toBe('ca')
    expect(sc.removeDuplicates('CaD')).toBe('CaD')
})

test('addBrackets adds brackets where appropriate', () => {
    expect(sc.addBrackets('CaD')).toBe('[CaD]')
    expect(sc.addBrackets('')).toBe('')
    expect(sc.addBrackets('c')).toBe('c')
})

test('removeRests removes rests', () => {
    expect(sc.removeRests('czcz')).toBe('cc')
})