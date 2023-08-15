/**
 * Given an array and chunk size, divide the array into many sub arrays
 * where each subarray is of length size
 * @example chunk ([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
 * @example chunk ([1, 2, 3,4,5], 2) --> [[ 1, 2], [3, 4], [5]]
 * @example chunk ([1, 2, 3, 4,4,5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * @example chunk ([1, 2, 3, 4,4,5, 6, 7, 8], 10) --> [[1, 2, 3, 4,4,5, 6, 7, 8]]
 */

// function chunkingArray(array, chunkSize) {
//   const chunked = [];

//   for (let elm of array) {
//     const last = chunked[chunked.length - 1];
//     if (last && last.length < chunkSize) {
//       last.push(elm);
//     } else {
//       chunked.push([elm]);
//     }
//   }

//   return chunked
// }

function chunkingArray(array, chunkSize) {
    const chunkedArray = [];
    let index = 0;
    while(index < array.length) {
        const sliceArr = array.slice(index, index + chunkSize);
        chunkedArray.push(sliceArr);
        index += chunkSize;
    }

    return chunkedArray;
}

const result = chunkingArray([1, 2, 3, 4, 8], 2);

console.log(result);
