function featured(num) {
  const MAX_NUM = 9876543201;
  let result = nextOddMultipleOfSeven(num);

  function nextOddMultipleOfSeven(num) {
    do {
      num += 1;
    } while (num % 2 === 0 || num % 7 !== 0);

    return num;
  }

  return result;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."