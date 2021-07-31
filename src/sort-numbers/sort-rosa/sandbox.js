/**
 * sorting an array of number from the smallest to the biggest.
 * @param {array} [arrayOfNumbers = []] .
 * @returns {array} sorted array of number
 * JSON.parse (conveting my array 'string' to  javascrip string)
 */

export const solutionName = (arrayOfNumbers = []) => {
  const copyOfArray = JSON.parse(JSON.stringify(arrayOfNumbers));
  copyOfArray.sort((a, b) => a - b); //sort take a function 'and funtion take two parameter'
  return copyOfArray;
};

console.log(solutionName([5, 4, 3]));
