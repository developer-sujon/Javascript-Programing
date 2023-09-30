/**
 * Logs numbers from 1 to 'n' in a linear fashion.
 * @param {number} n - The upper limit for logging numbers.
 */
function linearLog(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// linearLog is a function that takes a single parameter n, representing the upper limit for logging numbers.
// It uses a for loop to iterate from 1 to n and logs each number.
// The time complexity of this code is O(n), as the number of operations increases linearly with the input n.

// Example usage of linearLog with input 12
linearLog(12);

/**
 * Logs numbers from 1 to 'n' in a quadratic fashion.
 * @param {number} n - The upper limit for logging numbers.
 */
function quadraticLog(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
      console.log(i, j);
    }
  }
  console.log("Total operations:", count);
}

// quadraticLog is a function that takes a single parameter n, representing the upper limit for logging numbers in a quadratic fashion.
// It uses nested for loops to iterate from 0 to n twice and logs each pair of numbers.
// The time complexity of this code is O(n^2), as the number of operations increases quadratically with the input n.

// Example usage of quadraticLog with input 3
quadraticLog(3);

/**
 * Logs numbers from 1 to 'n' twice in a linear fashion.
 * @param {number} n - The upper limit for logging numbers.
 */
function linearTwiceLog(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count++;
    console.log(i);
  }
  for (let i = 0; i < n; i++) {
    count++;
    console.log(i);
  }
  console.log("Total operations:", count);
}

// linearTwiceLog is a function that takes a single parameter n, representing the upper limit for logging numbers twice in a linear fashion.
// It uses two separate for loops to log numbers from 0 to n.
// The time complexity of this code is O(n + n) = O(2n) = O(n), as it's still linear with respect to the input n.

// Example usage of linearTwiceLog with input 3
linearTwiceLog(3);

/**
 * Logs all combinations of three numbers from 1 to 'n'.
 * @param {number} n - The upper limit for logging numbers.
 */
function cubicLog(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        count++;
        console.log(i, j, k);
      }
    }
  }
  console.log("Total operations:", count);
}

// cubicLog is a function that takes a single parameter n, representing the upper limit for logging combinations of three numbers.
// It uses three nested for loops to log all combinations of three numbers from 0 to n.
// The time complexity of this code is O(n^3), as the number of operations increases cubically with the input n.

// Example usage of cubicLog with input 2
cubicLog(2);

/**
 * Logs combinations of two sets of numbers, first in a quadratic fashion and then in a linear fashion.
 * @param {number} n - The upper limit for the first set of numbers.
 * @param {number} m - The upper limit for the second set of numbers.
 */
function mixedLog(n, m) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for (let k = 0; k < m; k++) {
    console.log(k);
  }
}

// mixedLog is a function that takes two parameters, n and m, representing the upper limits for the first and second sets of numbers.
// It first logs combinations of two numbers from 0 to n in a quadratic fashion and then logs numbers from 0 to m in a linear fashion.
// The time complexity of this code is O(n^2 + m), as it combines a quadratic and a linear operation.

// Example usage of mixedLog with inputs 3 and 2
mixedLog(3, 2);
