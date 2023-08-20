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
  const normalizeStrS = s.replace(/[^\w_-]/g, "");
  const normalizeStrT = t.replace(/[^\w_-]/g, "");
  const hashTableS = {};
  const hashTableT = {};

  for (let el in normalizeStrS) {
    hashTableS[normalizeStrS[el]] = (hashTableS[normalizeStrS[el]] || 0) + 1;
  }

  for (let el in normalizeStrT) {
    hashTableT[normalizeStrT[el]] = (hashTableT[normalizeStrT[el]] || 0) + 1;
  }

  for (let el in hashTableS) {
    if (!hashTableS[el] in hashTableT || hashTableS[el] !== hashTableT[el]) {
      return false;
    }
  }

  return true;
};

const result = isAnagram("rice", "ecar");
console.log(result);
