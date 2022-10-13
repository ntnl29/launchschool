// Lowercase

console.log('HELLO!'.toLowerCase());

// Mountain Caps

function capitalize(word) {
  console.log(word.slice(0, 1).toUpperCase() + word.slice(1));
}

capitalize('mountain');
capitalize('alien!');

// Array Element Acces

let arrObj = ['fish', 'and', 'chips'];

console.log(arrObj[1]);

// Out of Bounds

console.log(arrObj[10]);

// Return Values

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

console.log(words);
console.log(typeof words);

// Equality

console.log('8' == 8); // standard equality operator
console.log('8' === 8); // strict equality operator

