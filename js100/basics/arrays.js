// First Element

const first = arr => console.log(arr[0]);

first(['Earth', 'Moon', 'Mars']); // 'Earth'

// Last Element

const last = arr => console.log(arr[arr.length - 1]);

last(['Earth', 'Moon', 'Mars']); // 'Mars'

// Add + Delete

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy = energy.slice(1);
energy.push('geothermal');

console.log(energy);

// Alphabet

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

console.log(alphabet.split(''))

// Filter

let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

// for (let i = 0; i < scores.length; i += 1) {
//   if (scores[i] >= 100) {
//     count += 1;
//   }
// }
// console.log(count);

console.log(scores.filter(num => num >= 100).length);

// Vocabulary

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

for (subArr of vocabulary) {
  for (word of subArr) {
    console.log(word);
  }
}

// another way to do it

// console.log(vocabulary.flat().join(', '))

// Travel

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

// function contains(city, array) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (city === array[i]) {
//     return true;
//   }
// }
// return false;
// }

function contains(city, array) {
  for (let element of array) {
    if (element === city) {
      return true;
    }
  }
  return false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

// Passcode

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

console.log(passcode.join('-'));

// Checking items off the grocery list

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.
while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();
  console.log(checkedItem);
}
// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []