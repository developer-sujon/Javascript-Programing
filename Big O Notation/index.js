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

// function add (a, b, c){
//     console.log(a + b + c);
// }


//O(1) best case
//O(n) worst case

// function log (n){
//     for(let i =1; i <= Math.max(5, n); i++){
//         console.log(i);
//     }
// }

//O(n+m)

function log (a, b){
    for(let i =1; i <=a; i++){
        console.log(i);
    }

    for(let i =1; i <=b; i++){
        console.log(i);
    }
}

log(5, 10)

//Efficiency O(log n) - O(1) - O(n) - O(n log n) - O(n^2)