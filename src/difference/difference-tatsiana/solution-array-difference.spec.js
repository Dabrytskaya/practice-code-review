import { arrayDifference } from './solution-array-difference.js';

describe('function that removes specific values from an array', () => {
  it('difference([2, 1], [2, 3]); //  [1]', () => {
    const expected = [1];
    const received = arrayDifference([2, 1], [2, 3]);
    expect(expected).toEqual(received);
  });

  it('difference([1, 2, 1], [2, 3]); //  [1]]', () => {
    const expected = [1];
    const received = arrayDifference([1, 2, 1], [2, 3]);
    expect(expected).toEqual(received);
  });
});
