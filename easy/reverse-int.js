/**
 * number reversal
 * Given a number, return a new number with the reversed
 */

function reverseNumber(num) {
  const str = num.toString();
  let output = "";

  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }

  if (output[output.length - 1] === "-") {
    output = output.replace(output[output.length - 1], "");
  }

  return Number(output);
}

const result = reverseNumber(-100);

console.log(result);
