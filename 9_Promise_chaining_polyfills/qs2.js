//Ex: Qs
Promise.reject(1)
  .catch((err) => {
    console.log("3", err);
    return 10;
  })
  .then((data) => {
    console.log("15", data);
  })
  .catch(console.log);

/* o/p:
3 1
15 10
*/

/***
 * chain -> then -> promise above is resolved
 * catch -> promise of the above is rejected / throw an error
 * if you have mixture and either then returns a value / catch return -> then will executed with the recieved value
 * finally -> finally works in both resolve or reject but  -> when you reject inside a finally then you upcoming catch will be called
 * finally -> does not take any input / if you return either error/ rejected promise -> you need a catch to consume
 *
 * **/

//Ex: Qs
Promise.reject(1)
  .finally((data) => {
    console.log("3", data);
    return Promise.reject("error");
  })
  .catch((error) => {
    console.log(error);
    /* Promise which is pending and undefined.
    because it isn't n error, it will be resolved with undefined value */
  })
  .then((data) => {
    console.log("15", data);
  })
  .catch(console.log);

/* o/p:
3 undefined
error
15 undefined
*/

//Ex: Qs
Promise.resolve(1)
  .finally((data) => {
    console.log("3", data);
    return Promise.reject("error");
  })
  .catch((error) => {
    console.log("7", error);
    // throw 'error2'
  })
  .finally((data) => {
    console.log("11", data);
    let rProm = Promise.resolve(2);
    let thenProm = rProm.then(console.log);
    return thenProm;
  })
  .then((data) => console.log(data))
  .catch(console.log);

/* o/p:
3 undefined
7 error
11 undefined
2
undefined
*/
