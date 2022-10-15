const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while (true) {

// ask user for 1st number
  prompt(MESSAGES['firstNumber']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNumber']);
    number1 = readline.question();
  }

// ask for a 2nd number
  prompt(MESSAGES['secondNumber']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNumber']);
    number2 = readline.question();
  }

// ask what operation to perform
  prompt(MESSAGES['whatOperation']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['invalidOperation']);
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

// ask if user wants to do another calculation?
  prompt(MESSAGES['anotherCalc']);
  let anotherCalc = readline.question();

  while (!['y', 'n'].includes(anotherCalc)) {
    prompt(MESSAGES['invalidAnotherCalc']);
    anotherCalc = readline.question();
  }

  if (anotherCalc === 'n') {
    break;
  }
}