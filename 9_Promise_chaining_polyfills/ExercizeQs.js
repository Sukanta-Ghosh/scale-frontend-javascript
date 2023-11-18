/* Ex: QS 1 */
console.log(1);
setTimeout(function () {
  console.log(3);
});
console.log(4);
setTimeout(function () {
  console.log(2);
});
Promise.resolve().then(function () {
  console.log(5);
});
console.log(6);

/* O/P:
1 4 6 5 3 2
*/

/* Ex: QS 2 */
Promise.resolve(1)
  .finally((data) => {
    console.log(data);
    return Promise.reject("error");
  })
  .catch((error) => {
    console.log(error);
    throw "error2";
  })
  .finally((data) => {
    console.log(data);
    return Promise.resolve(2).then((data) =>
      console.log("Promise inside finally", data)
    );
  })
  .then((data) => console.log(data))
  .catch(console.log);

/* O/P:
undefined
error
undefined
Promise inside finally 2
error2
*/

/* Ex: QS 3 */
let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error("some value"));
  }, 2000);

  resolve("some error");

  setTimeout(function () {
    reject(new Error("some value"));
  }, 2000);

  resolve("some error");

  setTimeout(function () {
    reject(new Error("some value"));
  }, 2000);
});

p.then(null, function (err) {
  console.log("inside then 1"); //
  console.log(1); //
  console.log(err); //
});

p.catch(function (err) {
  console.log("inside catch 1");
  console.log(2); //
  console.log(err); //
});

p.finally(function () {
  console.log("inside finally 1"); //inside finally 1
  console.log(1); //1
});

p.finally(function () {
  console.log("inside finally 2"); //inside finally 2
  console.log(2); //2
}).then(function (val) {
  console.log("inside then 2"); //
  console.log(val); //
});

p.then(
  function (val) {
    console.log("inside then 3.1"); //inside then 3.1
    console.log(val); //some error
  },
  function (err) {
    console.log("inside then 3.2"); //
    console.log(err); //
  }
);

/* O/P:
inside finally 1
1
inside finally 2
2
inside then 3.1
some error
inside then 2
some error
*/

/* Ex: QS 4 */
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = Promise.reject(4);

const promiseAll = async () => {
  const group1 = await Promise.all([promise1, promise2]);
  const group2 = await Promise.all([promise3, promise4]);
  return [group1, group2];
};

promiseAll()
  .then(function (val) {
    console.log("Inside then");
    console.log(val);
  })
  .catch(function (error) {
    console.log("Inside catch");
    console.log(error);
  });

/* O/P:
Inside catch
4
*/

/* Ex: QS 5 */
setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

/* O/P:
promise timeout
*/

/* Ex: QS 6 Doubt: */
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});
Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));

/* O/P:
two
*/

/* Ex: QS 7 */
const createPromise = () => Promise.resolve(1);

function func1() {
  createPromise().then(console.log); //1
  console.log(2); //2
}

async function func2() {
  await createPromise();
  console.log(3); //3
}

console.log(4); //4
func1();
func2();

/* O/P:
4
2
1
3
*/

/* Ex: QS 8 */
function resolveAfterNSeconds(n, x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, n);
  });
}

(function () {
  let a = resolveAfterNSeconds(1000, 1);
  a.then(async function (x) {
    let y = await resolveAfterNSeconds(2000, 2);
    let z = await resolveAfterNSeconds(1000, 3);
    let p = resolveAfterNSeconds(2000, 4);
    let q = resolveAfterNSeconds(1000, 5);
    console.log(x + y + z + (await p) + (await q));
  });
})();

/* O/P:
15 after 6 seconds
*/
