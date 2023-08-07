//count the characters
//input - string "Hello" output - {h: 1, e:1, l:2, o:1}

//solution => 1
function characterCount(str) {
  //creating a object for tracking the frequency of elements
  const hasMap = {};

  //generalize the case
  const generalizeString = str.toLowerCase();

  //looping the input
  for (let i = 0; i < generalizeString.length; i++) {
    const character = generalizeString[i];

    //if there any space ignore it
    if (character === " ") continue; //ignore

    //check the element exists on the object increment the exiting the count value
    //if not exists assign the value 1

    //conditional or operator
    //   hasMap[character] = (hasMap[character] ||0) +1

    //ternary
    character in hasMap
      ? (hasMap[character] = hasMap[character] + 1)
      : (hasMap[character] = 1);

    //   if (character in hasMap) {
    //     hasMap[character] = hasMap[character] + 1;
    //   } else {
    //     hasMap[character] = 1;
    //   }
  }

  return hasMap;
}

//solution => 2
function countCharacters(input) {
  const charCount = {};

  for (const char of input.toLowerCase()) {
    if (char.match(/[a-z]/)) {
        charCount[char] = (charCount[char] || 0) + 1;
    }else{

        charCount['char'] = (charCount['char'] || 0) + 1;
    }
  }

  return charCount;
}

console.log(countCharacters("Hdello"));
