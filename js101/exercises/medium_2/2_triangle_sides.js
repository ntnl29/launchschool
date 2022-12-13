function triangle(sideOne, sideTwo, sideThree) {
  let perimeter = sideOne + sideTwo + sideThree;
  let longest = Math.max(sideOne, sideTwo, sideThree);
  let shortest = Math.min(sideOne, sideTwo, sideThree);
  let middle = perimeter - longest - shortest;

  if (shortest === 0 || (longest > (middle + shortest))) {
    return 'invalid';
  } else if (sideOne === sideTwo && sideTwo === sideThree) {
    return 'equilateral';
  } else if (sideOne === sideTwo || sideTwo === sideThree) {
    return 'isoceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"