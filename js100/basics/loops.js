// Loop and Log

for (let i = 0; i <= 10; i += 2) {
  // include your code here
  console.log(i);
}

// Countdown

for (let i = 10; i >= 0; i -= 1) {
  if (i === 0) {
    console.log('Launch!');
  } else {
    console.log(i);
  }
};

// Triple Greeting

let greeting = 'Aloha!';

for (let i = 0; i < 3; i += 1) {
  console.log(greeting);
};

// Take Two

for (let i = 1; i <= 100; i += 1) {
  console.log(i * 2);
}

// Looping over Array Elements

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
index += 1;
}

// Continue

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  }
  console.log(cities[i].length);
};

// And on and on and on

for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}

// That's Odd

let oddNumbers = 1;

while (oddNumbers <= 40) {
  if (oddNumbers % 2 !== 0) {
    console.log(oddNumbers);
  }
  oddNumbers += 1;
};

// Finding Nemo

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// for (let i = 0; i <= fish.length; i += 1) {
//   if (fish[i] === 'Nemo') {
//     console.log(fish[i]);
//     break;
//   }
// }

for (let prop of fish) {
  console.log(prop);
  if (prop === 'Nemo')
  break;
}