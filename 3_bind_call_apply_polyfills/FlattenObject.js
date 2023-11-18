//Flatten object
function flattenObject(ob) {
  var toReturn = {};

  for (var i in ob) {
    if (typeof ob[i] == "object" && ob[i] !== null) {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        toReturn[i + "." + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
}

/* Example */
let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
    postCodes: {
      firstBlock: 10,
      secondBlock: 12,
    },
  },
};

//O/P:
person = {
  firstName: "John",
  lastName: "Doe",
  "address.street": "North 1st street",
  "address.city": "San Jose",
  "address.state": "CA",
  "address.country": "USA",
  "address.postCodes.firstBlock": 10,
  "address.postCodes.secondBlock": 12,
};

/* Qs: https://www.scaler.com/academy/mentee-dashboard/class/132840/assignment/problems/61624/?navref=cl_pb_nv_tb
To solve the problem of flattening nested objects, you can use a recursive approach. Here’s an outline of the solution approach:

Create a function called flattenObject that takes an obj parameter representing the input object.

Inside the flattenObject function, initialize an empty object called flattenedObj to store the flattened key-value pairs.

Iterate over the keys of the input object using a for...in loop.

For each key in the loop, check if the value associated with that key is an object and is not null using the typeof operator. 
If it is an object, recursively call the flattenObject function on that value and assign the result to a variable called nestedFlattenedObj.

If the value is not an object, assign the key-value pair as is to the flattenedObj.

If nestedFlattenedObj is not undefined, iterate over its keys using another for...in loop.

For each key in the nested object, create a new key for the flattenedObj by concatenating the current key with a dot 
notation using the current key from the outer loop.

Assign the value associated with the nested key in nestedFlattenedObj to the new key in flattenedObj.

After the loops, return the flattenedObj.

By recursively traversing the nested objects and creating new keys using dot notation, this solution approach will flatten 
the input object.

Remember to handle the base case where the input object is not an object or is null, and in that case, return the input object itself. 
*/
