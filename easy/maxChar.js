/**
 * max characters
 * Given a string, return maximum characters
 */

function maxChar(str) {
  //flag variable
  const charMap = {};
  let maxChar = "";
  let max = 0;
  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return {
    maxChar,
    max,
  };
}

const result = maxChar("apple 11555aa");

console.log(result);
