/**
 * Write a function that returns the number of vowels
 * used in a string. I Vowels are the characters 'a', 'e' 'i', 'o', and 'u'.
 * @example vowels ('Hi There!') --> 3
 * @example vowels ('Why do you ask?') --> 4
 * @example vowels ('Why?') --> 0
 */

function vowelsCount(str) {
  //flag variable
  let count = 0;

  for (let char of  str.toLowerCase()) {
    if (char.match(/[a,e,i,o,u]/)) {
      count++;
    }
  }

  return count++;
}

const result = vowelsCount("Hi There!");

console.log(result);
