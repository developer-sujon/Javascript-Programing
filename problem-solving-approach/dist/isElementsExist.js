//check the element of first array and 2nd array
//input - array ["a", "b", "c"], array2 ["y", "o"] output - false
//input - array ["l", "k", "m"], array2 ["y", "x", 'g',"k"] output - true

//is elements exist
//return true
//otherwise false

//time complexity O(n * m)
//space complexity O(1)
function isElementsExist(arr1, arr2) {
  // looping the arr1
  // for(let el of arr1) {
  //     //check if element exists in 2nd array then return true
  //     if(arr2.includes(el)){
  //         return true;
  //     }else{
  //         //otherwise return false
  //         return false;
  //     }
  // }

  //flag variable
  // let exist = false;
  //   for (let el of arr1) {
  //     if (arr2.includes(el)) {
  //       exist = true;
  //     } else {
  //       exist = false;
  //     }
  //   }

  //flag variable
  //time complexity O(n) 
  //space complexity O(n)
  const frequencyCounter = {}
  for(let el of arr1) {
    frequencyCounter[el]=true
  }

  for(let el of arr2) {
    if(el in frequencyCounter){
      return true
    }
  }
}

console.log(isElementsExist(["l", "k", "m"], ["y", "x", "g", "k"]));
