/**
 * 387. First Unique Character in a String
 * @description Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * @param {string} s
 * @return {number}
 * @example Input: s = "leetcode" Output: 0
 * @example Input: s = "loveleetcode" Output: 2
 * @example Input: s = "aabb" Output: -1
 */
function firstUniqChar(s) {
  const hashTable = {};
  for (let i = 0; i < s.length; i++) {
    hashTable[s[i]] = (hashTable[s[i]] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hashTable[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

const result = firstUniqChar("aabb");
console.log(result);
