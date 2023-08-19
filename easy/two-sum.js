/**
 * Given an array of integers nums and an integer target
 * return indices of the two    numbers such that they add up to target.
 * @example [2,7,11,15], target = 9 --> [0,1]
 * @example [3,2,4], target = 6 --> [1,2]
 * @example [3,2,6], target = 7 --> []
 */
//time complexity O(n^2)
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

function twoSum(nums, target) {
  const hashTable = {}; // {11:0, 5:1, 2:2, 7:3} target = 9
  for (let i = 0; i < nums.length; i++) {
    const want = target - nums[i]; // 9 - 11 = -2, 9-5 = 2, 9-2 = 7, 9-7 = 2
    if (want in hashTable) return [want, i];
    console.log(hashTable);
    hashTable[nums[i]] = i;
  }
}

// 0 7
// 1 2
// 2 -2
// 3 -6

const result = twoSum([11, 5, 2, 7], 9);

console.log(result);
