/* How big is the room?

*/

let readlineSync = require("readline-sync");

console.log('Enter the length of the room in meters:');
let length = readlineSync.question();

console.log('Enter the width of the room in meters:');
let width = readlineSync.question();

function howBig(length, width) {
  let sqMeter = length * width;
  let sqFt = (sqMeter * 10.7639).toFixed(2);
  return `The area of the room is ${sqMeter} square meters (${sqFt} square feet).`
}

console.log(howBig(length, width));