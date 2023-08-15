/**
 * Is Array same
 * write a function which accepts two arrays and check every value of the first array has it's corresponding in second array
 * The frequency value must be same
 * @example [1, 4, 5, 2], word2 = [2,1, 5, 4] should return true
 * @example ["a", "p", 'h', 'l'], word2 = ["p", "h", 'l', 'e'] should return false
 */

//time complexity O(n * m)
//space complexity O(1)
// function isSame(arr1, arr2){
//     if(arr1.length != arr2.length) return false;
//     for(let elm of arr1){
//         const index = arr2.indexOf(elm);
//         if(index ===-1) return false;
//         arr2.splice(index, 1);
//         console.log(arr2);
//     }
//     return true
// }

//time complexity O(n)
//space complexity O(n + m)

function isSame(arr1, arr2) {
  const hashMap1 = {};
  const hashMap2 = {};

  for (let elm of arr1) {
    hashMap1[elm] = (hashMap1[elm] || 0) + 1;
  }

  for (let elm of arr2) {
    hashMap2[elm] = (hashMap2[elm] || 0) + 1;
  }

  for (let key in hashMap1) {
    if (!key in hashMap2 || hashMap2[key] !== hashMap1[key]) return false;
  }

  return true;
}

const result = isSame([1, 4, 5, 2, 5], [9, 1, 5, 4, 3]);
console.log(result);
