const arr = [2, 4, 8, 5, 9, 1, 6];
// 0  1  2  3  4  5  6

// Accessing an element by index is O(1)
console.log(arr[6]); // This will print the last element (6th index)

// Adding items to the end of the array is O(1)
arr[arr.length] = 23; // Equivalent to arr.push(23)
arr[arr.length] = 87; // Equivalent to arr.push(87)

// Removing items from the end of the array is O(1)
arr.length--; // Equivalent to arr.pop()

// Adding an element at the beginning of the array is O(n)
// All existing elements need to be shifted to make room for the new element.
arr.unshift(90);

// Removing an element from the beginning of the array is O(n)
// All remaining elements need to be shifted after removing the first element.
arr.shift();

// Finding elements in the array with a loop is O(n)
for (let i = 0; i < arr.length; i++) {
  const el = arr[i];
  if (el === 5) console.log(el);
}

// Operations like forEach, map, filter, reduce, slice, splice, find, findIndex are typically O(n)
