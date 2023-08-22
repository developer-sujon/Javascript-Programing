/**
 * 217. Contains Duplicate Leetcode
 * @param {number[]} nums
 * @return {boolean}
 */

// Write a function called containsDuplicate
// which accepts a array of integers. • The function should return true if there is
// any duplicates and false if there is no
// duplicates

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function (nums) {
  nums.sort();
  let left = 0;

  while (left < nums.length) {
    if (nums[left] === nums[left + 1]) {
      return true;
    }
    left++;
  }

  return false;
};

const result = containsDuplicate([2, 7, 2, 3, 2]);

console.log(result);
