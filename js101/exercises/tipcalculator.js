/* Tip Calculator

*/

let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question('What is the bill?'));

let tipPct = parseFloat(readlineSync.question('What is the tip percentage?'));

let tip = (tipPct / 100) * bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${tip + bill}`);

// official

// let readlineSync = require("readline-sync");

// let bill = parseFloat(readlineSync.question("What is the bill?\n"));

// let percentage = parseFloat(
//   readlineSync.question("What is the tip percentage??\n")
// );

// let tip = bill * (percentage / 100);

// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);