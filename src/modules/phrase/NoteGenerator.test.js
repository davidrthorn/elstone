import NoteGenerator from './NoteGenerator';

test('Returns only all notes in range and also z', () => {
    const mockRandomizer = jest.fn();
    mockRandomizer
        .mockReturnValueOnce('0.95')
        .mockReturnValueOnce('0.2')
        .mockReturnValueOnce('0.2')
        .mockReturnValueOnce('0.6')
        .mockReturnValueOnce('0.6')
    
    const NG = new NoteGenerator(mockRandomizer, 0.9, ['c', 'F'])
    expect(NG.generate()).toBe('z')
    expect(NG.generate()).toBe('c')
    expect(NG.generate()).toBe('F')
})