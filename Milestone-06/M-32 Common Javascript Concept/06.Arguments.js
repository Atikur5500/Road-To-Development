function sum(a, b, c, d){
    console.log(...arguments)
    
    const total = a + b + c + d;
    return total;
}

const result = sum(30, 20, 50, 35, 10, 20);
console.log(result)
console.log(sum.length)

// Pass By

let num1 = 24;
let num2 = 12;

function multiply(a, b){
    const total = a * b;
    return total;
}
const multiplyResult = multiply(num1, num2);
console.log(multiplyResult);

let student1 = {firstName: 'Badhon', lastName: 'Ahmed'};
let student2 = {firstName: 'Atikur', lastName: 'Rahman'};

function makeName(first, second) {
    first.firstName = 'Atikur';
    second.firstName = 'Badhon';
}
console.log(student1, student2)
makeName(student1, student2)
console.log(student1, student2)