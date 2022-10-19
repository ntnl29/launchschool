const readline = require('readline-sync');

const MESSAGES = {
  getNoun: "Enter a noun:",
  getVerb: "Enter a verb",
  getAdjective:  "Enter an adjective",
  getAdverb: "Enter an adverb"
};

function prompt(message) {
  console.log(`=> ${message}`);
}

let noun = readline.question(prompt(MESSAGES.getNoun));

let verb = readline.question(prompt(MESSAGES.getVerb));

let adjective = readline.question(prompt(MESSAGES.getAdjective));

let adverb = readline.question(prompt(MESSAGES.getAdverb));

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb} ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb} up ${adjective} Joe's turtle.`);