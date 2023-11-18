const fs = require("fs");

/**
 * Promise based fn -> do not take cbs
 * **/

console.log("before");
// task has started when fn is called

// inside the fs library --> we have callback way of reading file (fs.readFile())
// we have also promise way of reading a file --> (fs.promises.readFile())
const promise = fs.promises.readFile("./f1.txt", "utf-8");
/**
 * State of the promise-> pending
 * */
console.log(promise); //Promise { <pending> }
console.log("After");

setTimeout(() => {
  console.log("i after file read");
  console.log(promise); //Promise { 'I am f1\n\n' }
  promise.then((a) => console.log(a)); //I am f1
}, 2000);
