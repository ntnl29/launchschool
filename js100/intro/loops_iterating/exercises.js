// exercise 1

function ageCalc(age) {
  console.log(`You are ${age} years old.`)
  for (let i = 10; i <= 40; i += 10) {
    // age += 10;
    console.log(`In ${i} years, you will be ${age + i} years old.`)
  }
}

ageCalc(20)

// exercise 2

function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }
    return result;
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

// exercise 5

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {result = randomNumberBetween(1, 6);
tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// exercise 6

function factorialRecursion(number) {
  if (number === 1) return number;
  return number *= factorialRecursion(number - 1);
}

console.log(factorialRecursion(1));     // => 1
console.log(factorialRecursion(2));     // => 2
console.log(factorialRecursion(3));     // => 6
console.log(factorialRecursion(4));     // => 24
console.log(factorialRecursion(5));     // => 120
console.log(factorialRecursion(6));     // => 720
console.log(factorialRecursion(7));     // => 5040
console.log(factorialRecursion(8));     // => 40320