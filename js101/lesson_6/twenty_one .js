const readline = require("readline-sync");

/* Pseudocode

1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

*/

/*
Deck: Start with a standard 52-card deck consisting of:
- 4 suits (Hearts, Diamonds, Clubs, and Spades)
- 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace)
*/

const deckSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const deckValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const deck = shuffle(createDeck(deckSuits, deckValues));

const playerCards = [];
const dealerCards = [];

// FUNCTIONS

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function printIntro() {
  console.clear();
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
  return deck;
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
  return deck;
}

function dealDeck(deck) {
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
    if (sum > 21) sum -= 10;
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
    }

    if (answer === 's' || busted(playerCards, 'Player')) break;
  }
}

function busted(cards, person) {
  if (total(cards) > 21) {
    console.log('');
    prompt(`${person} busted!`);
    return true;
  }
  return null;
}

function dealersTurn(deck) {
  prompt('The dealer flips up his unknown card. This is what he has:');
  console.log((' ').repeat(5) + translateHands(dealerCards));
  printTotal(dealerCards, 'Dealer');

  while (total(dealerCards) < 17) {
    dealerCards.push(deck.shift());
    prompt(`Dealer hits: ${dealerCards[dealerCards.length - 1][0]}`);
    // console.log((' ').repeat(5) + dealerCards[dealerCards.length - 1][0]);
    printTotal(dealerCards, 'Dealer');
    busted(dealerCards, 'Dealer');
  }
  if (total(dealerCards) < 21) {
    prompt('The dealer stays.');
  }
}

// BODY

printIntro();
dealDeck(deck);
printHands(playerCards, dealerCards);
printTotal(playerCards, 'Player');
getHitOrStay(deck);
dealersTurn(deck);