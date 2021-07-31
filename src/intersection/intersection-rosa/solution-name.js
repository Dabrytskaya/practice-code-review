/**
 * return an array of items which exits in an firstArray and secondArray.
 * @param {array} [firstArray = []] .
 * @param {array} [secondArray = []] .
 * @returns {array} array of item.
 *
 */

export const solutionName = (firstArray = [], secondArray = []) => {
  const newArray = [];
  firstArray.forEach((item) => {
    if (secondArray.includes(item) && !newArray.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};
