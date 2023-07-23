//Big(O)
//how numbers of operations increase/relates with input
//Best case (omega)
//average case (O)

// linear 
// Big(O) = O(n)
// 2n = O(n)

// function log (n){
//     let count = 0;
//     for (let i =0; i< n; i++){
//         count++;
//         console.log(i);
//     }
//     console.log(count);
// }

// log 12
// 3^2 = 9
// 4^2 = 16
// Big(O) = O(n^2) Quadratic

// function log (n){
//     let count = 0;
//     for (let i =0; i< n; i++){
//         for(let j = 0; j < n; j++){
//             count++;
//             console.log(i,j);
//         }
        
//     }
//     console.log(count);
// }

//O(n) + O(n) = O(2n) = O(n)

// function log (n){
//     let count = 0;
//     for (let i =0; i< n; i++){
//         count++
//         console.log(i);
//     }

//     for (let i =0; i< n; i++){
//         count++
//         console.log(i);
//     }
//     console.log(count);
// }

//O(n * n * n) = O(n^3)

// function log (n){
//     for (let i =0; i< n; i++){
//         for (let j =0; j< n; j++){
//             for (let k =0; k< n; k++){
//                 console.log(i, j, k);
//             }
//         }
//     }
// }

//O(n^2 + n) = O(n^2)

// function log (n){
//     for (let i =0; i< n; i++){
//         for (let j =0; j< n; j++){
//             console.log(i, j);
//         }
//     }

//     for (let k =0; k< n; k++){
//         console.log(k);
//     }
// }

//Big(O) = O(1) = constant

function add (a, b, c){
    console.log(a + b + c);
}

console.log(add(4,3,2));