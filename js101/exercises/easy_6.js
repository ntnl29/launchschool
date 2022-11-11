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

// Sequence Count

function sequence(count, number) {
  let array = [];
  for (let i = 1; i <= count; i += 1) {
    array.push(number * i);
  }
  return array;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

// Reverse It Part 1

const reverseSentence = string => string.split(' ').reverse().join(' ');

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// Reverse It Part 2

function reverseWords(string) {
  let array = string.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length >= 5) {
      array[i] = array[i].split('').reverse().join('');
    }
  } 
  return array.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// Reversed Arrays

function reverse(array) {
  for (let i = 0; i < array.length; i += 1) {
    array.splice(i, 0, array.pop());
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

// Matching Parenthese?

function isBalanced(string) {
  let par = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      par += 1;
    } else if (string[i] === ')') {
        par -= 1;
      }
      if (par < 0) return false;
    }
    return par === 0;
  }

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);