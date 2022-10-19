function multiply(one, two) {
  return one * two;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let one = getNumber('Enter the first number: ');
let two = getNumber('Enter the second number: ');
console.log(`${one} * ${two} = ${multiply(one, two)}`);