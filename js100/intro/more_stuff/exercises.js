// exercise 3

console.log(Math.sqrt(37));

// exercise 4

console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));

// exercise 6

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(arr, req) {
  let matches = [];
  for (let element of arr) {
    if (element.match(req)) {
      matches.push(element);
    }
  } 
  return matches;
}

// exercise 8

function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(12));
console.log(isNotANumber('bat'));
console.log(isNotANumber(NaN));

// exercise 9

// let a = -0

// if (a !== -0) {
//   console.log(false)
// } else console.log(true);

const isNegativeZero = (value) => 1 / value === -Infinity;

isNegativeZero(88);
isNegativeZero(-0);