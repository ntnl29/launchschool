// Question 1

let spacing = '';
let quote = "The Flintstones Rock!";

do {
  console.log(spacing + quote);
  spacing += ' ';
} while (spacing.length < 10);

// Question 2

let munstersDescription = "The Munsters are creepy and spooky.";

console.log(munstersDescription.charAt(0).toLowerCase() + munstersDescription.substring(1).toUpperCase());

// Question 3

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(10));

