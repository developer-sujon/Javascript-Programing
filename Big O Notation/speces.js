//O(1) space
function sum(arr) {
  let total = 0; //one number

  for (let i = 0; i < arr.length; i) {
    //another number let i =0
    total += arr[i];
  }

  return total;
}
sum([10, 4, 4, 3, 2]);

//O(n) space
function double(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i) {
    newArray.push(arr[i] * 2);
  }

  return newArray;
}
double([1,3,5,7]); //[2,6,10,14]



const name = 'Muhmmad Sujon' //O(n)
const colleague = ['Muhmmad Sujon', 'Akbor', "Omy", "Asif"] //O(n)
const age = 23 //O(1)

const person ={
  name: 'Muhmmad Sujon',
  age: 23,
  address: 'Mehepur 7100, Bangladesh'
} //O(n)