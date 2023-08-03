// Even Factorial
const factorialNumber = numbers => {
    let sum = 1;
    for (let i = 1; i <= numbers; i++) {
        sum = sum + i
        console.log(i, sum)
    }
    return sum;
}

let factorial = factorialNumber(10);
console.log(factorial);

// Multiplication Factorial
const multiFactorial = number => {
    let sum = 1;
    for(let i = 1; i < number; i++){
        sum *= i;
        console.log(i, sum)
    }
    return sum;
}

let squareFactorial = multiFactorial(10);
console.log(squareFactorial);

/* 
// Reverse Factorial
const multiFactorial = number => {
    let sum = 1;
    for(let i = number; i >= 1; i--){
        sum = sum * i;
    }
    return sum;
}

let squareFactorial = multiFactorial(6);
console.log(squareFactorial);

 */


