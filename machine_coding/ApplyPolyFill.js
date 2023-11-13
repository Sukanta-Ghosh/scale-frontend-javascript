/* Note: Apply Polyfill 
Qs: https://www.scaler.com/academy/mentee-dashboard/class/107900/homework/problems/61143/?navref=cl_pb_nv_tb

applyPolyfill arguments:
-------------------------
1. fn - A function on which apply method needs to be polyfilled.
2. context - The value of this to be used when calling the function.
3. args - An array of arguments to be passed to the function.
*/
function applyPolyfill(fn, context, args) {
  // Check if the fn is a function
  if (typeof fn !== "function") {
    throw new TypeError("fn must be a function");
  }

  // Set the context if it's null or undefined
  if (context == null) {
    context = window;
  }

  // Create a unique property on the context object to store the function
  const uniqueProp = Symbol("applyPolyfill");
  context[uniqueProp] = fn;

  // Call the function with the given context and arguments
  const result = context[uniqueProp](...args);

  // Delete the unique property from the context object
  delete context[uniqueProp];

  // Return the result
  return result;
}
