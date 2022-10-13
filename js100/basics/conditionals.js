// Yes? No? Part 1

let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log('Yes!')
} else console.log('No.');

console.log(randomNumber ? 'Yes!' : 'No.');

// Check the Weather, Part 1

let weather = 'snowy';

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log("Grab your umbrella.")
} else console.log("Let's stay inside.");

// Switch

let animal = 'dog';

switch(animal) {
  case 'duck':
    console.log('quack')
    break;
  case 'horse':
    console.log('neigh')
    break;
  default:
    console.log('nope')
}

// Check the weather, Part 2

let switchWeather = 'sunny';

switch(switchWeather) {
  case 'sunny':
    console.log("It's a beautiful day!")
    break;
  case 'rainy':
    console.log("Grab your umbrella.")
    break;
  default:
    console.log("Let's stay inside.")
}

// Are we moving?

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);