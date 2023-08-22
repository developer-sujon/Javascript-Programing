/**
 * Sum Zero
 * @description Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
 * @example input [-3, -2, -1, 0, 1, 2, 3] output [−3,3]
 * @example input [-2, 0, 2, 3] output [-2, 2]
 * @example input [1, 2, 3] output undefined
 */

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < 10) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left--;
    }
  }

  return undefined;
}

const result = sumZero([-3, -2, -1, 0, 1, 2, 3]);

console.log(result);
