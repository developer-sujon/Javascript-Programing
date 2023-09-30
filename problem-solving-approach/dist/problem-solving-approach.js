// Problem: Find the sum of all even numbers from 1 to a given number.

// Step 1: Understand the Problem
// - Restate the problem: We need to find the sum of all even numbers in a given range.
// - Inputs: A positive integer 'n' (the upper limit of the range).
// - Output: The sum of all even numbers from 1 to 'n'.
// - Example: If n is 10, the sum should be 2 + 4 + 6 + 8 + 10 = 30.

// Step 2: Devise a Plan
// - We can start with a sum variable initialized to 0.
// - Then, we iterate through all numbers from 1 to 'n'.
// - For each number, we check if it's even. If it is, we add it to the sum.
// - Finally, we return the sum.

function sumOfEvenNumbers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

// Step 3: Coding
const number = 10;
const result = sumOfEvenNumbers(number);
console.log(`The sum of even numbers from 1 to ${number} is ${result}`);

// Step 4: Testing and Debugging
// - We can test the function with different values of 'n' to ensure it works correctly.
// - Debug any issues that may arise during testing.

// Step 5: Optimization and Refactoring
// - The provided solution is simple and efficient for this problem, so no further optimization is needed.

// Step 6: Documentation
// - Ensure that the code is well-documented with comments explaining the logic and purpose of each part.

// Step 7: Conclusion
// - Reflect on the problem-solving approach used and consider how to apply similar techniques to other challenges.
