// Find Fruit

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let result = {};
  let objKeys = Object.keys(obj);

  for (let count = 0; count < objKeys.length; count += 1) {
    let currentKey = objKeys[count];
    let currentVal = obj[currentKey];

    if (currentVal === 'Fruit') {
      result[currentKey] = currentVal;
    }
  }
console.log(result);
}


selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }


// Mutate doubleNumbers

function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}

function doubleOddNumbers(numbers) {
  numbers.forEach(function (num, index, arr) {
    if (index % 2 === 1) {
      arr[index] *= 2;
    }
  });
  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]
console.log(doubleOddNumbers(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// Flexible Functions

function selectType(group, foodType) {
  let groupKeys = Object.keys(group);
  let selectedItems = {};

  for (let count = 0; count < groupKeys.length; count += 1) {
    let currentKey = groupKeys[count];
    let currentVal = group[currentKey];

    if (currentVal === foodType) {
      selectedItems[currentKey] = currentVal;
    }
  }
  return selectedItems;;
}

console.log(selectType(produce, 'Fruit'));     // => {apple: 'Fruit', pear: 'Fruit'}
console.log(selectType(produce, 'Vegetable')); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
console.log(selectType(produce, 'Meat'));      // => {}

// Multiply Numbers

function multiply (array, multiplier) {
  let multipledArray = [];
  for (let index = 0; index < array.length; index += 1) {
    multipledArray.push(array[index] *= multiplier);
  }
  return multipledArray;
}

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]