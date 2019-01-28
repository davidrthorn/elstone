// import { default as Phraser, PhraseCleaner } from './Phraser';

// test('getNote returns correct note for a given random number', () => {
//     const range = ['c', 'F', 'G'];
//     const mockRand = jest.fn();
//     mockRand
//         .mockReturnValueOnce(0.95)
//         .mockReturnValueOnce(0.2)
//         .mockReturnValueOnce(0.2)
//         .mockReturnValueOnce(0.4)
//         .mockReturnValueOnce(0.4)
//         .mockReturnValueOnce(0.8)
//         .mockReturnValueOnce(0.8)

//     let phraser = new Phraser(range, 0.9, mockRand);
//     expect(phraser.getNote()).toBe('z')

//     phraser = new Phraser(range, 0.9, mockRand);
//     expect(phraser.getNote()).toBe('c')
//     expect(phraser.getNote()).toBe('F')
//     expect(phraser.getNote()).toBe('G')
// });

// test('tripletBar should not contain more than 3 consecutive notes', () => {
//     const mockRand = jest.fn();
//     mockRand.mockReturnValue(0.5);

//     const phraser = new Phraser(['c'], 0.6, mockRand);
//     expect(phraser.tripletBar()).toBe(' (3ccc (3zcc cc (3ccz');
// });

// test('replaceTripletRests applies correct note values to rests', () => {
//     const pc = new PhraseCleaner();
//     expect(pc.fixRests('zzz ccc czc zzc')).toBe(' z2x ccc cc zc');
// });

// test('insertTripletBars only inserts bars where appropriate', () => {
//     const pc = new PhraseCleaner();

//     expect(pc.addTripletBrackets('ccc zaz zaa aaz')).toBe(' (3ccc (3zaz (3zaa (3aaz');
//     expect(pc.addTripletBrackets('zzz z2x aza 3aa')).toBe(' zzz z2x aza aa');
// });
