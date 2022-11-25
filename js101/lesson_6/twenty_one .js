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