// Question 4

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase());

// Question 6

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);
console.log(ages);

// Question 7

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));

// Question 8

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");
console.log(flintstones);

// Question 9

flintstones.push("Dino", "Hoppy");
console.log(flintstones);

// Question 10

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

console.log(advice.indexOf("house")) // returns 39
console.log(advice.slice('', 39))