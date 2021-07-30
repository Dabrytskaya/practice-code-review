import { difference } from './difference.js';

describe('Array of values that are in first array, not in second array', () => {
  it('array with numbers', () => {
    const expected = [1];
    const received = difference([2, 1], [2, 3]);
    expect(received).toEqual(expected);
  });
  it('array with strings', () => {
    const expected = ['apple'];
    const received = difference(
      ['apple', 'orange', 'kiwi'],
      ['orange', 'kiwi', 'grapes'],
    );
    expect(received).toEqual(expected);
  });
  it('array with mixed numbers and strings', () => {
    const expected = ['orange', 1];
    const received = difference(
      ['apple', 'orange', -8, 13, 'kiwi', 1],
      ['apple', -8, 'kiwi', 13],
    );
    expect(received).toEqual(expected);
  });
});
