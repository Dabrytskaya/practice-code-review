<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

> [interactive graph](./dependency-graph.html)

![dependency graph](./dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- deep-flat
- difference
- intersection
  - intersection-firewyni
    - [intersection.js](#srcintersectionintersection-firewyniintersectionjs)
- sort-numbers
  - example-built-in-sort
    - [sort-numbers.js](#srcsort-numbersexample-built-in-sortsort-numbersjs)
- split-object

---

<!-- END TOC -->

---

<!-- BEGIN DOCS -->

# /deep-flat

---

# /difference

---

# /intersection

## /intersection-firewyni

<details><summary><a href="../../src/intersection/intersection-firewyni/intersection.js" id="srcintersectionintersection-firewyniintersectionjs">../src/intersection/intersection-firewyni/intersection.js</a></summary>

<a name="intersection"></a>

## intersection ⇒ <code>Array</code>

Creates an array of values that are in both the first and the second arrays.

Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.

**Note:** This function returns a new array, and has no side-effects.

**Returns**: <code>Array</code> - Returns the new array of filtered values.

| Param    | Type               | Default         | Description            |
| -------- | ------------------ | --------------- | ---------------------- |
| [array]  | <code>Array</code> | <code>[]</code> | The array to inspect.  |
| [values] | <code>Array</code> | <code>[]</code> | The values to include. |

**Example**

```js
intersection([2, 1], [2, 3]);
// -> [2]
```

**Example**

```js
intersection([2, 1, 2], [2, 3]);
// -> [2]
```

</details>

---

---

# /sort-numbers

## /example-built-in-sort

<details><summary><a href="../../src/sort-numbers/example-built-in-sort/sort-numbers.js" id="srcsort-numbersexample-built-in-sortsort-numbersjs">../src/sort-numbers/example-built-in-sort/sort-numbers.js</a></summary>

<a name="sortNumbers"></a>

## sortNumbers ⇒ <code>Array.&lt;number&gt;</code>

Sorts an array of numbers from smallest to largest.

Returns a new array without modifying the original array.

Does not need to support: NaN, Infinity, -Infinity.

**Returns**: <code>Array.&lt;number&gt;</code> - A new array with the same numbers, but sorted.

| Param          | Type                              | Default         | Description                   |
| -------------- | --------------------------------- | --------------- | ----------------------------- |
| [arrOfNumbers] | <code>Array.&lt;number&gt;</code> | <code>[]</code> | The array of numbers to sort. |

**Example**

```js
sortNumbers([1.5, 1, -1.5, 0, -1]);
// -> [-1.5, -1, 0, 1, 1.5]
```

**Example**

```js
sortNumbers([-1, 0, 1]);
// -> [-1, 0, 1]
```

</details>

---

---

# /split-object

---

<!-- END DOCS -->
