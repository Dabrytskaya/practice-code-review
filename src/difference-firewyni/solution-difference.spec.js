import { difference } from './difference.js';

describe('find the difference between two arrays', () => {
  it('difference', () => {
    const expected = [1];
    const received = difference([1, 2, 1], [2, 3]);
    expect(received).toEqual(expected);
  });
});
