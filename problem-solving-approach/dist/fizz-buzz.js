/**
 * 412. Fizz Buzz
 * Given an integer n, return a string array answer (1-indexed) where:
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 * @example Input: n = 3 Output: ["1","2","Fizz"]
 * @example Input: n = 5 Output: ["1","2","Fizz","4","Buzz"]
 * @example Input: n = 15 Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 *
 * @param {number} n
 * @return {string[]}
 */

function fizzBuzz(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz\n";
    } else if (i % 5 === 0) {
      result += "Buzz\n";
    } else if (i % 3 === 0) {
      result += "Fizz\n";
    } else {
      result += i.toString() + "\n";
    }
  }

  return result.trim().split("\n");
}

const result = fizzBuzz(15);

console.log(result);
