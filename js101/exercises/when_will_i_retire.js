let readlineSync = require("readline-sync");
let currentYear = new Date().getFullYear();

let currentAge = Number(readlineSync.question("What is your age? "));
let retirementAge = Number(readlineSync.question("At what age would you like to retire? "));

let retirementYear = currentYear + retirementAge - currentAge;
let yearsLeft = retirementAge - currentAge;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${yearsLeft} years to go!`);