// Double Char Part 1

function repeater(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    result += string[i] + string[i];
  }
  return result;
}

// const repeater = string => string.split('').map(char => char + char).join('');

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

// Double Char Part 2

function doubleConsonants(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (!string[i].match(/[\daeiou]/gi)) {
      result += string[i] + string[i];
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

// Reverse Number

function reverseNumber(number) {
  return Number(String(number).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1

// Get The Middle Character

function centerOf(string) {
  let midpoint = Math.floor(string.length / 2);
  if (string.length % 2 !== 0) {
    return string[midpoint]; // works for odd #'s
  } else {
    return string[midpoint - 1] + string[midpoint];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// Always Return Negative

const negative = number => number >= 0 ? number * -1 : number;

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// Counting Up

function sequence(number) {
  let array = [];
  for (let i = 1; i <= number; i += 1) {
    array.push(i);
  }
  return array;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

// Name Swap

function swapName(string) {
  let array = string.split(' ');
  return `${array[array.length - 1]}, ${array.slice(0, array.length - 1).join(' ')}`;
}

console.log(swapName('Joe Bob Roberts'));
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"