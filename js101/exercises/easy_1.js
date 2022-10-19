/* Isn't it Odd?
Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.
*/

const isOdd = number => number % 2 !== 0 ? true : false;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/* Odd Numbers
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
*/

for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

/* Even Numbers
*/

for (let i = 2; i < 100; i += 2) {
  console.log(i);
}


/* Short Long Short

*/

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

/* Leap Years (Part 1)
*/

function isLeapYear(year) {
  if (year > 1752)
    if ((year % 4 === 0 && year % 100 !== 0) ||
    (year % 400 === 0)) {
      console.log(true);
    } else console.log(false);
  if (year < 1752 && year % 4 === 0) {
    console.log(true)
  } else console.log(false)
  }

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

/* Leap Years (Part 2)
Added onto part 1
*/

/* Multiples of 3 and 5
*/

function multisum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

