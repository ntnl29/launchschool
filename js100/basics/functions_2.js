// Greet 1

// function greet(greeting = 'Hello', who = 'world') {
//     console.log(greeting + ', ' + who + '!');
// }

function greet() {
  console.log(greeting() + ', ' + recipient() + '!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!

// Greet 2

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

// Greet 3

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

// Calculate BMI

// bmi = weightInKilograms / heightInMeters**2;

const calculateBMI = (height, weight) => (weight / (height / 100)**2).toFixed(2);

console.log(calculateBMI(178, 72)); // "24.69"

// Calculate Cat Age

function catAge(number) {
  let savedAge = 0;
  if (number >= 1) {
    savedAge += 15;
  }
  if (number >= 2) {
    savedAge += 9;
  }
  if (number >= 3) {
    savedAge += (number - 2) * 4;
  }
  return savedAge;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

// Remove Last Char

const removeLastChar = word => console.log(word.slice(0, -1));

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

// Arrow Functions (Part 1)

const template = 'I VERB NOUN.';

const sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.

// Arrow Functions (Part 2)

let initGame = num => ({level: 1, score: 0});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);