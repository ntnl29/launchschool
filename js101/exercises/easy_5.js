/* Cute Angles <----- need to revisit

input: number
output: string
rules:
  explicit:
    - write a function
    - use a degree symbol (˚) to represent degrees
    - a single quote (') to represent minutes
    - a double quote (") to represent seconds

alogrithim:
- create function dms that takes 1 argument
- return string

*/

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

/* Combining Arrays

input: 2 arrays
output: new array

rules:
  explicit:
    - write a function
    - returns a single array with the combined values of the two
    - no duplication

algorithim:
- create a function that takes 2 arguments
- declare a new variable that is an array
- create iteration loop to check each array's value if already in new array
  - if so, skip to next value
  - if not, push to new array
- return new array

*/

function union (array1, array2) {
  let combinedArray = [];
  array1.forEach(num => {
    if (!combinedArray.includes(num)) {
      combinedArray.push(num);
    }
  });
  array2.forEach(num => {
    if (!combinedArray.includes(num)) {
      combinedArray.push(num);
    }
  });
  return combinedArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/* Halvsies

*/

function halvsies(array) {
  let arrayOne = [];
  let arrayTwo = [];
  let resultArray = [];
  let midpoint = Math.ceil(array.length / 2);
  array.forEach((element, index) => {
    if (index < midpoint) {
      arrayOne.push(element);
    } else {
      arrayTwo.push(element);
    }
  });
  resultArray.push(arrayOne, arrayTwo);
  return resultArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

/* Combine Two Lists

input: two arrays
output: one array

rules:
  explicit:
    - contains all elements from both arrays, alternating

algorithim:
- declare function
- declare new variable inside that is an empty array
- iterate through each array
- push the element from each array through each iteration
- return result
*/

// function interleave(arrayOne, arrayTwo) {
//   let combinedArray = [];
//   for (let i = 0; i < arrayOne.length; i += 1) {
//     combinedArray.push(arrayOne[i], arrayTwo[i]);
//   }

//   return combinedArray;
// }

function interleave(arrayOne, arrayTwo) {
  let combinedArray = [];
  arrayOne.forEach((number, index) => {
    combinedArray.push(number, arrayTwo[index]);
  });
  return combinedArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/* Multiplicative Average

input: array
output: number string with value rounded to 3 decimals

rules:
  explicit:
    - multiplies all integers
    - divides by length of array
    - return string, rounded to 3 decimals

algorithim:
  - declare result variable (1 since multiplying involved)
  - iterate and multiplies each string
  - divide that string by array.length
  - return string and round to 3 decimals
*/

function multiplicativeAverage(array) {
  let result = 1;
  array.forEach(num => result *= num);
  return (result / array.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"