import { splitObject } from './split-object.js';

describe('Splits an object into multiple objects with one key/value', () => {
  it('splits object with number values', () => {
    const expected = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const received = splitObject({ a: 1, b: 2, c: 3 });
    expect(received).toEqual(expected);
  });
  it('splits object with string values', () => {
    const expected = [
      { name: 'robs' },
      { age: 25 },
      { tall: true },
      { userName: 'stor' },
    ];
    const received = splitObject({
      name: 'robs',
      age: 25,
      tall: true,
      userName: 'stor',
    });
    expect(received).toEqual(expected);
  });
  it('empty object', () => {
    const expected = [];
    const received = splitObject({});
    expect(received).toEqual(expected);
  });
});
