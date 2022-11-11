/* eslint-disable max-len */

[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

/* Example 3

Method call (map)
  Performed on the outer array
  No side effects
  Return value is new array [1, 3]
  Return value? No

Callback execution
  Performed on each sub-array
  No side effects
  Return value is undefined
  Return value used by map

Element access [0]
  Performed on each sub-array
  No side effects
  Return value is the element at index 0 of the sub-array
  Return value by console.log

Method call (console.log, return arr[0])
  Element at index 0 of each sub-array
  Output string representation of an integrer
  Return value is arr[0] of each sub-array
  Return value is used

*/

// Example 4

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

/*

Variable declared myArr
  Return value undefinted (always since variable declaration)

Method call - forEach
  Performed on outer array
  Return value is undefined, assigned to myArr

Outer callback execution
  Performed on each sub-array
  Return value is [undefined, undefined]

Method call - map
  Performed on each sub-array
  Return value is [undefined, undefined] and is returned by the outer callback

Inner callback execution
  Performed on each element in the sub-array
  Return value used to transform the array

Comparison
  Performed on each element in the sub-array
  Return value is boolean and is used if true

Method call - console.log
  Performed on each element in the sub-array
  Outputs string representation of a Number
  Return value is undefined and used to determine return value of the inner callback

*/

// Example 5

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

/*

Method call - map
  Performed on the outer array
  Transformed array

Outer callback execution - arr
  Performed on each sub-array
  Return value is new sub-array used by map

Method call - map
  Performed on each element of the sub-array
  Transformed sub-array

Inner callback execution
  Performed on each element of the sub-array
  Return value is the element times 2

*/

// Example 6

[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]

/*

Method call - filter
  Performed on outer array
  Return value are the objects inside the array that meets the criteria within

Outer callback execution
  Performed on each object inside the outer array
  Return value is the object used by filter

Method call - Object.keys
  Performed on the keys of the object passed by the outer callback execution
  Return value is an array of keys of the iterated object passed by filter

Method call - every
  Performed on the array created by Object.keys
  Returns a boolean statement

Inner callback execution
  Performed on the key within the array
  Return value is the key

Comparison - object[key][0] === key
  Performed on the key passed by the inner cb execution
  Returns a boolean statement

*/

// Example 9

[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

/*
Method call - map
  On outer array

Outer cb execution
  On each sub-array in the array
  Return value is the new sub-array from map

Method call - map
  On each sub-array and returns new return value that is the sub-array

Inner cb execution
  Each element in each sub-array and is the return value

typeof === number
  Performed on each element from the inner cb execution
  Returns boolean

elem + 1
  If condition is true, execute

Method call - map
  On each element

Inner cb execution
  On each element, defined as number
  Return number + 1

*/