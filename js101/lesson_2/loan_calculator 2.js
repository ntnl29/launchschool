/* Mortgage & Car Loan Calculator

Require these 3 data points:
  - loan amount
  - APR
  - loan duration (in months)

Need to calculate these:
  - monthly interest rate
  - loan duration in months

*/

// build out inputs for above data points

const readline = require('readline-sync');

// FUNCTIONS
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return (number.trimStart() === '') || (Number.isNaN(Number(number))) || (Number(number) < 1);
}

// MESSAGES
let msgLoanAmt = "What is the mortgage/car loan amount?";
let msgInvalidNum = "Don't do that.";
let msgLoanRate = "What is the Annual Percentage Rate?";
let msgLoanDurMonths = "What is the loan term/duration (in months)?";
let msgMthlyPayment = ' would be your estimated monthly payment.';

// BODY
prompt("Welcome to Nathan's Mortgage & Car Loan Calculator!\nHelping clients make major life decisions since 2022!");

// ask user for data points
prompt(msgLoanAmt);
let loanAmt = readline.question();

while (invalidNumber(loanAmt)) {
  prompt(msgInvalidNum);
  loanAmt = readline.question();
}

prompt(msgLoanRate);
let loanRate = readline.question();

while (invalidNumber(loanRate)) {
  prompt(msgInvalidNum);
  loanRate = readline.question();
}

prompt(msgLoanDurMonths);
let loanDurMonths = readline.question();

while (invalidNumber(loanDurMonths)) {
  prompt(msgInvalidNum);
  loanDurMonths = readline.question();
}

// CALCULATIONS
let mthlyIntRate = loanRate / 100 / 12;

let mthlyPayment = loanAmt * (
  mthlyIntRate / (1 - Math.pow((1 + mthlyIntRate), (-loanDurMonths))));

// return information
// console.log(mthlyIntRate);
console.log('$' + mthlyPayment.toFixed(2) + msgMthlyPayment);