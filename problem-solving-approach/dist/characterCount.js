/**
 * Count Characters in a String
 * @description You are given a string s consisting of lowercase and/or uppercase English letters. Your task is to write a js function, count_characters(s: str) -> dict, to count the occurrence of each character in the string and return the results as a dictionary.
 * @example input - string "Hello" output - {h: 1, e:1, l:2, o:1}
 */

//Solution => 1
function characterCount(str) {
  // Creating an object for tracking the frequency of elements
  const hasMap = {};

  // Generalize the case (convert to lowercase)
  const generalizeString = str.toLowerCase().replace(/[,!]/g, "");

  // Loop through the input string
  for (let i = 0; i < generalizeString.length; i++) {
    const character = generalizeString[i];

    // Ignore spaces
    if (character === " ") continue;

    // Check if the character exists in the object and update its count
    // If it doesn't exist, initialize the count to 1
    hasMap[character] = hasMap[character] ? hasMap[character] + 1 : 1;

    //ternary
    //  character in hasMap
    //  ? (hasMap[character] = hasMap[character] + 1)
    //  : (hasMap[character] = 1);

    //   if (character in hasMap) {
    //     hasMap[character] = hasMap[character] + 1;
    //   } else {
    //     hasMap[character] = 1;
    //   }
  }

  return hasMap;
}

//Solution => 2
function countCharacters(input) {
  // Remove commas, exclamation marks, and spaces from the input
  // const cleanedInput = input.replace(/[,! ]/g, "");

  // Initialize an object to store character counts
  const charCount = {};

  // Loop through each character in the cleanedInput string
  for (const char of input.toLowerCase()) {
    // Check if the character is a lowercase letter
    if (char.match(/[a-z]/)) {
      // Increment the count for lowercase letters
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  return charCount;
}

// Test the function with an example
const inputString = "Hel   lo, World!";
console.log(countCharacters(inputString)); // Output: { h: 1, e: 1, l: 2, o: 1 }
