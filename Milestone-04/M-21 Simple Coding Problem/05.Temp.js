// How to swap variable one to others

let number1 = 5;
let number2 = 7;
console.log(number1, number2)

// Approach 01
let temp = number1;
number1 = number2;
number2 = temp;
console.log(number1, number2);

// Approach 02 --Array Destructuring
[number1, number2] = [number2, number1];
console.log(number1, number2)

let abs = Math.abs(-2.33);
abs = Math.round(3.56)
abs = Math.min(2, 3, 5, 8, 1, 10);
abs = Math.max(2, 3, 4, 8, 9, 10, 0, 1);
console.log(abs)