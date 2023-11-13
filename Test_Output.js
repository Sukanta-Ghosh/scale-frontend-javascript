if (!Object.prototype.sealPolyfill) {
  Object.defineProperty(Object.prototype, "sealPolyfill", {
    value: function () {
      // Check if 'this' is an object
      if (typeof this !== "object" || this === null) {
        throw new TypeError(
          "Object.sealPolyfill can only be called on an object."
        );
      }

      // Iterate over the object's properties
      for (var prop in this) {
        if (Object.prototype.hasOwnProperty.call(this, prop)) {
          Object.defineProperty(this, prop, {
            configurable: false,
          });
        }
      }

      // Prevent new properties from being added to the object
      Object.preventExtensions(this);

      return this;
    },
    configurable: true,
    writable: true,
  });
}
/* 
Solution Approach:


The goal is to replicate the functionality of the Object.seal method using a polyfill called sealPolyfill.
Check if the Object.seal method already exists on the Object.prototype object to avoid overriding it.
Define the sealPolyfill function and add it to the Object.prototype object to make it accessible on all objects.
Within the sealPolyfill function, check if this is a valid object by ensuring it is of type "object" and not null. If it fails this check, throw a TypeError.
Iterate over all properties of the object using a for...in loop.
For each property, use Object.defineProperty to define the property with configurable: false. This makes the property non-configurable, preventing deletion or modification.
After sealing all existing properties, call Object.preventExtensions(this) to prevent any new properties from being added to the object.
Return this to maintain the chaining behavior.
Test the implementation by creating an object and calling sealPolyfill on it. Verify that existing properties cannot be deleted or modified, and new properties cannot be added.
*/
