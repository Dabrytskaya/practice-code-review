/**
 * sorting an array of number from the smallest to the biggest.
 * @param {array} [arrayOfNumbers = []] .
 * @returns {array} sorted array of number
 *
 */

export const solutionName = (arrayOfNumbers = []) => {
  const copyOfArray = JSON.parse(JSON.stringify(arrayOfNumbers));
  copyOfArray.sort((a, b) => a - b);
  return copyOfArray;
};
