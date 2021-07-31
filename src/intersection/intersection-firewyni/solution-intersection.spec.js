import { intersection } from './intersection.js';

describe('find the intersection of the two arrays', () => {
  it('intersection', () => {
    const expected = [2];
    const received = intersection([2, 1, 2], [2, 3]);
    expect(received).toEqual(expected);
  });
});
