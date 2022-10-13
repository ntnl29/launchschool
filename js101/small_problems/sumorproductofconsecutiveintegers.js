/* Sum or Product of Consecutive Integers

*/

let readlineSync = require("readline-sync");

let integer = parseFloat(readlineSync.question('Please enter an integer greater than 0: '));

let sumOrProd = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (sumOrProd === 's') {
  findSum(integer);
} else {
  findProd(integer);
}

function findSum(number) {
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }
  return console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
}

function findProd(number) {
  let prod = 1;
  for (let i = 1; i <= number; i += 1) {
    prod *= i;
  }
  return console.log(`The product of the integers between 1 and ${integer} is ${prod}.`);
}

// console.log(findSum(5));
// console.log(findProd(6));