function triangle(angleOne, angleTwo, angleThree) {
  let total = angleOne + angleTwo + angleThree;
  let lowest = Math.min(angleOne, angleTwo, angleThree);
  let array = [angleOne, angleTwo, angleThree];

  if ((total !== 180) || (lowest === 0)) {
    return 'invalid';
  }
  for (let angle of array) {
    if (angle === 90) {
      return 'right';
    } else if (angle > 90) {
      return 'obtuse';
    }
  }
  if (array.every(num => num < 90)) {
    return 'acute';
  }
  return null;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"