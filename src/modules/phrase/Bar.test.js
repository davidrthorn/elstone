import Bar from './Bar';

test('Bar includes 4 spaced groups', () => {
    const mockValues = [
        'ccc',
        'ddd',
        'eee',
        'fff',
    ] 
    let calls = 0;
    let mockGroup = {};
    mockGroup.init = () => {};
    mockGroup.getString = () => mockValues[calls++];

    const B = new Bar(mockGroup);
    B.init()

    expect(B.getString()).toBe('ccc ddd eee fff ');
});
