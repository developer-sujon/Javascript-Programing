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

const arr = [
  1, 2, 10, 22, 98, 3, 98, 50, 9, 9, 55, 19, 6, 6, 20, 34, 65, 26, 6, 33,
];

// 9, 6

let fSmall = arr[0];
let sSmall = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (fSmall > arr[i]) {
    sSmall = fSmall;
    fSmall = arr[i];
  } else {
    console.log(3);
    if (sSmall > arr[i] && arr[i] !== fSmall) {
      sSmall = arr[i];
    }
  }
}

console.log({ sSmall, fSmall });
