import { solutionName } from './solution-name.js';

describe('', () => {
  it('[1, 2, 3], [3, 4]  => [3]', () => {
    expect(solutionName([1, 2, 3], [3, 4])).toEqual([3]);
  });

  it('[], [3, 4]  => []', () => {
    expect(solutionName([], [3, 4])).toEqual([]);
  });

  it('[2, 2, 3, 3], [3, 4]  => [3]', () => {
    expect(solutionName([2, 2, 3, 3], [3, 4])).toEqual([3]);
  });
});
