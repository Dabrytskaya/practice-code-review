import { difference } from './difference.js';

describe('difference between 2 arrays', () => {
  it('[2, 1], [2, 3] --> [1]', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });
  it('[1, 2, 4], [2, 3] --> [1, 4]', () => {
    expect(difference([1, 2, 4], [2, 3])).toEqual([1, 4]);
  });
});
