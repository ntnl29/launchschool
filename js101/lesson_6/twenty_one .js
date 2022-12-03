const readline = require("readline-sync");

const deckSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const deckValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const scoreBoard = {player: 0, dealer: 0};

const NUM_TO_WIN = 21;
const DEALER_TARGET_NUM = 17;
const GAMES_TO_WIN = 5;

let deck;
let playerCards;
let dealerCards;

// FUNCTIONS

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function printIntro() {
  prompt("Welcome to Twenty-One!");
  console.log("");
  prompt('"RULES PLACEHOLDER"'); // Write out rules
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
  prompt('The dealer shuffles the cards. He slowly passes out the cards.');
  prompt('One for you, one for him. Another for you, another for him.');
  prompt('Both of your cards are faced upwards. One of his cards faces upwards and the other is face down.');
  console.log("");
  prompt('You glance over to the dealer\'s cards and you see:');
  console.log((' ').repeat(5) + `${dealerCards[0][0]} and an uncertain card`); // dealer's cards
  console.log("");
  prompt('As you turn your eyes towards your cards, you see:');
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
    prompt('The dealer looks at you and asks: "Do you want to HIT (h) or STAY (s)?"');
    console.log('');

    let answer = readline.question().toLowerCase();

    while (answer !== 'h' && answer !== 's') {
      prompt('The dealer repeats with slight agitation: HIT (h) or STAY (s)?');
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
  printTotal(dealerCards, 'Dealer');

  dealerLogic();

  if (total(dealerCards) < NUM_TO_WIN) {
    prompt('The Dealer stays.');
  }
}

function dealerLogic() {
  while (total(dealerCards) < DEALER_TARGET_NUM) {
    dealerCards.push(deck.shift());
    console.log('');
    prompt(`Dealer hits: ${dealerCards[dealerCards.length - 1][0]}`);
    printTotal(dealerCards, 'Dealer');
    printBusted(dealerCards, 'Dealer');
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

function incrementScore() {
  if (readResult() === 'Player wins!') {
    scoreBoard.player += 1;
  } else if (readResult() === 'Dealer wins!') {
    scoreBoard.dealer += 1;
  }
}

function printResult() {
  console.log('');
  prompt(readResult());
}

function playAgain() {
  console.log('');
  console.log("-".repeat(15));
  console.log('');
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer.toLowerCase()[0] === 'y';
}

// BODY

printIntro();

while (true) {
  console.clear();

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

  printResult();
  incrementScore();
  console.log(scoreBoard);

  if (playAgain()) {
    continue;
  } else {
    break;
  }
}