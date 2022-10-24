// How Old is Teddy?

function teddyAge() {
  let age = 0;
  do {age = Math.floor(Math.random() * 100);}
  while (age < 20 || age > 120);
  return `Teddy is ${age} years old!`;
}

console.log(teddyAge());

// Palindromic Strings (Part 1)

function isPalindrome(string) {
  let revString = string.split('').reverse().join('');
  console.log(string === revString);
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

// Palindromic Strings (Part 2)

function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrome(string);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

// Palindromic Numbers

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

// Running Totals

function runningTotal(array) {
  let newNum = 0;
  return array.map(num => {
    newNum += num;
    return newNum;
  });
  // let newArr = [];
  // for (let num of array) {
  //   newArr.push(num + tempNum);
  //   tempNum += num;
  // }
  // return newArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// Letter Counter (Part 1 & 2)

function wordSizes(string) {
  let onlyChar = string.replace(/[^a-z ]/gi, '');

  let strArray = onlyChar.split(' ');
  let count = {};

  for (let i = 0; i < strArray.length; i += 1) {
    let wordSize = strArray[i].length;
    if (wordSize === 0) {
      continue;
    }
    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }
  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

// Letter Swap

function swap(string) {
  let revString = string.split('').reverse().join('').split(' ');
  let revArr = [];
  if (revString.length === 1) {
    return revString.join('');
  } else {
    for (let i = revString.length - 1; i >= 0; i -= 1) {
      revArr.push(revString[i]);
    }
    return revArr.join(' ');
  }
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"