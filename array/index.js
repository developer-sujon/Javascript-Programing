// const arr = [22, 98, 45, 09, 55, 19, 20, 34, 65, 26, 33];

// let largestNum = arr[0];
// let smallerNum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largerNum) {
//     largerNum = arr[i];
//   }

//   if (arr[i] < smallerNum) {
//     smallerNum = arr[i];
//   }
// }

// 98, 65

// let lg = arr[0];
// let slg = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (lg < arr[i]) {
//     slg = lg;
//     lg = arr[i];
//   } else {
//     if (slg < arr[i] && arr[i] !== lg) {
//       slg = arr[i];
//     }
//   }
// }

// 9, 6

// let fSmall = arr[0];
// let sSmall = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (fSmall > arr[i]) {
//     sSmall = fSmall;
//     fSmall = arr[i];
//   } else {
//     console.log(3);
//     if (sSmall > arr[i] && arr[i] !== fSmall) {
//       sSmall = arr[i];
//     }
//   }
// }

// const arr1 = [
//   [25, 38, 100, 80, 18, 58, 28, 20, 47, 54],
//   [4, 40, 88, 70, 44, 30, 79, 12, 47, 57],
//   [91, 59, 1, 60, 1, 43, 52, 2, 18, 68],
// ];

// const arr2 = [
//   [56, 90, 77, 97, 58, 51, 19, 23, 50, 33],
//   [32, 61, 13, 47, 26, 19, 83, 70, 64, 82],
//   [51, 56, 80, 13, 36, 95, 81, 93, 98, 8],
// ];

// const result = [];
// let total = 0;

// for (let i = 0; i < arr1.length; i++) {
//   const row = [];

//   for (let j = 0; j < arr1[i].length; j++) {
//     total += arr1[i][j] + arr2[i][j];
//     row.push(arr1[i][j] + arr2[i][j]);
//   }

//   result.push(row);
// }

// console.log(total);
