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