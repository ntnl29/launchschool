function fibonacci(num) {
  let array = [1, 1];

  for (let index = 3; index <= num; index += 1) {
    array = [array[1], array[0] + array[1]];
  }
  return array[1];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050