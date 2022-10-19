// Question 1

let numbers = [1, 2, 3, 4];

// numbers.length = 0;

// while (numbers.length) {
//   numbers.pop();
// }

while (numbers.length) {
  numbers.shift()
}

console.log(numbers);

// Question 5

// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }

const isColorValid = color => ['blue', 'green'].includes(color);

console.log(isColorValid('green'));