const fs = require("fs");

let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error("some error"));
  }, 2000);

  resolve("some value");

  setTimeout(function () {
    reject(new Error("some error"));
  }, 2000);

  resolve("some value");

  setTimeout(function () {
    reject(new Error("some error"));
  }, 2000);
});

// promises resolved/rejected once in lifetime

/****************** Ex: Q1 ********************/
p.then(null, function (err) {
  console.log(1);
  console.log(err);
});
//

p.catch(function (err) {
  console.log(2);
  console.log(err);
});
//

p.finally(function () {
  console.log("32", 1);
});

/* o/p:
32 1
*/

p.then(
  function (val) {
    console.log("44", val);
  },
  function (err) {
    console.log(err);
  }
);

/* o/p: 
  44 some value
  */

/****************** Ex: Q2 ********************/
/**
 * finally does not take any argumenst -> forwards the argument received
 * finally don't return anything
 * */

p.finally(function () {
  console.log("37", 2);
  // throw new Error("Hello");
  return Promise.resolve("some finally resolve value");
  // return Promise.reject(45);
})
  .finally(function () {
    console.log("37", 2);
    return fs.promises.readFile("f1.txt");
  })
  .then(function (val) {
    console.log("39", val);
  })
  .catch(function (err) {
    console.log("52", err);
  });

/* o/P:
37 2
37 2
39 some value
*/

/****************** Ex: Q3 ********************/
Promise.resolve(1)
  .then(() => 2)
  .then((data) => {
    console.log("54", data);
    return 3;
  })
  .then((value) => {
    console.log(value);
    return value * 3;
  })
  .then(console.log);

/* o/p:
54 2
3
9
*/

Promise.resolve(1)
  .then(() => 2)
  .then((data) => {
    console.log("54", data);
    return 3;
  })
  .then((value) => {
    console.log(value);
    return value * 3;
  })
  .then((value) => Promise.resolve(4))
  .then((value) => console.log(value));

/* o/p:
54 2 
3
4
*/
