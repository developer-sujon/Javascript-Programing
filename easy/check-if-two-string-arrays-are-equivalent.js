/**
 * Is Array same
 * write a function which accepts two arrays and check every value of the first array has it's corresponding in second array
 * The frequency value must be same
 * @example [1, 4, 5, 2], word2 = [2,1, 5, 4] should return true
 * @example ["a", "p", 'h', 'l'], word2 = ["p", "h", 'l', 'e'] should return false
 */

function isSame(arr1, arr2){
    if(arr1.length != arr2.length) return false;
    for(let elm of arr1){
        const index = arr2.indexOf(elm);
        if(index ===-1) return false;
        arr2.splice(index, 1);
        console.log(arr2);
    }
    return true
}

const result = isSame([1, 4, 5, 2],[9,1, 5, 4])
console.log(result);