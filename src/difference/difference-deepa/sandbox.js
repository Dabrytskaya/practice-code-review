import { difference } from './difference.js';

const result = difference(
  ['apple', 'orange', -8, 13, 'kiwi', 1],
  ['apple', -8, 'kiwi', 13],
);
console.log(result);
