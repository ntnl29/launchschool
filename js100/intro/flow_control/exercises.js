// exercise 2
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(44);
evenOrOdd(69);

// exercise 5

// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// exercise 6

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

// exercise 7

// function allCaps(string) {
//   if (string.length > 10) {
//     return string.toUpperCase();
//   } else {
//     return string;
//   }
// }

const allCaps = (string) => (string.length > 10) ? string.toUpperCase() : string;

console.log(allCaps('hello world'));
console.log(allCaps('goodbye'));

// exercise 8

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

function numberRange(num) {
  if (num < 0 ) {
    console.log(`${num} is less than 0`);
  } else if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else if (num > 50) {
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is between 0 and 50`);
  }
}