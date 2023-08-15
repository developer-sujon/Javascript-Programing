/**
 * Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz" For numbers which are multiples of both three and five print "FizzBuzz"
 */

function fuzzBuzz(n){
    let arr = []

    for(let i = 1; i <=n; i++) {
        if(i % 5 ===0 && i % 3 ===0 ){
            arr.push('Fizz')
        }else if(i % 5 ===0){
            arr.push('Buzz')
        }else if(i % 3 ===0){
            arr.push('FizzBuzz')
        }else{
            arr.push(i.toString())
        }
    }

    return arr
} 

const result = fuzzBuzz(100)

console.log(result);