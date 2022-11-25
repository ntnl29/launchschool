const GAMES_TO_WIN = 3;
const scoreBoard = {player: 0, computer: 0};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// NEW CODE

function incrementScore(status) {
  if (status === 'win') {
    scoreBoard.player += 1;
  } else if (status === 'lose') {
    scoreBoard.computer += 1;
  }
  prompt(` --- Current Score ---`);
  prompt(`Player: ${scoreBoard.player} | Computer: ${scoreBoard.computer}`);
  console.log('');
  prompt(`  First to ${GAMES_TO_WIN} wins`);
  prompt('-'.repeat(23));
  checkForWinner();
}

function checkForWinner() {
  if (scoreBoard.player >= GAMES_TO_WIN) {
    console.log('You are the winner!');
  } else if (scoreBoard.computer >= GAMES_TO_WIN) {
    console.log('You are the Loser!');
  }
}

incrementScore('lose');
incrementScore('lose');
incrementScore('lose');