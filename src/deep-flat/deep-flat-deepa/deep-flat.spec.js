import { deepFlat } from './deep-flat.js';

describe('Converts a nested array into a single array', () => {
  it('array of numbers', () => {
    const expected = ['a', 'b', 'c', 'd', 'e'];
    const received = deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
    expect(received).toEqual(expected);
  });
  it('array of strings', () => {
    const expected = ['a', 'b', 'c', 'd', 'e'];
    const received = deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
    expect(received).toEqual(expected);
  });
});
