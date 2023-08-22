/**
 * Sum Zero
 * @description Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
 * @example input [-3, -2, -1, 0, 1, 2, 3] output [−3,3]
 * @example input [-2, 0, 2, 3] output [-2, 2]
 * @example input [1, 2, 3] output undefined
 */

// left = 0, right=22, sum=19
// left = 0, right=9, sum=7
// left = 0, right=4, sum=1
// left = 0, right=-7, sum=-10
// left = 1, right=-7, sum=-10

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      console.log(sum);
      left++;
    }
  }

  return undefined;
}

const result = sumZero([-3, -7, 4, 9, 22]);

console.log(result);
