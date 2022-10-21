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