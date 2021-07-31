# Deep Flat: reduce

Converts a nested array into a single array with no nesting.

## Strategy

with reduce()

## Implementation

using reduce function and concat the array elements

## Use Cases

```js
const deepFlat = (array = []) =>
  [...array].reduce(
    (acc, next) => acc.concat(Array.isArray(next) ? deepFlat(next) : next),
    [],
  );
```

## Inspiration

https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
