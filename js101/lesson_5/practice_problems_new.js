/* eslint-disable max-len */
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
}));

// Problem 3

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1]['third'][0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2]['third'][0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0]);

// Problem 4

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
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

// for (let members in munsters) {
//   if (munsters[members].gender === 'male') {
//     totalMaleAge += munsters[members].age;
//   }
// }

let memberDetails = Object.values(munsters);

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});

console.log(totalMaleAge);

// Problem 6

Object.entries(munsters).forEach(array => {
  console.log(`${array[0]} is a ${array[1].age}-year old ${array[1].gender}.`);
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

let arrProb9 = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arrProb9.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => a - b);
  } else {
    return subArr.slice().sort();
  }
}));

// Problem 10

console.log(arrProb9.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => b - a);
  } else {
    return subArr.slice().sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}));

// Problem 11

let arrProb11 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(arrProb11.map(obj => {
  let newObj = {};

  for (let key in obj) {
    newObj[key] = obj[key] + 1;
  }

  return newObj;
}));

console.log(arrProb11);

// Problem 12

let arrProb12 = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arrProb12.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
}));

// Problem 13

let arrProb13 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

console.log(arrProb13.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 !== 0)
    .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 !== 0)
    .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
}));

// Problem 14

let objProb14 = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

console.log(Object.values(objProb14).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes.colors;
  } else {
    return attributes.size.toUpperCase();
  }
}));