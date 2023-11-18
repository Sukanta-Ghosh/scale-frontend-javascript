/** Note: setTimeout -> clearTimeout */
console.log("Before");

function cb() {
  console.log("SetTimout cb has been called");
}
const timerID = setTimeout(cb, 1000);

console.log("AFter");

function canceller() {
  console.log("Cancelling the timeout");
  clearTimeout(timerID); // this line dont make sense. our timeout finished before clearing
}
setTimeout(canceller, 2000);
/*************************************/

/** Note: setInterval, clearInterval */
console.log("Before");
function cb() {
  console.log("Interval called"); // how many times this will be printed
}
const timerId = setInterval(cb, 1000);
/**
 * after 1 sec - console
 * after 1 sec - console
 * after 1 sec - console
 * after 1 sec - console
 * after 1 sec - will console come or not
 */
function cancelInterval() {
  console.timeEnd();
  console.log("cancelling the interval timer");
  clearInterval(timerId);
}

console.time();
setTimeout(cancelInterval, 5000);

console.log("after");

/* O/P:
Before
after
Interval called
Interval called
Interval called
Interval called
default: 5.002s
cancelling the interval timer
*/

//settimeout - after the given time it will run, it can be more than the time given
