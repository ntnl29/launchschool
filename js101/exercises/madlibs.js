const readline = require('readline-sync');

const MESSAGES = {
  getNoun: "Enter a noun:",
  getVerb: "Enter a verb",
  getAdjective:  "Enter an adjective",
  getAdverb: "Enter an adverb"
};

let noun;
let verb;
let adjective;
let adverb;

function prompt(message) {
  console.log(`=> ${message}`);
}

