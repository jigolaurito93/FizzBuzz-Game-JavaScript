var output = [];
var count = 1

// function fizzBuzz() {
    
//     // If solution is divisible by 3 and 5
//     if (count % 3 === 0 && count % 5 === 0){
//         output.push('FizzBuzz');

//     // If solution is divisible by 5
//     } else if (count % 5 === 0){
//         output.push('Buzz')

//     // If solution is divisible by 3
//     } else if (count % 3 === 0){
//         output.push('Fizz')
//     } else {
//         output.push(count)
//     }
//     count += 1;
//     console.log(output)
// }

// fizzBuzz()

//  USING WHILE LOOP


// function fizzBuzz() {
//     while (count <= 100){

        
//         // If solution is divisible by 3 and 5
//     if (count % 3 === 0 && count % 5 === 0){
//         output.push('FizzBuzz');

//     // If solution is divisible by 5
//     } else if (count % 5 === 0){
//         output.push('Buzz')

//     // If solution is divisible by 3
//     } else if (count % 3 === 0){
//         output.push('Fizz')
//     } else {
//         output.push(count)
//     }
//     count += 1;
    
//     } console.log(output)
// }

// fizzBuzz();


// Using for loop

var output = [];

function fizzBuzz() {
    for (var i = 1; i < 101; i++){
        if (i % 3 === 0 && i % 5 === 0){
            output.push('FizzBuzz');
        } else if (i % 3 === 0){
            output.push('Fizz')
        } else if (i % 5 === 0){
            output.push('Buzz')
        } else {
            output.push(i)
        }
    } console.log(output)
}

fizzBuzz()