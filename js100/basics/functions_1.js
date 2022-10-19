// Sum

function sum (a, b) {
  return a + b;
}

// const sum = (a, b) => a + b;

console.log(sum(22, 10));

// Log Quote

const brendanEichQuote = x => console.log('Always bet on JavaScript.')

brendanEichQuote();
// logs:
// Always bet on JavaScript.

// Cite the Author

const cite = (x, y) => console.log(x + ' said: "' + y + '"');

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."

// Squared Number

const squaredNumber = x => console.log(x * x);

squaredNumber(3); // 9

// Three-way comparison

function compareByLength(str1, str2) {
  if (str1.length < str2.length) {
    console.log(-1);
  } else if (str1.length > str2.length) {
    console.log(1);
  } else console.log(0);
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

// Transformation

let string = 'Captain Ruby';
string = string.split(' ');
string = string[0] + ' JavaScript';
console.log(string);

console.log('Captain Ruby'.replace('Ruby', 'JavaScript'));

// Internationalization 1

function greet(lang) {
  switch(lang) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'

// Locale Part 1

// function extractLanguage(lang) {
//   console.log(lang.slice(0, 3));
// }

const extractLanguage = (locale) => locale.split('_')[0];

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

// Locale Part 1

function extractRegion(locale) {
  return locale.slice(3, 5);
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

// Internationalization 2

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'