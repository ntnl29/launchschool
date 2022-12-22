/* Welcome Stranger

*/

// function greetings(name, object) {
//   return `Hello, ${name[0]} ${name[1]} ${name[2]}! Nice to have a ${object.title} ${object.occupation} around.`
// }

// shorter way

const greetings = (name, status) => `Hello ${name.join(' ')}! Nice to have a ${status.title} ${status.occupation} around.`;

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

/* Multiplying Two Numbers
*/

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(5, 3) === 15); // logs true

// Squaring an Argument

function square (num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// The End Is Near But Not Here

function penultimate (string) {
  let store = string.split(' ');
  return store[store.length - 2];
}

// console.log(penultimate('this line for testing'))

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

//Exclusive Or

function xor (arg1, arg2) {
  if ((arg1 && !arg2) || (arg2 && !arg1)) {
    return true;
  } 
  return false;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

// Odd Lists

function oddities (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Convert a String to a Number!

/*
The parseInt() method converts a string of numeric characters (including an
optional plus or minus sign) to an integer. The method takes 2 arguments
where the first argument is the string we want to convert and the second
argument should always be 10 for our purposes. parseInt() and the Number()
method behave similarly. In this exercise, you will create a function that
does the same thing.

Write a function that takes a string of digits and returns the appropriate
number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about
invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript,
such as String() and Number(). Your function should do this the old-fashioned
way and calculate the result by analyzing the characters in the string.
*/

const stringToInteger = str => str *= 1;

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

// Convert a String to a Signed Number!

function stringToSignedInteger(str) {
  return stringToInteger(str);
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

// Convert a Number to a String!

function integerToString(num) {
  let numToStr = `${num}`;
  console.log(numToStr);
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

// Convert a Signed Number to a String!

function signedIntegerToString(num) {
  let numToStr = `${num}`;
  let addPlus = '+';
  if (num > 0) {
    return addPlus + numToStr;
  } else {
    return numToStr;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");