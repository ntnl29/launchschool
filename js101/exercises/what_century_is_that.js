function century(year) {
  let digit = Math.floor(year / 100) + 1;
  if (year % 100 === 0) {
    digit -= 1;
  }
  return digit + addSuffix(digit);
}

function addSuffix(number) {
  let lastNumber = String(number).at(-1);
  let secondLastNum = String(number).slice(-2);
  if (secondLastNum === '11' || secondLastNum === '12' || secondLastNum === '13') {
    return 'th';
  } else {
    switch (lastNumber) {
      case '1': return 'st';
        break;
      case '2': return 'nd';
        break;
      case '3': return 'rd';
        break;
      default: return 'th';
    }
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"