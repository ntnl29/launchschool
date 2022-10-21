let readlineSync = require("readline-sync");
let numArr = [];

numArr.push(readlineSync.question("Enter the 1st number:"));
numArr.push(readlineSync.question("Enter the 2nd number:"));
numArr.push(readlineSync.question("Enter the 3rd number:"));
numArr.push(readlineSync.question("Enter the 4th number:"));
numArr.push(readlineSync.question("Enter the 5th number:"));
let lastNum = readlineSync.question("Enter the last number:");

if (numArr.includes(lastNum)) {
  console.log(`${lastNum} appears in ${numArr}`);
} else {
  console.log(`${lastNum} does not appear in ${numArr}`);
}

if (numArr.some(num => num > 25)) {
  console.log("There is a number greater than 25");
} else {
  console.log("There is no number greater than 25");
}