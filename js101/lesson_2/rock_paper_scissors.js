const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let userScore = 0;
let computerScore = 0;
let choice;
let computerChoice;

const SHORT_CHOICES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  sp: 'spock',
  l: 'lizard'
};

// FUNCTIONS

function prompt(message) {
  console.log(`=> ${message}`);
}

function computeWinner(choice, computerChoice) {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  computerChoice = VALID_CHOICES[randomIndex];
  prompt(`You chose ${choice}, the computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === ('scissors' || 'lizard')) ||
  (choice === 'paper' && computerChoice === ('rock' || 'spock')) ||
  (choice === 'scissors' && computerChoice === ('paper' || 'lizard')) ||
  (choice === 'spock' && computerChoice === ('scissors' || 'rock')) ||
  (choice === 'lizard' && computerChoice === ('spock' || 'paper'))) {
    prompt('You win!');
    incrementScore('win');
  } else if (choice === computerChoice) {
    prompt('Tie!');
  } else {
    prompt('You lose!');
    incrementScore('lose');
  }
}

function incrementScore(status) {
  if (status === 'win') {
    userScore += 1;
  } else if (status === 'lose') {
    computerScore += 1;
  }
}

function showScore() {
  prompt('You: ' + userScore + ' | Computer: ' + computerScore);
}

function chooseHand() {
  prompt(`Type: r for rock, p for paper, sc for scissors, l for lizard, or sp for spock`);
  choice = abbreviatedChoice(readline.question());

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = abbreviatedChoice(readline.question());
  }
}

function abbreviatedChoice(choice) {
  return SHORT_CHOICES[choice];
}

function introduction() {
  console.clear();
  console.log("-".repeat(12));
  prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
  console.log("");
  prompt("The rules are as follows:");
  prompt("1. ROCK crushes SCISSORS and LIZARD");
  prompt("2. PAPER covers rock and disproves SPOCK");
  prompt("3. SCISSORS cuts PAPER and decapitates LIZARD");
  prompt("4. LIZARD poisons SPOCK and eats PAPER");
  prompt("5. SPOCK vaporizes ROCK and smashes SCISSORS");
  console.log("");
  prompt("For this match, you will play best 3 out of 5. Are you ready?");
  console.log("-".repeat(12));
}

// BODY

introduction();

while (true) {

  chooseHand();

  computeWinner(choice, computerChoice);

  showScore();

  if (userScore >= 3 || computerScore >= 3) {
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') {
      break;
    }
  }
}