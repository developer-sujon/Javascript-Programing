/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let output = "";
  for (let el of s.join("")) {
    output = el + output
  }


  return output.split("");
}


console.log(reverseString(["h","e","l","l","o"]));