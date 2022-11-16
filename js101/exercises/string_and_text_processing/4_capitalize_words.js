/*
Problem:
  Create function that takes string as argument and returns that
  string with first character of every word capitalized

input: string
output: new string
rules:
  explicit:
    - first letter of ever word capitalized

algorithim:
  - split string into array
  - iterate through each string in array
  - capitalize each first letter
  - use join to combine the words and flatten array
  - return array as a string
*/

function wordCap(string) {
  let array = [];
  string.split(' ').forEach(word => {
    array.push(word[0].toUpperCase() + word.substring(1));
  });
  return array.join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'