const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//create new element
//last index
numbers[numbers.length] = 11;
numbers.push(12);
numbers.push(...[70, 80, 98]);
numbers.splice(numbers.length, 0, 13, 4);

//first index
numbers.unshift(5);
Array.prototype.unshift.apply(numbers, [111]);
numbers.unshift(...[2, 9, 32]);

//update array element
//last element update
numbers[numbers.length - 1] = 100;

//first element update
numbers[0] = 1;

//individual element update
const updateIndex = 5;
const updateNumber = 12;
// numbers[5] = 22;

for (let i = 0; i < numbers.length; i++) {
  if (i === 5) {
    numbers[i] = updateNumber;
  }
}

//remove element
//first element
numbers.shift();
delete numbers[0];

//last element
numbers.pop();
delete numbers[numbers.length - 1];

numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

//reset array
// numbers.length = 0;

const numbers1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers1.length; i++) {
  numbers1.pop();
}

console.log("numbers1", numbers1);
