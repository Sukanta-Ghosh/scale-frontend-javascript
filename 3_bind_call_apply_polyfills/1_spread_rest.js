/**
 * default parameter
 */
function fn(param1, param2, param3 = "default") {
  console.log("Hi params are ", param1, param2, param3);
}

fn("Hi", "Hello", "Hola");
fn("Hi", "Hello");

/**Note:
 * Spread operator : copies value,ref from on array to another for only first level
 */
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 4, 5, 7];
console.log(Math.max(...arr1, ...arr2));
console.log(Math.max(1, 2, 3, 4, 5, 1, 3, 4, 5, 7));

//Example 1
// assignment operator -> reference remain
arr1 = [1, 2, 3, 4, 5];
// arr2 and arr1 has the same ref
arr2 = arr1; // arr2 is pointing to an address, and arr1 is pointing to that same address.
arr2.pop();
arr2.push(100);
arr2[2] = 200;
console.log("changed array", arr2); //[ 1, 2, 200, 4, 100 ]
console.log("main array", arr1); //[ 1, 2, 200, 4, 100 ]

//Example 2
arr1 = [1, 2, [3, 4], 4, 5];
//spread copies value from one array another array for the first level
let arr2 = [...arr1];
arr2[2][0] = 1000;
arr2.pop();
arr2[2] = 1000;
console.log(arr1, "array 1"); //[ 1, 2, [ 1000, 4 ], 4, 5 ]
console.log(arr2, "array 2"); //[ 1, 2, 1000, 4 ]

//Example 3
arr1 = [1, 2, [3, 4], 4, 5];
// [value,value,ref,value,value]
let arr2 = [...arr1];
arr2[2] = 100;
console.log("orginal arr", arr1); //[ 1, 2, [ 3, 4 ], 4, 5 ]
console.log("updated array", arr2); //[ 1, 2, 100, 4, 5 ]

//Example 4
arr1 = [1, 2, [3, 4], 4, 5];
// [value,value,ref,value,value]
let arr2 = [...arr1];
arr2[2][0] = 100;
console.log("orginal arr", arr1); //[ 1, 2, [ 100, 4 ], 4, 5 ]
console.log("updated array", arr2); //[ 1, 2, [ 100, 4 ], 4, 5 ]

//Example 5 - Object
let person1 = {
  name: "vishal",
  age: 29,
};

let person2 = { ...person1 };
person1.age = 30;
console.log(person1); //{ name: 'vishal', age: 30 }
console.log(person2); //{ name: 'vishal', age: 29 }

//Example 6
let person1 = {
  name: "vishal",
  age: 29,
  address: {
    name: "kv nagar",
    street: "mg road",
    city: "blr",
  },
};

person2 = { ...person1 };
person1.age = 30;
console.log("person1: ", person1);
/* person1:  {name: 'vishal', age: 30,
  address: { name: 'kv nagar', street: 'mg road', city: 'blr' }} */
console.log("person2: ", person2);
/* person2: {name: 'vishal', age: 29,
  address: { name: 'kv nagar', street: 'mg road', city: 'blr' }} */

person1.address.city = "pune";

console.log("person1: ", person1);
/* person1: {name: 'vishal', age: 30,
  address: { name: 'kv nagar', street: 'mg road', city: 'pune' }} */
console.log("person2: ", person2);
/* person2: {name: 'vishal', age: 29,
  address: { name: 'kv nagar', street: 'mg road', city: 'pune' }} */

/*** Note:
 *  Rest -> It is used as paremeter of fn .
 *  use you to collect remianing parameters numbers of params .
 * last attribute.
 * ***/

//Example 1
function fn(param1, ...param2) {
  console.log("Params are ", param1);
  console.log("Rest paramateres", param2);
}

fn("Hi", "Hello");
/* Params are  Hi
Rest paramateres [ 'Hello' ] */

fn("Hi", "Hello", "Hola");
/* Params are  Hi
Rest paramateres [ 'Hello', 'Hola' ] */

fn();
/* Params are  undefined
Rest paramateres [] */

//Example 2
const [firstName, lastName, ...otherInfo] = [
  "virat",
  "kohli",
  "cricketer",
  "rcb",
  "batesman",
  "India",
  "Earth",
];

console.log(otherInfo); //[ 'cricketer', 'rcb', 'batesman', 'India', 'Earth' ]

//Example 3
const { fName, lName, ...others } = {
  fName: "virat",
  lName: "kohli",
  profession: "cricketer",
  iplteam: "rcb",
};

console.log(others); //{ profession: 'cricketer', iplteam: 'rcb' }
console.log(typeof others); //object

//"https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/"
