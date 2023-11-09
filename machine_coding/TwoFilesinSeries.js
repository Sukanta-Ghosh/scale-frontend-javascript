/* QS: https://www.scaler.com/academy/mentee-dashboard/class/132798/homework/problems/62434/?navref=cl_pb_nv_tb */
function fetchByCb(fileName, cb) {
  setTimeout(function () {
    cb(`content : ${fileName}`);
  }, 100 * Math.random());
}

function twoSeries(file1, file2, ansArray) {
  //write your code here

  function cb1(content) {
    ansArray.push(content);
    // start next task
    fetchByCb(file2, cb2);
  }

  function cb2(content) {
    ansArray.push(content);
    ansArray.push("All files have been read");
  }

  fetchByCb(file1, cb1);
}

//Call twoSeries method
