// Question 1

function isUrl(link) {
  return !!link.match(/^https?:\/\/\S*$/);
};

console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false

// Question 2

function fields(string) {
  let array = string.split(/[ \t,]+/);
  console.log(array);
}

fields("Pete,201,Student");     // -> ['Pete', '201', 'Student']
fields("Pete \t 201    ,  TA"); // -> ['Pete', '201', 'TA']
fields("Pete \t 201");          // -> ['Pete', '201']
fields("Pete \n 201");          // -> ['Pete', '\n', '201']

// Question 3

function mysteryMath(string) {
  console.log(string.replace(/[+\-*\/]/, '?'));
}

mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

// Question 4

function mysteriousMath(string) {
  console.log(string.replace(/[+\-*\/]/g, '?'));
}

mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

// Question 5

function danish(string) {
  console.log(string.replace(/\bapple|blueberry|cherry/, 'danish'));
}

danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'

// Question 6

function formatDate(date) {
  console.log(date.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1'));
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)

// Question 7

function formatFinalDate(date) {
  console.log(date.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1').replace(/^(\d\d\d\d)\/(\d\d)\/(\d\d)$/, '$3.$2.$1')
  );
}

formatFinalDate('2016-06-17'); // -> '17.06.2016'
formatFinalDate('2017/05/03'); // -> '03.05.2017'
formatFinalDate('2015/01-31'); // -> '2015/01-31' (no change)