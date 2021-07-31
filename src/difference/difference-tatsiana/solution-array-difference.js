/**
 * Write a function that removes specific values from an array.
 *
 * Returns a new array without specific values.
 *
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */
export const arrayDifference = (array = [], values = []) => {
  const temp = array.filter((elem) => !values.includes(elem));
  const result = [...new Set(temp)];
  return result;
};
