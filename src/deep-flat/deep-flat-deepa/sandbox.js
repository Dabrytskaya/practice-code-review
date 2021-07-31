import { deepFlat } from './deep-flat.js';

const result = deepFlat([1, [2, [3, [4]], 5]]);
console.log(result);
