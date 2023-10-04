/**
 * 6. Number Reversal
 * Given a number, return a new number with the characters reversed.
 *
 * @param {number} inputNumber - The input number to be reversed.
 * @return {number} - The reversed number.
 */

function numberRevers(inputNumber) {
  let stringInput = inputNumber.toString();

  //flag variable
  let result = "";

  for (let i = stringInput.length - 1; i >= 0; i--) {
    result = result + stringInput[i];
  }

  if (result[stringInput.length - 1] === "-") {
    // result = result.replace(result[stringInput.length - 1], "");
    result = result.slice(0, stringInput.length - 1);
  }

  return result;
}

const result = numberRevers(-12345);

console.log(result);
