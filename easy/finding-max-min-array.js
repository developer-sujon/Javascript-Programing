/**
 * you have been provided an array of number
 * you have to maximum number
 */

function min(arr) {
  let min = arr[0];
  for (let el of arr) {
    if (el < min) {
      min = el;
    }
  }
  return min;
  // Math.min(...arr)
}

function max(arr) {
  let max = arr[0];
  for (let el of arr) {
    if (el > max) {
      max = el;
    }
  }
  return max;

  // Math.max(...arr)
}

const minResult = min([12, 39, 65, 87, 54]);
const maxResult = max([12, 39, 65, 87, 54]);

console.log(maxResult);
