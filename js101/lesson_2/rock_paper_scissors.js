const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let userScore = 0;
let computerScore = 0;

const VALID_CHOICES_SHORT = {
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

function incrementScore(status) {
  if (status === 'win') {
    userScore += 1;
  } else if (status === 'lose') {
    computerScore += 1;
  }
}

function displayWinner(choice, computerChoice) {
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

// BODY

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  console.log('You: ' + userScore + ' | Computer: ' + computerScore);
  if (userScore >= 3 || computerScore >= 3) {
    break;
  }

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