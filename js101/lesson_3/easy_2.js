// Question 1

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace("important", "urgent"));

// Question 2

let numbers = [1, 2, 3, 4, 5];
let reverseNumbers = [];
let sortedNumbers = [];

reverseNumbers = numbers.slice().reverse()
sortedNumbers = [...numbers].sort((num1, num2) => num2 - num1);

console.log(reverseNumbers);
console.log(sortedNumbers);
console.log(numbers);

// Question 3

let question3Numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(question3Numbers.includes(number1));
console.log(question3Numbers.includes(number2));

// Question 4

let famousWords = "seven years ago...";

console.log('Four score and ' + famousWords);
console.log(`Four score and ${famousWords}`);

// Question 5

let question5Array = [1, 2, 3, 4, 5];

question5Array.splice(2, 1);
console.log(question5Array);

// Question 6

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones = [].concat(...flintstones);
console.log(flintstones);

// Question 7

let question7Flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let barney = Object.entries(question7Flintstones).filter(pair => pair[0] ==="Barney").shift();

console.log(barney)

// Question 8

let question8Numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(question8Numbers));
console.log(Array.isArray(table));

// Question 9

let title = "Flintstone Family Members";

console.log(title.length); // 25
console.log((40 - 25) / 2);

let sides = ' '.repeat(Math.floor((40 - title.length) / 2));
console.log(sides + title + sides);

// Question 10

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

const countTs = (string) => string.split('').filter(char => char === 't').length;

console.log(countTs(statement1));
console.log(countTs(statement2));