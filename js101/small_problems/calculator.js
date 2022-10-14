const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

// ask user for 1st number
prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmmm...that doesn't look like a valid number.");
  number1 = readline.question();
}

// ask for a 2nd number
prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmmm...that doesn't look like a valid number.");
  number2 = readline.question();
}

// ask what operation to perform
prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Must choose 1, 2, 3, or 4");
  operation = readline.question();
}

// perform the op
let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

/* if (operation === '1') { // 1 is addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // 2 is subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') { // 3 multiplies
  output = Number(number1) * Number(number2);
} else if (operation === '4') { // 4 divides
  output = Number(number1) / Number(number2);
} */

// print result to terminal
prompt(`The result is: ${output}`);