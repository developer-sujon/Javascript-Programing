/**
 * 4.Find Maximum Number in an Array
 * Given an array of numbers, find and return the maximum number.
 *
 * @param {number[]} numbers - An array of numbers.
 * @return {number} - The maximum number in the array.
 */
function max(numbers) {
  //flag variable
  let result = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (result < numbers[i]) {
      result = numbers[i];
    }
  }

  return result;
}

/**
 * 5.Find Minimum Number in an Array
 * Given an array of numbers, find and return the minimum number.
 *
 * @param {number[]} numbers - An array of numbers.
 * @return {number} - The minimum number in the array.
 */
function min(numbers) {
  //flag variable
  let result = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (result > numbers[i]) {
      result = numbers[i];
    }
  }

  return result;
}

const maximum = max([15, 5, 90, 4]);
const minimum = min([15, 3, 5, 90, 4]);

console.log(maximum);
console.log(minimum);
