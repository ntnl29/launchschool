function buyFruit(arr) {
  let newArr = [];

  arr.forEach(item => {
    for (let i = 1; i <= item[1]; i += 1) {
      newArr.push(item[0]);
    }
  });
  return newArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]