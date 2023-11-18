/* The purpose of this function is to create a trap that prevents access 
to private data of an object. */

function makeTrap(userObj) {
  /* Declare a variable named handler and assign it an object with a get method. 
  This method will be used to intercept property access. */
  let handler = {
    /* In the get method, define three parameters: target, prop, and receiver. 
    These parameters represent the target object, the accessed property, and the proxy object, respectively. */
    get: function (target, prop, receiver) {
      /* check if the accessed property is equal to "private" */
      if (prop === "private") {
        return "Access not granted";
      }
      // If the property is not "private", allow access to the property using the Reflect.get(...arguments) method.
      //This method retrieves the property value from the original object.
      else {
        return Reflect.get(...arguments);
      }
    },
  };

  /* Outside the handler object, return a new Proxy object. Pass the userObj as the target and the handler object as the handler 
  argument. This creates a proxy that wraps the userObj and applies the defined behavior. */
  return new Proxy(userObj, handler);
}

//usage
let userObj = {
  private: {
    dob: "12/3/4",
  },
  public: {
    name: "Anas",
  },
};

let p = makeTrap(userObj);
console.log(p.private);
console.log(p.public);
/* O/P:
Access not granted
{name: 'Anas'}
*/

/* Qs: https://www.scaler.com/academy/mentee-dashboard/class/132816/assignment/problems/63548/?navref=cl_pb_nv_tb

Solution Approach: 

To complete the makeTrap function, follow these steps:
---------------------------------------------------------
1. Declare a variable named handler and assign it an object with a get method. This method will be used to intercept property access.

2. In the get method, define three parameters: target, prop, and receiver. 
These parameters represent the target object, the accessed property, and the proxy object, respectively.

3. Inside the get method, check if the accessed property is equal to "private". You can use an if statement for this comparison.

4. If the property is "private", return the string "Access not granted". This means that accessing the private data is not allowed.

5. If the property is not "private", allow access to the property using the Reflect.get(...arguments) method. 
This method retrieves the property value from the original object.

6. Outside the handler object, return a new Proxy object. Pass the userObj as the target and the handler object as the handler 
argument. This creates a proxy that wraps the userObj and applies the defined behavior.

7. Test the solution by executing the provided code. Create a userObj object with private and public properties. 
Call the makeTrap function, passing the userObj as an argument. Assign the returned proxy to a variable, such as p.

8. Use console.log to print p.private and p.public to the console. Verify that p.private returns "Access not granted", 
while p.public returns the value of the public property from the original userObj.

By following this approach, you can successfully implement the makeTrap function and ensure that it returns a Proxy object that 
traps the object, preventing direct access to its private data. 
*/
