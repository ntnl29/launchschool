function sumOfSums(array) {
  let result = 0;
  for (let i = 1; i <= array.length; i += 1) {
    result += array.slice(0, i).reduce((accum, num) => accum + num);
  }
  return result;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35