// exercise 2

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

for (let i = 0; i < myArray.length; i += 1) {
  if (myArray[i] % 2 === 0) {
    console.log(myArray[i]);
  }
}

// forEach method

myArray.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
})

// exercise 3

let newArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < newArray.length; i += 1) {
  for (let j = 0; j < newArray[i].length; j += 1)
  if (newArray[i][j] % 2 === 0) {
    console.log(newArray[i][j]);
  }
}

// forEach method

newArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});

// exercise 4
let evenOddArr = [];

for (let i = 0; i < myArray.length; i += 1) {
  if (myArray[i] % 2 === 0) {
    evenOddArr.push('even');
  } else {
    evenOddArr.push('odd');
  }
}

console.log(evenOddArr);

// map method

let mapArr = myArray.map(function(value) {
  return value % 2 === 0 ? 'even' : 'odd';
});

console.log(mapArr);

// exercise 5

function findIntegers(arr) {
  let onlyIntegers = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Number.isInteger(arr[i]) === true) {
      onlyIntegers.push(arr[i])
    }
  }
  return onlyIntegers;
}

console.log(findIntegers(['steve', 34, 1, 'a', 72, 'bee', 'stuff', 29]));

// filter method

function filterIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
};

console.log(filterIntegers(['steve', 34, 1, 'a', 72, 'bee', 'stuff', 29]));

// exercise 6

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// create function that takes arr as variable
function oddLengths(val) {
  let newArr = arr.map(function(val) {
    return val.length;
  })
  return newArr.filter(num => num % 2 !== 0);
}


// exercise 7

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(arr) {
  return arr.reduce((accumulator, number) => {
    return accumulator + number * number;}, 0);
  }

// exercise 8

function reduceOddLengths(a) {
  return arr.reduce((filteredArr, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredArr.push(length);
    }
    return filteredArr;
  }, []);
  return arr;
}

console.log(reduceOddLengths(arr))

/*
exercise 9
Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:
*/

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

/* exercise 10

*/

let tenArr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

tenArr[1][3] = 606;
console.log(tenArr);