import { intersection } from './intersection.js';

describe('checking two arrays', () => {
  it('[2, 1], [2, 3] --> [2]', () => {
    expect(intersection([2, 1], [2, 3])).toEqual([2]);
  });
  it('[2, 1, 3], [2, 3] --> [2]', () => {
    expect(intersection([2, 1, 3], [2, 3, 5])).toEqual([2, 3]);
  });
});
