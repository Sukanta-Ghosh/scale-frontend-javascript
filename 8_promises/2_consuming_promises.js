const fs = require("fs");
console.log("before");
/***
 * 1. Promise based fn -> takes the input
 * 2. Returns a promise and the value/state of the promise -> promise based fn
 * ***/
var promise = fs.promises.readFile("./f1.txt", "utf-8");

function readFile(filename) {
  return new Promise((resolve, reject) => {
    if (!!filename)
      //read the file
      // read
      resolve(data);
    // code to get error
    reject(err);
  });
}

// if my promise is resolved
promise.then((a) => {
  console.log(promise); //Promise { 'I am f1\n\n' }
  console.log(a, "inside then"); //I am f1 inside then
});

// if my promise is rejected
promise.catch((err) => {
  console.log("inside error"); //
  console.log(promise); //
  console.log(err); //
});

console.log("after");

/**
 * then is an event listener over promise  -> fn when promise is resolved (task is done)
 * **/

const promise = fs.promises.readFile("./f11.txt", "utf-8");

promise.then(function (futureValue) {
  console.log("Data inside the file is " + futureValue);
});
// /***
//  * catch -> is also an event listener on promises -> fn when promise is rejected(You get an erro)
//  * */
promise.catch(function (err) {
  console.log("Error msg: ", err); //Error msg: [Error: ENOENT: no such file or directory, open './f11.txt']
});
// /**
//  * State of the promise-> pending
//  * */
// console.log(promise);
console.log("After");
