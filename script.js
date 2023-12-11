//your JS code here. If required.
// Create an object called student with a property called name
const student = {
  name: "John",
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Now you can use the getKeys() method on any object
const keys = student.getKeys();
console.log(keys); // Output: ["name"]

