const readline = require("readline-sync");

const deckSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const deckValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const scoreBoard = {player: 0, dealer: 0};

const NUM_TO_WIN = 21;
const GAME_NAME = 'Twenty-One';
const DEALER_TARGET_NUM = 17;
const GAMES_TO_WIN = 3;

let deck;
let playerCards;
let dealerCards;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function printIntro() {
  prompt(`Welcome to ${GAME_NAME}!`);
  console.log("");
  prompt(`Get as close to ${NUM_TO_WIN} without going over. Whoever is closest, wins.`);
  console.log("-".repeat(15));
}

function createDeck(deckValues, deckSuits) {
  let deck = [];
  for (let value of deckValues) {
    for (let suit of deckSuits) {
      deck.push([suit, value]);
    }
  }
  return shuffle(deck);
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
  return deck;
}

function dealCards(deck) {
  for (let index = 0; index < 2; index += 1) {
    playerCards.push(deck.shift());
    dealerCards.push(deck.shift());
  }
}

function printHands(playerCards, dealerCards) {
  prompt('The dealer shuffles the deck, then passes out the cards.');
  console.log("");
  prompt('You glance over to the dealer\'s cards and see:');
  console.log((' ').repeat(5) + `${dealerCards[0][0]} and an uncertain card`); // dealer's cards
  console.log("");
  prompt('As you turn your eyes towards your cards, see:');
  console.log((' ').repeat(5) + translateHands(playerCards)); // player's cards
}

function translateHands(cards) {
  return `${cards[0][0]} and ${cards[1][0]}`;
}

function printTotal(cards, person) {
  console.log('');
  prompt(`${person}'s total is: ` + total(cards));
}

function total(cards) {
  let values = cards.map(card => card[0]);

  let sum = 0;
  values.forEach(value => {
    if (value === "Ace") {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "Ace").forEach(_ => {
    if (sum > NUM_TO_WIN) sum -= 10;
  });

  return sum;
}

function getHitOrStay(deck) {
  console.log('');
  while (true) {
    prompt('The dealer looks at you and asks: "Do you want to hit (h) or stay (s)?"');
    console.log('');

    let answer = readline.question().toLowerCase();

    while (answer !== 'h' && answer !== 's') {
      prompt('The dealer repeats with slight agitation: (h) or (s)?');
      answer = readline.question().toLowerCase();
    }

    if (answer === 'h') {
      playerCards.push(deck.shift());

      let cardCount = playerCards.length - 1;

      prompt(`The dealer flips you a card: ${playerCards[cardCount][0]}`);

      printTotal(playerCards, 'Player');
      printBusted(playerCards, 'Player');
    }

    if (answer === 's' || busted(playerCards)) break;
  }
}

function busted(cards) {
  if (total(cards) > NUM_TO_WIN) {
    return true;
  }
  return false;
}

function printBusted(cards, person) {
  if (busted(cards) === true) {
    console.log('');
    prompt(`${person} busted!`);
  }
}

function dealersTurn() {
  prompt('The dealer flips up his unknown card. This is what he has:');
  console.log((' ').repeat(5) + translateHands(dealerCards));

  dealerLogic();
}

function dealerLogic() {
  while (total(dealerCards) <= DEALER_TARGET_NUM) {
    dealerCards.push(deck.shift());
    console.log('');
    prompt(`Dealer hits: ${dealerCards[dealerCards.length - 1][0]}`);

    printBusted(dealerCards, 'Dealer');
  }

  if (total(dealerCards) <= NUM_TO_WIN) {
    prompt('The Dealer stays.');
  }
}

function readResult() {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > NUM_TO_WIN && dealerTotal > NUM_TO_WIN) {
    return 'You both busted!';
  } else if ((playerTotal > dealerTotal && playerTotal <= NUM_TO_WIN) ||
      dealerTotal > NUM_TO_WIN) {
    return 'Player wins!';
  } else if ((playerTotal < dealerTotal && dealerTotal <= NUM_TO_WIN) ||
      playerTotal > NUM_TO_WIN) {
    return 'Dealer wins!';
  } else {
    return 'Tie!';
  }
}

function printResult() {
  console.log('');
  prompt(readResult());
}

function incrementScore() {
  if (readResult() === 'Player wins!') {
    scoreBoard.player += 1;
  } else if (readResult() === 'Dealer wins!') {
    scoreBoard.dealer += 1;
  }
}

function printScoreBoard() {
  console.log('');
  console.log(`----- Current Score -----`);
  console.log(`| Player: ${scoreBoard.player} | Dealer: ${scoreBoard.dealer} |`);
  console.log(`|` + (' ').repeat(23) + `|`);
  console.log(`|    First to ${GAMES_TO_WIN} wins    |`);
  console.log('-'.repeat(25));
  console.log('');
}

function readMatchWinner() {
  if (scoreBoard.player === GAMES_TO_WIN) {
    return 'Player';
  } else if (scoreBoard.dealer === GAMES_TO_WIN) {
    return 'Dealer';
  }
  return null;
}

function printMatchWinner() {
  let matchWinner = readMatchWinner();

  prompt(`${matchWinner} WINS the match.`);
  resetMatch();
}

function resetMatch() {
  scoreBoard.player = 0;
  scoreBoard.dealer = 0;
}

function playAgain() {
  console.log('');
  prompt('The dealer asks if you want to play again, yes (y) or no (n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('The dealer repeats (y) or (n)?');
    answer = readline.question().toLowerCase();
  }
  return answer.toLowerCase()[0] === 'y';
}

console.clear();
printIntro();

while (true) {
  deck = createDeck(deckSuits, deckValues);
  playerCards = [];
  dealerCards = [];

  dealCards(deck);
  printHands(playerCards, dealerCards);
  printTotal(playerCards, 'Player');
  getHitOrStay(deck);

  if (busted(playerCards) === false) {
    dealersTurn();
  }

  printTotal(dealerCards, 'Dealer');
  printResult();
  incrementScore();
  printScoreBoard();

  if (readMatchWinner() !== null) {
    printMatchWinner();
  }

  if (playAgain()) {
    continue;
  } else {
    break;
  }
}