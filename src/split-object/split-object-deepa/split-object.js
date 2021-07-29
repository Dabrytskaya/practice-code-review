// eslint-disable-next-line spellcheck/spell-checker
/**
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * This function has no side-effects, the argument object is not modified.
 *
 * @param {object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 * @example
 *
 * splitObject({ a: 1, b: 2, c: 3 });
 * // -> [{ a: 1 }, { b: 2 }, { c: 3 }]
 *
 * @example
 *
 * splitObject({ name: 'robs', age: 25, tall: true, userName: 'stor' });
 * // -> [{ name: 'robs }, { age: 25 }, { tall: true }, { userName: 'stor' }]
 *
 * @example
 *
 * splitObject({});
 * // -> []
 */

export const splitObject = (toSeparate = {}) => {
  // new array of objects with key/value pairs
  const separatedArray = [];
  // assigning the keys only to new variable
  const keys = Object.keys(toSeparate);
  // for each key in the 'keys' pushing 'key : value' to 'separatedArray'
  keys.forEach((key) => {
    separatedArray.push({ [key]: toSeparate[key] });
  });
  return separatedArray;
};
