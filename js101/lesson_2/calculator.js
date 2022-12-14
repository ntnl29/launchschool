const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Would you like in English or French?');
let language = readline.question();

while (!['english', 'french'].includes(language)) {
  prompt('Please type English or French');
  language = readline.question();
}

if (language === 'english') {
  language = 'en';
}
if (language === 'french') {
  language = 'fr';
}

prompt(MESSAGES[language]['welcome']);

while (true) {

// ask user for 1st number
  prompt(MESSAGES[language]['firstNumber']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[language]['invalidNumber']);
    number1 = readline.question();
  }

// ask for a 2nd number
  prompt(MESSAGES[language]['secondNumber']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[language]['invalidNumber']);
    number2 = readline.question();
  }

// ask what operation to perform
  prompt(MESSAGES[language]['whatOperation']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES[language]['invalidOperation']);
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
  prompt(MESSAGES[language]['anotherCalc']);
  let anotherCalc = readline.question();

  while (!['y', 'n'].includes(anotherCalc)) {
    prompt(MESSAGES[language]['invalidAnotherCalc']);
    anotherCalc = readline.question();
  }

  if (anotherCalc === 'n') {
    break;
  }
}