function staggeredCase(string) {
  let needUpper = true;

  return string.split('').map(char => {
    char = char.toLowerCase();
    if (char.match(/[a-z]/)) {
      if (needUpper) {
        needUpper = false;
        return char.toUpperCase();
      } else {
        needUpper = true;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ALL CAPS"));
console.log(staggeredCase("ignore 77 the 444 numbers"));