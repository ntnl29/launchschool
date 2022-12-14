// Problem 1

let arrProb1 = ['10', '11', '9', '7', '8'];

console.log(arrProb1.sort((a, b) => Number(b) - Number(a)));

// Problem 2

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

console.log(books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
})
);

// Problem 3

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

// console.log(arr1[2][1][3]);
// console.log(arr2[1]['third'][0]);
// console.log(arr3[2]['third'][0][0]);
// console.log(obj1.b[1]);
// console.log(Object.keys(obj2.third)[0]);

// Problem 4

let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = 4;
console.log(arr1);

arr2[2] = 4;
console.log(arr2);

obj1.first[2][0] = 4;
console.log(obj1);

obj2.a.a[2] = 4;
console.log(obj2);

// Problem 5

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge);

// Problem 6

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1]['gender'];

  console.log(`${name} is a ${age}-year old ${gender}`);
});

// Problem 8

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

Object.values(obj).forEach(array => {
  array.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

// Problem 9

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
}));

// Problem 10

console.log(arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
}));

// Problem 11

let arr11 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(arr11.map(obj => {
  let incrementObj = {};

  for (let key in obj) {
    incrementObj[key] = obj[key] + 1;
  }
  return incrementObj;
}));

console.log(arr11);

// Problem 12

let arr12 = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr12.map(array => {
  return array.filter(num => num % 3 === 0);
}));

// Problem 13

let arr13 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

