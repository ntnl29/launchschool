// How Old is Teddy?

function teddyAge() {
  let age = 0;
  do {age = Math.floor(Math.random() * 100);}
  while (age < 20 || age > 120);
  return `Teddy is ${age} years old!`;
}

console.log(teddyAge());