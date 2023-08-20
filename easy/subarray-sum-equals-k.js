/**
 * 560. Subarray Sum Equals K
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @example Input: nums = [1,1,1], k = 2 Output: 2
 * @example Input: nums = [1,2,3], k = 3 Output: 2
 */
var subarraySum = function (nums, k) {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = (hashTable[nums[i]] || 0) + 1;
  }

  console.log(hashTable);
};

const result = subarraySum([1, 4, 3, 2, 2, 5], 5);
console.log(result);
