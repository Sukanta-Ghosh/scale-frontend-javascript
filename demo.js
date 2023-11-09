async function nSeries(fileArray, ansArray) {
  for (const file of fileArray) {
    await fetchByPromise(file).then((res) => {
      ansArray.push(res);
    });
  }

  ansArray.push("All files have been read");
}
