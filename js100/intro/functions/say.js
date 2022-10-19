console.log("hello");
console.log("hi");
console.log("how do you do");
console.log("Quite all right");

function say(words) {
  console.log(words + "!");
}

say("hello");
say("hi");
say("how do you do");
say("Quite all right");


function add(a, b) {
  return a + b;
}

add(2, 3); // returns 5

let twoAndThree = add(2, 3);
console.log(twoAndThree); // => 5

function say(words = "hello") {
  console.log(words + "!");
}

say("Howdy"); // => Howdy!
say();        // => hello!