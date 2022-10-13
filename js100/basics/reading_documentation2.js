// Style Guide

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');

// Data Types
let primTypes = ['String', 'Number', 'Boolean', 'null', 'Undefined', 'Symbol', 'BigInt']

// Largest Number

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

// Arithmetic Operator Precedence

console.log((4 * 5) + ((3 ** 2) / 10));

// Date
console.log(Date.now());

// Which year is this?

let today = new Date();

console.log(today.getYear()); // deprecated
console.log(today.getFullYear());

// String Concatenation

console.log('test' + 'ing');

let a = 'aard';
let b = 'vark';

console.log(a.concat(b));

// SyntaxError

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

// TypeError

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
} else console.log(tweet);