/**
 * @name 49. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 * @example Input: strs = ["eat","tea","tan","ate","nat","bat"] Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * @example Input: strs = [""] Output: [[""]]
 * @example Input: strs = ["a"] Output: [["a"]]
 */

/*Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

function groupAnagrams(strs) {
  const hashTable = {};
  const group = [];

  for (let elm of strs) {
    const sortedStrs = elm.split("").sort().join("");
    if (hashTable[sortedStrs]) {
      hashTable[sortedStrs].push(elm);
    } else {
      hashTable[sortedStrs] = [elm];
    }
  }

  for (let elm in hashTable) {
    group.push(hashTable[elm]);
  }

  return group;
}

const result = groupAnagrams(["a"]);

console.log(result);
