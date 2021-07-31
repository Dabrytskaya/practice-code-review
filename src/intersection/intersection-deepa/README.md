# challenge name: strategy name

Creates an array of values that are in both the first and the second arrays.

## Strategy

Checks an item in the second array is in the first array.

## Implementation

I used filter method to filter out the intersecting elements in both arrays, by iterating through each item and checks with 'includes'. Assigning the common elements to new array variable and returns the new array.

## Use Cases

```js
const newArray = array.filter((item) => values.includes(item));
```

## Inspiration

from sunday class group work.
