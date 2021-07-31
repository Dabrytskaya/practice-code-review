/**
 *
 * Split an object into an array of objects.
 * @param {array} [obj = {}] split an object to be into an array of objects.
 * @returns {array} an array of objects.
 *
 */

export const solutionName = (obj = {}) => {
  // Empty array
  const newArr = [];
  // converting each entry to a new array
  Object.entries(obj).map((entry) => {
    // adding ech entry to array
    newArr.push({ [entry[0]]: entry[1] });
  });
  return newArr;
};


// Second solution
// const solutionName = (obj = {}) => {
    // creating a new array
//   const newArray = [];
    // converting each key to obj
//   Object.keys(obj).forEach((key) => {
    // creating a new object 
//     const newObj = {};
// assigning each key to new object
//     newObj[key] = obj[key];
        // adding ech object to new array
//     newArray.push(newObj);
//   });
    // return an array of objects
//   return newArray;
// };
