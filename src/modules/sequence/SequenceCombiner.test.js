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

test("combineNotes reduces strings of only rests/spaces to one rest/space", () => {
    expect(sc.combineNotes("zzz")).toBe("z")
    expect(sc.combineNotes("xxx")).toBe("x")
    expect(sc.combineNotes("   ")).toBe(" ")
})

test("combineNotes mixtures of rest types and spaces to the right symbol", () => {
    expect(sc.combineNotes("zxz")).toBe("z")
    expect(sc.combineNotes("z ")).toBe("z")
    expect(sc.combineNotes("x x ")).toBe("x")
})

test("combineNotes adds brackets in the right way", () => {
    expect(sc.combineNotes("a b")).toBe("[ab]")
    expect(sc.combineNotes("A b")).toBe("[Ab]")
    expect(sc.combineNotes("zb")).toBe("b")
    expect(sc.combineNotes("xbcD")).toBe("[Dbc]")
})