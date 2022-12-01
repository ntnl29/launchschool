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

const deckSuits = ['H', 'D', 'C', 'S'];
const deckValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
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

function printHands(playerCards, dealerCards) {
  prompt('The dealer shuffles the cards. He slowly passes out the cards.');
  prompt('One for you, one for him. Another for you, another for him.');
  prompt('Both of your cards are faced upwards. One of his cards faces upwards and the other is face down');
  console.log("");
  prompt('As you turn your eyes towards your cards, you see:');
  console.log((' ').repeat(5) + `${playerCards}`); // player's cards
  console.log("");
  prompt('You glance over to the dealer\'s cards and you see:');
  console.log((' ').repeat(5) + `${dealerCards[0]} and UNKNOWN CARD`); // dealer's cards
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

function dealTheCards(deck) {
  for (let index = 0; index < 2; index += 1) {
    playerCards.push(deck.shift());
    dealerCards.push(deck.shift());
  }
}

// BODY

printIntro();
dealTheCards(deck);
printHands(playerCards, dealerCards);