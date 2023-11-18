//https://www.scaler.com/academy/mentee-dashboard/class/132798/assignment/problems/62137/?navref=cl_pb_nv_tb
// Polyfill of setInterval
function main(intervalTime, endTime, message, arr) {
  function mySetInterval(callback, time) {
    /* Create an object, interval, with a property working initialized to true. This object will be used to control the execution 
    of the interval. */
    let interval = {
      working: true,
    };

    /* Define an internal function, setter, which will be responsible for executing the callback function and scheduling the next execution.
    Call setter once initially to start the interval execution.
    */
    function setter() {
      //Inside setter, invoke the callback function.
      callback();

      /* Check the interval.working property. If it is true, schedule the next execution of setter using setTimeout with the specified time 
        interval. */
      if (interval.working) setTimeout(setter, time);
    }

    // Call setter first to start the interval execution.
    setTimeout(setter, time);
    return interval;
  }

  /* To stop the interval execution after the specified endTime, you need to do the following:
    After calling mySetInterval, create a new setTimeout function with a callback that sets i.working to false. 
    This will stop the interval execution. */
  setTimeout(function () {
    i.working = false;
  }, endTime);

  //Calling mySetInterval custom function
  let i = mySetInterval(function () {
    arr.push(message);
  }, intervalTime);
}

/* Solution:
Inside the mySetInterval function, you need to implement the logic to execute the callback function repeatedly at the 
specified time interval until explicitly stopped.

Your implementation of mySetInterval should adhere to the following guidelines:

1. Create an object, interval, with a property working initialized to true. This object will be used to control the execution 
of the interval.
2. Define an internal function, setter, which will be responsible for executing the callback function and scheduling the next execution.
Inside setter, invoke the callback function.
3. Check the interval.working property. If it is true, schedule the next execution of setter using setTimeout with the specified time 
interval.
4. Call setter first to start the interval execution.

After implementing the mySetInterval function, you should use it within the main function to execute the callback function at the 
specified time interval and stop the execution after the given end time.

To stop the interval execution after the specified endTime, you need to do the following:

1. After calling mySetInterval, create a new setTimeout function with a callback that sets i.working to false. This will stop the 
interval execution.
2. The endTime parameter specifies the time, in milliseconds, at which the interval execution should stop. 
*/
