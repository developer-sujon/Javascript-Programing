/**
 * 3. Sum of Numbers in an Array
 * Given an array of numbers, calculate and return their sum.
 *
 * @param {number[]} numbers - An array of numbers to be summed.
 * @return {number} - The sum of the numbers in the array.
 */

function arraySum(numbers) {
  //flag variable
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const result = arraySum([15, 5, 4]);

console.log(result);
