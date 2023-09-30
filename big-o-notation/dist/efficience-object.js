const person = {
  name: "Muhammad Sujon",
  age: 23,
  "1address": "Meherur 7100, Bangladesh",
};

// Accessing an element of an object by key is O(1)
console.log(person.name); // Using dot notation
console.log(person["name"]); // Using bracket notation

// Accessing an element with a key that contains special characters must use bracket notation
console.log(person["1address"]);

// Looping through all keys and values in an object is O(n)
for (let key in person) {
  console.log(key); // Print the keys
  console.log(person[key]); // Print the values
}

// Accessing an element of an object by key is O(1)
console.log(person["name"]);

// Adding/inserting an element to an object is O(1)
person.status = "single";

// Removal/deleting an element from an object is O(1)
delete person["1address"];

// Searching for an element in an object using the 'in' operator is O(1)
console.log("age" in person); // Returns true if the key exists

// Searching for an element in an object by looping through its keys is O(n)
for (let key in person) {
  if (key === "age") {
    console.log(true);
  } else {
    console.log(false);
  }
}

console.log(person);

// Object.keys() returns an array of keys from an object, which is O(n)
const keys = Object.keys(person);

// Object.values() returns an array of values from an object, which is O(n)
const values = Object.values(person);

// Object.entries() returns an array of key-value pairs from an object, which is O(n)
const entries = Object.entries(person);
