// O(1) space - Constant space, as it uses a fixed amount of memory regardless of the input size.
function sum(arr) {
  let total = 0; // Uses a single variable, which is constant space.

  for (let i = 0; i < arr.length; i) {
    // Uses only a loop control variable, which is constant space.
    total += arr[i];
  }

  return total;
}

sum([10, 4, 4, 3, 2]);

// O(n) space - Linear space, as it creates a new array whose size depends on the input size.
function double(arr) {
  let newArray = []; // Creates a new array, consuming space proportional to input size.

  for (let i = 0; i < arr.length; i) {
    newArray.push(arr[i] * 2); // Each element pushed into the new array consumes space.
  }

  return newArray;
}

double([1, 3, 5, 7]); //[2,6,10,14]

const name = "Muhmmad Sujon"; // O(1) space - Constant space, as it's a fixed-size string.
const colleague = ["Muhmmad Sujon", "Akbor", "Omy", "Asif"]; // O(n) space - Linear space, as it depends on the number of elements in the array.
const age = 23; // O(1) space - Constant space, as it's a single variable.

const person = {
  name: "Muhmmad Sujon",
  age: 23,
  address: "Mehepur 7100, Bangladesh",
}; // O(n) space - Linear space, as it depends on the number of properties in the object.
