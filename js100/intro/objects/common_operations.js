let person = { name: 'Bob', age: 30, height: '6ft', preference: 'Hetero'};

let personValues = Object.values(person);

console.log(personValues); // => [ 'Bob', 30, '6ft' ]

console.log(Object.entries(person));