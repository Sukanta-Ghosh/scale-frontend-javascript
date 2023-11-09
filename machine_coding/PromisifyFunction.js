/* QS: https://www.scaler.com/academy/mentee-dashboard/class/132768/assignment/problems/62720/?navref=cl_pb_nv_tb */
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve) => {
      function cb(result) {
        resolve(result);
      }
      a;

      fn.apply(this, args.concat(cb));
    });
  };
}
