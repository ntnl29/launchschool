/* Arithmetic Integer

Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

*/

let readlineSync = require("readline-sync");
console.log('Gimme number 1 ');
let num1 = parseInt(readlineSync.question());

console.log('Gimme number 2 ');
let num2 = parseInt(readlineSync.question());

console.log(`${num1} + ${num2} = ` + (num1 + num2));

console.log(`${num1} - ${num2} = ` + (num1 - num2));

console.log(`${num1} * ${num2} = ` + (num1 * num2));

console.log(`${num1} / ${num2} = ` + Math.floor((num1 / num2)));

console.log(`${num1} % ${num2} = ` + (num1 % num2));

console.log(`${num1} ** ${num2} = ` + Math.pow(num1, num2));