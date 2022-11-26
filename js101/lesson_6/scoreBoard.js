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
}

function scoreBoardUpdate() {
  prompt(` --- Current Score ---`);
  prompt(`Player: ${scoreBoard.player} | Computer: ${scoreBoard.computer}`);
  console.log('');
  prompt(`  First to ${GAMES_TO_WIN} wins`);
  prompt('-'.repeat(23));
  console.log('');

  if (scoreBoard.player >= GAMES_TO_WIN) {
    console.log('You are the WINNER!');
  } else if (scoreBoard.computer >= GAMES_TO_WIN) {
    console.log('You are the LOSER!');
  }
}

// TESTING

incrementScore('win');
incrementScore('win');
incrementScore('win');
scoreBoardUpdate();