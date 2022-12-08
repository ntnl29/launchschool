const NUMBER_TRANSLATE = {
  one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9
};

// function wordToDigit(string) {
//   Object.keys(NUMBER_TRANSLATE).forEach(word => {
//     let regex = new RegExp('\\b' + word + '\\b', 'g');
//     string = string.replace(regex, NUMBER_TRANSLATE[word]);
//   });
//   return string;
// }

function wordToDigit(string) {
  const numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let index = 0; index < numberArray.length; index += 1) {
    string = string.replaceAll(numberArray[index], index);
  }
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."