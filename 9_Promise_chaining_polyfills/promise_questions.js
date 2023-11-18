/***
 * What were issued with callbacks -> promises: inversion of control
 *   // cb based async fn -> cb to third party fns -> async fn can call your cb multiple times
 *   // cb but here we send cb to the promise API : promise can be rejected or resolved once in the life time
 * */

let fs = require("fs");

// then
var promise = fs.promises.readFile("f1.txt", "utf-8");
/*** then is an event listner (handler) for a promise when promise state changes to resolved***/

promise.then(function (data) {
  console.log("Hi the data is 15 " + data);
});

promise.then(function (data) {
  console.log("buffer format is 20", data);
});

promise.then(function () {
  console.log("I am not accepting");
});

/****catch is an event listenre (handler) for a promise when promise state changes to reject***/
let promise = fs.promises.readFile("f11.txt", "utf-8");

promise.catch(function (error) {
  console.log("inside catch");
});

promise.catch(function (error) {
  console.log("inside second catch", "no error message");
});

/****
 * then takes two paramater -> both cb fns
 * first parameter -> is compulsary  and that is invoked when your promise is resolved
 * second parameter -> if present called when promise is rejected
 * **/

function scb(data) {
  console.log("The data is from scb " + data);
}
function fcb(error) {
  console.log("he data is from fcb inside catch", error.message);
}

function finallCB1() {
  console.log("I will be called finally finallCB1");
}

function finallCB2() {
  console.log("I will be called finally finallCB2");
}

//reading f1 file
let promise = fs.promises.readFile("f1.txt", "utf-8");

promise.then(scb, fcb); //The data is from scb I am f1
promise.catch(fcb); //
promise.then(null, fcb); //
promise.finally(finallCB1); //I will be called finally finallCB1
promise.finally(finallCB2); ///I will be called finally finallCB2

//reading f11 file
let promise = fs.promises.readFile("f11.txt", "utf-8");

promise.then(scb, fcb); //The data is from fcb inside catch ENOENT: no such file or directory, open 'f11.txt'
promise.then(null, fcb); //The data is from fcb inside catch ENOENT: no such file or directory, open 'f11.txt'
promise.catch(fcb); //The data is from fcb inside catch ENOENT: no such file or directory, open 'f11.txt'

promise.then(
  function (data) {
    console.log("inside then: ", data);
  },
  function (error) {
    console.log("inside catch: ", error);
  }
); //inside catch:  [Error: ENOENT: no such file or directory, open 'f11.txt']

/**
 * promise.catch(fcb) -> promise.then(null, fcb);
 * try catch finally
 *
 * then catch finally
 *
 * then , catch and finally -> event listener -> promise all of them will execute
 * resolve , reject, finally will be called on both the cases
 *
 * */

/***
 * Promise
 * 1. resolve  -> promise with state resolved whatever you pass into it you that value
 * 2. reject  -> promise with state rejected whatever you pass into it as the value
 * **/

//q1
const promise = Promise.resolve("1");

promise.then(function (value) {
  console.log("value", value);
});
promise.catch(function (err) {
  console.log(err); // will not be called in Promise.resolve scenarios
});

//q1.1
var promise1 = Promise.reject("Some error");

promise1.catch(function (err) {
  console.log("90"); //90
  console.log("error", err); //error Some error
});

promise1
  .then(function () {
    console.log("90", err);
  })
  .catch(function (err) {
    console.log("92", err); //92 Some error
  });

promise1
  .then(null, function (err) {
    console.log("90", err);
    // return promise pending, value undefined
    return Promise.reject(4);
  })
  .then(function (err) {
    console.log("92", err);
  })
  .catch((err) => {
    console.log(err, "errr");
  });
/* o/p:
  90 Some error
  4 errr */

//  when you have a second then that is chained to the first then -> value promise
//  received by the second then is return value of the scb / fcb of the first then

/** q2 */
let promise = Promise.resolve(10);

promise
  .then(function (data) {
    console.log("92", data); //92 10
    /* if no return or promise is mentioned then undefined response returned */
    // return promise<pending> undefined
  })
  .then(function (firstThenVal) {
    console.log("113", firstThenVal); //113 undefined
    return 100;
  })
  .then(function (secondThenVal) {
    // 100
    console.log("116", secondThenVal); //116 100
    return fs.promises.readFile("f1.txt", "utf-8");
  })
  .then(function (thirdThen) {
    console.log("120", thirdThen); // 120 i am f1
  });

/** q2.1 */

let promise = Promise.resolve(10);
promise
  .then(function (data) {
    console.log("92", data);
    return Promise.reject(1);
  })
  .catch(function (firstThenVal) {
    console.log("113", firstThenVal);
    return 100;
  })
  .then(function (secondThenVal) {
    console.log("116", secondThenVal);
    return fs.promises.readFile("f1.txt", "utf-8");
  })
  .then(function (thirdThen) {
    console.log("120", thirdThen);
  });

/* O/p: q2.1 */
promise
  .then(function (data) {
    console.log("92", data); // 92 10
    // return Promise<pending> undefined
    return Promise.reject(1);
    // return Promise.reject(1) --> go to catch
    // return 4 , undefined , Promise.resolve(4) --> go to then
  })
  .catch(function (firstThenVal) {
    console.log("113", firstThenVal); //113 1
    return 100;
    // Promise <fulfilled> 100
  })
  .then(function (secondThenVal) {
    console.log("116", secondThenVal); //116 100
    return fs.promises.readFile("f1.txt", "utf-8");
  })
  .then(function (thirdThen) {
    console.log("120", thirdThen); //120 I am f1
  });

/****************** Q3 ********************/

let promise = Promise.resolve(10);
promise
  .then(function (data) {
    console.log("92", data);
    return "hello";
  })
  .catch(function (firstThenVal) {
    console.log("113", firstThenVal);
    return 100;
  })
  .then(function (secondThenVal) {
    console.log("116", secondThenVal);
    return fs.promises.readFile("f1.txt");
  })
  .then(function (thirdThen) {
    console.log("120", thirdThen);
    // return undefined, promise pending
  })
  .catch(function (firstThenVal) {
    console.log("113", firstThenVal);
    return 100;
  });

/* O/P:
  92 10
  116 hello
  120 I am f1
  113 undefined
  */

/***
 * catch -> if it is recreiving a rejected value/ error -> it will take it
 * then -> then will completely ignored
 * and vice versa
 *
 * do not leave a rejected promise openly because that completley halt your code
 * */

/**
 * 1. Eventlistener -> then ,catch , finally
 * 2. Then -> resolved, catch -> reject, finally -> both individually
 * 2.2 -> catch will always accept -> rejection/error and  then -> always accept values/ promises
 * 3. Chaining then/catch -> rejection|Error -> catch/ everything else -> next then will be called
 * 4. no catch code stops executing
 * ***/

/**
 * 1.finally -> do not take anything
 * 2.for values and promises -> it does not returns anything / and neither take anything
 * 3.Rejection -> goes to catch -> and give it the error/ rejection
 *
 * **/

/****************** Q1.1 ********************/
let promise = Promise.reject(10);
promise
  .catch(function (firstThenVal) {
    console.log("113", firstThenVal);
    return 100;
  })
  .then(function (secondThenVal) {
    console.log("116", secondThenVal);
    return fs.promises.readFile("f11.txt"); //f11.txt file is not present
  })
  .catch(function (firstThenVal) {
    console.log("113", firstThenVal);
    return 100;
  })
  .finally(function () {
    console.log("finally");
    return 4;
  })
  .then(function (value) {
    console.log(value, "last then");
  });

/* O/P:
113 10
116 100
113 Error: file not found
finally
100 'last then' 
*/

/****************** Q1.2 ********************/
let promise = Promise.reject(10);
promise
  .catch(function (firstThenVal) {
    console.log("113", firstThenVal);
    return 100;
  })
  .then(function (secondThenVal) {
    console.log("116", secondThenVal);
    return fs.promises.readFile("f11.txt"); //f11.txt file is not present
  })
  .catch(function (firstThenVal) {
    console.log("113", firstThenVal);
    return 100;
  })
  .finally(function () {
    console.log("finally");
    return Promise.reject(4);
  })
  .catch(function (value) {
    console.log(value, "last catch"); // ---> answer
  });

/* O/P:
113 10
116 100
113 Error: file not found
finally
4 last catch
*/

/** Finally is always called either after then or catch
 * Finally doesnt accept any parameter
 * Finally doesnt return anything
 * Finally only return when there is a reject getting called or a error is thrown.
 */

/****************** Q2.1 ********************/
let promise = Promise.resolve(1);

promise
  .finally(() => {
    console.log("first finally");
  })
  .then((data) => {
    console.log("first then", data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 5000);
    });
  })
  .then((data) => {
    console.log("second then", data);
    return data;
  })
  .finally((data) => {
    console.log("second finally", data);
  });

/* O/P:
first finally
first then 1
second then 2
second finally undefined
*/

/****************** Q2.2 ********************/
let promise = Promise.resolve(1);

promise
  .finally(() => {
    console.log("first finally");
    return Promise.reject(4);
  })
  .then((data) => {
    console.log("first then", data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 5000);
    });
  })
  .then((data) => {
    console.log("second then", data);
    return data;
  })
  .finally((data) => {
    console.log("second finally", data);
  });

/* O/P:
first finally
second finally undefined
Uncaught (in promise) 4
*/

/****************** Q3 ********************/
let promise = Promise.resolve(1);
console.log("before");

promise
  .finally(() => {
    console.log("first finally");
  })
  .then((data) => {
    console.log("first then", data);
    return data;
  })
  .then((data) => {
    console.log("second then", data);
    return Promise.reject(4);
  })
  .finally((data) => {
    console.log("second finally", data);
    return Promise.reject(5);
  })
  .catch((e) => {
    console.log(e, "error");
  });

console.log("after");

/* O/P:
before
after
first finally
first then 1
second then 1
second finally undefined
5 error
*/

/****************** Q4 ********************/
let promise = new Promise((res, rej) => {
  console.log("inside promise");
  res(1);
});
console.log(promise);

console.log("before");

promise
  .finally(() => {
    console.log("first finally");
  })
  .then((data) => {
    console.log("first then", data);
    return data;
  })
  .then((data) => {
    console.log("second then", data);
    return data;
  })
  .finally((data) => {
    console.log("second finally", data);
  });

console.log("after");

/* O/P:
inside promise
before
after
first finally
first then 1
second then 1
second finally undefined
*/

// https://bigfrontend.dev/
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-last-challenge
// https://www.javascripttutorial.net/javascript-prototypal-inheritance/
