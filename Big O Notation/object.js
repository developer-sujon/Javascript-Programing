const person = {
  name: "Muhammad Sujon",
  age: 23,
  "1address": "Meherur 7100, Bangladesh",
};

console.log(person.name);
console.log(person["name"]);
console.log(person["1address"]); //invalid key must be accessed by []

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

//accessing element of object // O(1)
console.log(person["name"]);

//adding/inserting element of object // O(1)
person.status = "single";

//removal/delete element of object // O(1)
delete person["1address"];

//searching element of object // O(1)
console.log("age" in person);

//searching element of object // O(n)
for (let key in person) {
  if (key === "age") {
    console.log(true);
  }
  else{
    console.log(false);
  }
}

console.log(person);


//Object.keys() O(n)
//Object.values() O(n)
//Object.entries() O(n)