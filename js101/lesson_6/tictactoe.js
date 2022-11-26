const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 2;
const scoreBoard = {player: 0, computer: 0};
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

// FUNCTIONS

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  prompt(`You are "${HUMAN_MARKER}" | Computer is "${COMPUTER_MARKER}"`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER && board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER && board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function introduction() {
  console.clear();
  prompt("Welcome to Tic Tac Toe!");
  console.log("");
  prompt("For this match, you will play best 2 out of 3.");
  console.log("-".repeat(15));
}

// SCORING

function incrementScore(status) {
  if (status === 'Player') {
    scoreBoard.player += 1;
  } else if (status === 'Computer') {
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
}

function finalResults() {
  if (scoreBoard.player >= GAMES_TO_WIN) {
    console.log(`You are the WINNER, ${scoreBoard.player} games to ${scoreBoard.computer}.`);
  } else if (scoreBoard.computer >= GAMES_TO_WIN) {
    console.log(`You are the LOSER, ${scoreBoard.player} games to ${scoreBoard.computer}.`);
  }
}

// BODY

introduction();

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    console.clear();
  }

  console.clear();
  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    incrementScore('Player');
    scoreBoardUpdate();
  } else {
    prompt("It's a tie!");
  }

  if (Object.values(scoreBoard).includes(GAMES_TO_WIN) === true) {
    finalResults();
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    console.log('');
    prompt('Do you want to play again (y/n)?');
    let playAgain = readline.question().toLowerCase();
    while (playAgain !== 'n' && playAgain !== 'y') {
      prompt('Please enter "y" or "n".');
      playAgain = readline.question().toLowerCase();
    }
    if (playAgain !== 'y') break;
  }
}
prompt('Thanks for playing Tic Tac Toe! See you later.');