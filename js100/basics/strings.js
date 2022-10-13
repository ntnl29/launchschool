// Length

console.log("These aren't the droids you're looking for.".length)

// ALL CAPS

console.log(
  'confetti floating everywhere'.toUpperCase()
);

// Repeat

function repeat(num, str) {
  let repeatedStr = '';
  for (let i = 0; i < num; i += 1) {
    repeatedStr += str;
  }
  console.log(repeatedStr);
}

repeat(3, 'ha'); // 'hahaha'

// Multiline String

console.log('A pirate I was meant to be!\nTrim the sails and roam the sea!');

// Case-insensitive Equality

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(string1.toLowerCase() === string2.toLowerCase());
console.log(string1.toLowerCase() === string3.toLowerCase());

// Contains Character

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));

// Blank? Version 1

// function isBlank(str) {
//   return str.trim().length === 0;
// }

const isBlank = (str) => str.trim().length === 0;

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

// Capitalize Words

let words = 'launch school tech & talk';
let capWords = words.split(' ');

for (let i = 0; i < capWords.length; i +=1) {
  capWords[i] = capWords[i][0].toUpperCase() + capWords[i].substr(1);
}

console.log(capWords.join(' '));
