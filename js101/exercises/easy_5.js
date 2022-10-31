/* eslint-disable indent */
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

/* Multiply Lists

input: 2 arrays
output: 1 new array

rules:
  explicit:
    - 2 arrays combine to a new array
    - return the product of each pair of numbers based on index

algorithim:
  - declare a function
  - declare empty array variable
  - iterate through both arrays, multiplying based on index
  - return result array
*/

function multiplyList (arrayOne, arrayTwo) {
  let result = [];
  arrayOne.forEach((number, index) => {
    result.push(arrayOne[index] * arrayTwo[index])
  });
  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

// List of Digits

// function digitList(number) {
//   let stringArray = String(number).split('');
//   let numberArray = [];
//   stringArray.forEach(string => {
//     numberArray.push(string * 1);
//   });
//   return numberArray;
// }

const digitList = number => String(number).split('').map(Number);

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

/* How Many?

input: array of vehicles
output: string showing vehicle type and count

rules:
  explicit:
    - function that counts # of occurances
    - console.log each element along # of occurances
    - case sensitive

algorithim:
  - declare function
  - declare empty object variable
  - iterate through array to remove duplicates
  - pass on as keys
  - use filter and length to determine count
  - return object as separate console.log
*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let vehicleStore = {};
  for (let index = 0; index < array.length; index += 1) {
    vehicleStore[array[index]] = vehicleStore[array[index]] || 0;
    vehicleStore[array[index]] += 1;
  };
  for (let item in vehicleStore) {
    console.log(`${item} => ${vehicleStore[item]}`);
  }
}

countOccurrences(vehicles);

// Array average

function average(array) {
  let result = 0;
  for (let number of array) {
    result += number;
  }
  return Math.floor((result / array.length));
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

// After Midnight Part 1

function timeOfDay(number) {
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_HOUR = 60;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

  if (number < 0) {
    number = (number % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    number = number % MINUTES_PER_DAY;
  }

  let hour = Math.floor((number % MINUTES_PER_DAY) / MINUTES_PER_HOUR);
  let minute = number % MINUTES_PER_HOUR;

  return `${padZero(hour)}:${padZero(minute)}`;
}

function padZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

// After Midnight Part 2

function afterMidnight(string) {
  
}

console.log(afterMidnight("12:34"));
// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);