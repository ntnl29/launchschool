/* eslint-disable max-len */
function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('') && string.length > 1;
}

function substrings(str) {
  let array = [];
  for (let startLength = 0; startLength < str.length; startLength += 1) {
    for (let endLength = startLength + 1; endLength <= str.length; endLength += 1) {
      array.push(str.slice(startLength, endLength));
    }
  }
  return array;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]