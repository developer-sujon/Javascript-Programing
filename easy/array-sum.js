/**
 * Adding Sum from an array
 * you have been provide an array of number
 * you have to sum the numbers
 */


function arrSum(arr) {
  //flag variable
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const result = arrSum([10, 30, 19]);

console.log(result);
