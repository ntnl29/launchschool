// Practice Problem 6

let arr = [1, 2, 3, 4, 5];
console.log(arr.fill(1, 1, 5));
console.log(arr);

// Practice Problem 8

/* PEDAC
Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

input: array
output: new object
rules:
  explicit:
    - names are keys in object
    - values are the positions in the array

Algorithim:
  - declare a new empty object
  - use array iteration method to convert each element to an object as the key
  - assign its respective index position as the value
  - return the result object
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintObj = [];

flintstones.forEach((string, index) => {
  flintObj[string] = index;
});

console.log(flintObj);

// Practice Problem 9

/* PEDAC

Add up all of the ages from the Munster family object

input: object
output: number
rules:
  explicit:
    - add all numbers stored as values in the input object

Alorithim:
- Declare new variable to store result
- Use Object.values to accumulate numbers to result
- return result

*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// let agesTotal = Object.values(ages).reduce((total, age) => total + age);

let agesTotal = 0;
Object.values(ages).forEach(age => agesTotal += age);

console.log(agesTotal);

// Practice Problem 10