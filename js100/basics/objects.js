// Retrieve a Value (Part 1)

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses);
console.log(student.locker);

// Retrieve a Value (Part 2)

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };

// console.log(jane.location.country);

// Add a Property

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
// Add property 'favorite food'.
fido.age = 10;
fido['favorite food'] = 'chocolate';

console.log(fido);

// Greetings from Jane

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet(person) {
    console.log(`Hej, ${person}!`)
  }
};

jane.greet('Bobby'); // Hej, Bobby!

// Dot Notation vs Bracket Notation

// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // ?

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?

// Is it true?

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}

// Car Keys

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

// let keys = [];
// for (let prop in vehicle) {
//   keys.push(prop);
// }

// or

let keys = Object.keys(vehicle);

console.log(keys);

// Convert an object to a nested array

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// let nestedPerson = Object.entries(person);

// or
// let nestedPerson = [];
// for (let prop in person) {
//   nestedPerson.push([prop, person[prop]]);
// }

// console.log(nestedPerson);

// ...and vice versa

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// let character = Object.fromEntries(nestedArray);

// or

let character = {};

for (let i = 0; i < nestedArray.length; i += 1) {
  let pair = nestedArray[i];
  character[pair[0]] = pair[1];
}

console.log(character);

// Cloning a Person

function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false