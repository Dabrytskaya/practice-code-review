import { intersection } from './intersection.js';

describe('intersection of two arrays', () => {
  it('common values', () => {
    const actual = intersection([2, 1, 2], [2, 3]);
    expect(actual).toEqual([2]);
  });
});
