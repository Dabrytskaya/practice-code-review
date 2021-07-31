# Difference

Write a function that removes specific values from an array. The values to remove are provided as a second array argument.

---

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that helps you understand:

```js
/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
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
 * 
// > Docstring is adapted from [lode difference](https://github.com/lodash/lodash/blob/4.17.15/lodashjs#L6947)
*/
