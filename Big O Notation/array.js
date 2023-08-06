const arr = [2, 4, 8, 5, 9, 1, 6];
// 0  1  2  3  4  5  6

//access by index O(1)
console.log(arr.length - 1);

//adding items/elements of the end of the array O(1)
arr[arr.length - 1] = 23;
arr.push(87);

//remove items/elements of the end of the array O(1)
arr.pop();

//at the beginning of the array adding element O(n)
arr.unshift(90);

//at the beginning of the array removing element O(n)
arr.shift();

//finding elements form the array O(n)
for (let el of arr) {
  const el = arr[i];
  if (el === 5) console.log(el);
}

//forEach, map, filter, reduce, slice, splice, find, findIndex O(n)
