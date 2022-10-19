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

const MESSAGES = {
  intro: "Welcome to Nathan's Mortgage & Car Loan Calculator!\nHelping clients make major life decisions since 2022!",
  loanAmount: "What is the mortgage/car loan amount?",
  invalidNumber: "Don't do that.",
  loanRate: "What is the Annual Percentage Rate?",
  loanMonths: "What is the loan term/duration (in months)?",
  monthlyPayment: ' would be your estimated monthly payment.',
};

let loanAmount = 0;
let loanRate = 0;
let loanMonths = 0;

// FUNCTIONS
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return (number.trimStart() === '') || (Number.isNaN(Number(number))) || (Number(number) < 1);
}

function getLoanAmount() {
  prompt(MESSAGES.loanAmount);
  loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES.invalidNumber);
    loanAmount = readline.question();
  }
  return loanAmount;
}

function getLoanRate() {
  prompt(MESSAGES.loanRate);
  loanRate = readline.question();

  while (invalidNumber(loanRate)) {
    prompt(MESSAGES.invalidNumber);
    loanRate = readline.question();
  }
  return loanRate;
}

function getLoanMonths() {
  prompt(MESSAGES.loanMonths);
  loanMonths = readline.question();

  while (invalidNumber(loanMonths)) {
    prompt(MESSAGES.invalidNumber);
    loanMonths = readline.question();
  }
}

function calculateMonthlyPayment() {
  let monthlyInterestRate = loanRate / 100 / 12;
  let monthlyPayment = loanAmount *
  (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-loanMonths))));
  return monthlyPayment.toFixed(2);
}

// MAIN SECTION
prompt(MESSAGES.intro);

getLoanAmount();

getLoanRate();

getLoanMonths();

console.log('$' + calculateMonthlyPayment() + MESSAGES.monthlyPayment);