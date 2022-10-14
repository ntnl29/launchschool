const readline = require('readline-sync');

console.log('Welcome to Calculator!');

// ask user for 1st number
console.log("What's the first number?");
let number1 = readline.question();

// ask for a 2nd number
console.log("What's the second number?");
let number2 = readline.question();

// ask what operation to perform
console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

// perform the op
let output;
if (operation === '1') { // 1 is addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // 2 is subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') { // 3 multiplies
  output = Number(number1) * Number(number2);
} else if (operation === '4') { // 4 divides
  output = Number(number1) / Number(number2);
}

// print result to terminal
console.log(`The result is: ${output}`);