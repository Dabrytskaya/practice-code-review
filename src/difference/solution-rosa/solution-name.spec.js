import { solutionName } from './solution-name.js';

describe('', () => {
  it('', () => {
    expect(solutionName([1, 2, [3], 5])).toEqual([1, 2, 3, 5]);
  });

  it('', () => {
    expect(solutionName([1, [2, [3]], 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
