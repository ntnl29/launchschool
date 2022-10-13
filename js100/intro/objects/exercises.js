/* exercise 1
Given the following code, how can you access the name of the person?
*/

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person.name);
console.log(person['name']);

/* exercise 3
Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:
*/

let myArray = {
  0: 'my',
  1: 'name',
  2: 'is',
  3: 'baller',
  length: 4
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

/* exercise 4 */

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let newObj = Object.keys(obj);
// let capKeys = newObj.map((key) => key.toUpperCase());
// console.log(capKeys);

/* exercise 5
Create a new object named myObj that uses myProtoObj as its prototype.
*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj.foo);
console.log(myObj.bar);

/* exercise 7
Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:
*/

myObj.qux = 3;
console.log(myObj);

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  // hasOwnProperty to iterate only through object's own properties
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}

// exercise 8
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, arr) {
  let destinationObject = {};
  if (arr) {
    arr.forEach(function(key) {
      destinationObject[key] = obj[key];
    });
    return destinationObject;
  } else {
    return Object.assign(destinationObject, obj);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

/* exercise 11
Write some code to replace the value 6 in the following object with 606
*/

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;
console.log(obj);