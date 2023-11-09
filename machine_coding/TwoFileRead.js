function fetchByPromise(fileName) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`content : ${fileName}`);
    }, 100 * Math.random());
  });
}
/* Two Files in Series by Promise
QS: https://www.scaler.com/academy/mentee-dashboard/class/132768/homework/problems/62771/?navref=cl_pb_nv_tb */

function twoSeries(file1, file2, ansArray) {
  fetchByPromise(file1).then((res) => {
    ansArray.push(res);
    fetchByPromise(file2)
      .then((res) => {
        ansArray.push(res);
      })
      .then(() => {
        ansArray.push("All files have been read");
      });
  });
}

/* Two Files in Series using await
QS: https://www.scaler.com/academy/mentee-dashboard/class/132738/assignment/problems/63289/?navref=cl_pb_nv_tb */
async function twoSeries(file1, file2, ansArray) {
  try {
    // Read the content of file1 and add it to ansArray
    const content1 = await fetchByPromise(file1);
    ansArray.push(content1);

    // Read the content of file2 and add it to ansArray
    const c = await fetchByPromise(file2);
    ansArray.push(content2);

    // Add the final message to ansArray
    ansArray.push("All files have been read");
  } catch (error) {
    // Handle any errors that may occur during file reading
    console.error("Error:", error);
  }
}

/* N Files in Series using await
QS: https://www.scaler.com/academy/mentee-dashboard/class/132738/homework/problems/63290/?navref=cl_pb_nv_tb */
async function nSeries(fileArray, ansArray) {
  for (const file of fileArray) {
    await fetchByPromise(file).then((res) => {
      ansArray.push(res);
    });
  }

  ansArray.push("All files have been read");
}
