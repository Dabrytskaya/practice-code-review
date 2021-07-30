/**
 * Converts a nested array into a single array with no nesting
 *
 * It returns a new array and there are no side-effects
 *
 * @param {Array} [testArray=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 
 */

export const deepFlat = (testArray = []) => {
  return testArray.flat(Infinity);
};
