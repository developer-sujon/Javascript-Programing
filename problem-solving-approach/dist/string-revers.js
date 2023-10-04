/**
 * 6. String Reversal
 * Given a string, return a new string with the characters reversed.
 *
 * @param {string} inputString - The input string to be reversed.
 * @return {string} - The reversed string.
 */

function stringRevers(inputString) {
  //flag variable
  let result = "";

  // Split the string into an array of characters, reverse it, and join it back into a string.
  // string.split("").reverse().join("")

  for (let i = inputString.length - 1; i >= 0; i--) {
    result += inputString[i];
  }

  return result;
}

const result = stringRevers("sujon");

console.log(result);
