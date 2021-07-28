import { intersection } from './intersection.js';

describe('intersection of positive number arrays', () => {
  describe('intersection of whole number arrays', () => {
    it('arrays of whole numbers', () => {
      const expected = [2];
      const received = intersection([2, 1], [2, 3]);
      expect(expected).toEqual(received);
    });
    it('arrays of decimal', () => {
      const expected = [0.32, 0.2];
      const received = intersection([0.32, 0.41, 0.2], [0.82, 0.2, 0.32]);
      expect(expected).toEqual(received);
    });
    it('arrays of negative numbers', () => {
      const expected = [-32];
      const received = intersection([-4, -11, -32, -9], [-52, -33, -32]);
      expect(expected).toEqual(received);
    });
    it('mixed array with whole, negative and decimal numbers', () => {
      const expected = [3.01, -2, 0];
      const received = intersection([3.01, 8, 0.7, -2, 0], [-2, 3.01, 0]);
      expect(received).toEqual(expected);
    });
  });
  describe('intersection of string arrays', () => {
    it('strings', () => {
      const expected = ['apple', 'orange'];
      const received = intersection(
        ['apple', 'grapes', 'orange'],
        ['mango', 'orange', 'apple', 'banana'],
      );
      expect(received).toEqual(expected);
    });
    it('mixing strings and symbols', () => {
      const expected = ['apple', '?'];
      const received = intersection(
        ['apple', '?', '/', 'grapes', 'orange'],
        ['?', '(', ')', 'apple'],
      );
      expect(received).toEqual(expected);
    });
  });
  describe('intersection of different types of arrays', () => {
    it('mixed numbers and strings', () => {
      const expected = [11, 2, 'book'];
      const received = intersection(
        [11, 22, 2, 'book', 'pen'],
        [11, 24, 'book', 2],
      );
      expect(received).toEqual(expected);
    });
    it('arrays with one common element', () => {
      const expected = [2];
      const received = intersection([2], [2]);
      expect(received).toEqual(expected);
    });
    it('arrays with one different element', () => {
      const expected = [];
      const received = intersection([3], [5]);
      expect(received).toEqual(expected);
    });
    it('arrays with no intersecting elements', () => {
      const expected = [];
      const received = intersection([0, 1, -1], [12, 3, -2]);
      expect(received).toEqual(expected);
    });
    it('empty arrays', () => {
      const expected = [];
      const received = intersection([], []);
      expect(received).toEqual(expected);
    });
  });
});
