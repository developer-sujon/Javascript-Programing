/**
 * 6. Number Reversal
 * Given a number, return a new number with the characters reversed.
 *
 * @param {string} inputString - The input string to be reversed.
 * @return {string} - The reversed string.
 */

function maxCheaters(inputString) {
  const hashMap = {};
  let maxChar = "";
  let maxCount = 0;

  for (str of inputString) {
    hashMap[str] = (hashMap[str] || 0) + 1;
  }

  for (el in hashMap) {
    if (hashMap[el] > maxCount) {
      maxCount = hashMap[el];
      maxChar = el;
    }
  }
  return maxChar;
}

function maxCheaters(inputString) {
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    let count = 0;

    for (j = 0; j < inputString.length; j++) {
      if (char === inputString[j]) {
        count++;
      }
    }

    if (maxCount < count) {
      maxCount = count;
      maxChar = char;
    }
  }

  return maxChar;
}

const result = maxCheaters("hello world");

console.log(result);
