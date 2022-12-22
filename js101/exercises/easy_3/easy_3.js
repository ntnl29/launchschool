// ddaaiillyy ddoouubbllee

function crunch(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== string[i + 1]) {
      newString += string[i];
    }
  }
  console.log(newString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

// Bannerizer

function logInBox(string) {
  let line = `+ ${"-".repeat(string.length)} +`;
  let bar = `| ${" ".repeat(string.length)} |`;
  console.log(line);
  console.log(bar);
  console.log(`| ${string} |`);
  console.log(bar);
  console.log(line);
}

logInBox('To boldly go where no one has gone before.');

// Stringy Strings

function stringy(number) {
  let result = 0;
  if (number % 2 === 0) {
    result = "10".repeat(number / 2);
  } else {
    result = "10".repeat(number / 2) + 1;
  }
  console.log(result);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// Fibonacci Number Location By Length

function findFibonacciIndexByLength(number) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < number);
  console.log(count);
}

// function fibonacci(number) {
//   if (number < 2) return number; // 0 if number is 0, 1 if number is 1
//   return fibonacci(number - 1) + fibonacci(number - 2);
// }

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

// Right Triangles

function triangles(number) {
  for (let i = 0; i <= number; i +=1) {
    console.log(' '.repeat(number - i) + '*'.repeat(i));
  }
}

triangles(10);

// Double Doubles

function twice(number) {
  let string = String(number);
  let center = Math.floor(string.length / 2);
  let firstHalf = string.substring(0, center);
  let secondHalf = string.substring(center);
  if (firstHalf === secondHalf) {
    console.log(number);
  } else {
    console.log(number * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

// Grade Book

function getGrade(num1, num2, num3) {
  let average = ((num1 + num2 + num3) / 3);
  if (average < 60) {
    console.log("F")
  } else if (average < 70) {
    console.log("D")
  } else if (average < 80) {
    console.log("C");
  } else if (average < 90) {
    console.log("B");
  } else if (average <= 100) {
    console.log("A");
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

// Clean up the words <--- need to study more

// function cleanUp(string) {
//   let newString = '';
//   for (let i = 0; i < string.length; i += 1) {
//     if (confirmLetter(string[i])) {
//       newString += string[i];
//     } else if (newString[newString.length - 1] !== ' ') {
//       newString += ' ';
//     }
//   }
//   console.log(newString);
// }

// function confirmLetter(char) {
//   return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
// }

// using regex

function cleanUp(text) {
  console.log(text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " "));
}

cleanUp("---what's my +*& line?");    // " what s my line "