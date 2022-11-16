// function isUppercase(string) {
//   return string === string.toUpperCase();
// }

// const isUppercase = str => str === str.toUpperCase();

const isUppercase = str => !/[a-z]/.test(str);

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true