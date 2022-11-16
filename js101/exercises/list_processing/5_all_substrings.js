function substrings(str) {
  let array = [];
  for (let startLength = 0; startLength < str.length; startLength += 1) {
    for (let endLength = startLength + 1; endLength <= str.length; endLength += 1) {
      array.push(str.slice(startLength, endLength));
    }
  }
  return array;
}

console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/

console.log(substrings('abc'));