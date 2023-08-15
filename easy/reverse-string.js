/**
 * string reversal
 * Directions
 * Given a string, return a new string with the reversed
 */

function reverseString(str) {
  let output = "";

  //   for (let el of str) {
  //     output = el + output
  //   }

  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }

  return output;
}

const result = reverseString("Hello World");

console.log(result);
