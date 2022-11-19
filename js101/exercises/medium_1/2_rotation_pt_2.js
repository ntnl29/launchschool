function rotateRightmostDigits(number, count) {
  if (count === 1) {
    return number;
  }
  let array = String(number).split('');
  let num = array.slice(-count, 1 - count);
  array.splice(array.length - count, 1, '');
  return array.join('') + num;
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917