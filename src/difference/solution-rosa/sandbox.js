//import { solutionName } from './solution-name.js';

export const solutionName = (firstArray = [], secondArray = []) => {
  const newArray = [];
  firstArray.forEach((item) => {
    if (!secondArray.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

console.log(solutionName([6, 7, 8], [9, 6]));
