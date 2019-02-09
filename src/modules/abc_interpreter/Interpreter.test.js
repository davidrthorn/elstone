import AbcInterpreter from './Interpreter'

const i = new AbcInterpreter()

test('splitByGroup splits a sequence into the appropriate groups', () => {
    expect(i.splitToGroups('aabccdeefggh', 3)).toBe('aab ccd eef ggh')
    expect(i.splitToGroups('aabccdeefggh', 4)).toBe('aabc cdee fggh')
})

test('splitByGroup leaves a shorter final group when sequence length is not divisible by group length', () => {
    expect(i.splitToGroups('aabccdeefggh', 3)).toBe('aab ccd eef ggh')
    expect(i.splitToGroups('aabccdeefggh', 4)).toBe('aabc cdee fggh')
})

test('splitByGroup leaves sequence alone when group length is 0', () => {
    expect(i.splitToGroups('aabccdeefggh', 0)).toBe('aabccdeefggh')
})

test('splitByGroup returns empty string for empty sequence', () => {
    expect(i.splitToGroups('', 4)).toBe('')
})