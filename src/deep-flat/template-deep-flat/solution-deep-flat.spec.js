import { deepFlat } from './solution-deep-flat.js';

describe('', () => {
  it(' deepFlat([1, [2, [3, [4]], 5]]); -> [1, 2, 3, 4, 5]', () => {
    const expected = [1, 2, 3, 4, 5];
    const received = deepFlat([1, [2, [3, [4]], 5]]);
    expect(expected).toEqual(received);
  });
  it(" deepFlat(['a', ['b', [['c'], ['d']], 'e']]);-> ['a', 'b', 'c', 'd', 'e']", () => {
    const expected = [1, 2, 3, 4, 5];
    const received = deepFlat([1, [2, [3, [4]], 5]]);
    expect(expected).toEqual(received);
  });
});
