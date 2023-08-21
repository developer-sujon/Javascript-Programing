/**
 * 242. Valid Anagram leetcode
 * @description Check to see if two provided strings are anagrams of each other.One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @example Input: s = "anagram", t = "nagaram" Output: true
 * @example Input: s = "rat", t = "car"  Output: false
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const normalizeStrS = s.replace(/[^\w_-]/g, "");
  const normalizeStrT = t.replace(/[^\w_-]/g, "");
  const hashTableS = {};
  const hashTableT = {};

  for (let el of normalizeStrS) {
    hashTableS[el] = (hashTableS[el] || 0) + 1;
  }

  for (let el of normalizeStrT) {
    hashTableT[el] = (hashTableT[el] || 0) + 1;
  }

  for (let el in hashTableS) {
    if (!el in hashTableT || hashTableT[el] !== hashTableS[el]) {
      return false;
    }
  }

  return true;
};

const result = isAnagram("ab", "ab");
console.log(result);
