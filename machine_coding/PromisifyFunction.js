/* QS: https://www.scaler.com/academy/mentee-dashboard/class/132768/assignment/problems/62720/?navref=cl_pb_nv_tb */
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve) => {
      function cb(result) {
        resolve(result);
      }

      fn.apply(this, args.concat(cb));
    });
  };
}

//usage
function exampleFn(a, b, cb) {
  cb(a + b);
}

const promisified = promisify(exampleFn);
promisified(5, 15).then((res) => console.log("Inside then", res));
//Output: 20;
