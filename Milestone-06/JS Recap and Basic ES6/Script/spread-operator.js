const maxNumber = Math.max(3, 5, 8, 20, 10);
console.log(maxNumber)

const numbers = [23, 25, 43, 4, 56, 86, 64];
const largest = Math.max(...numbers)
console.log(largest)
// console.log(...numbers)

const numbers1 = [456, ...numbers, 432];
numbers.push(55);
numbers1.push(222);
console.log(...numbers, 65, 789)
console.log(...numbers1)


const president = ['Donald Trump', 'Barack Obama', 'Hilary Clinton', 'Joe Biden', 'Kamala Harris'];
// console.log(...president);

// Object copy
const member ={
    a: 20,
    b: 34,
}

const newMember = {age: 24, ...member, name: 'Badhon'};
console.log(newMember)

// Function copy
const num = [1, 2, 3];
const addition = (a, b, c) => a + b + c;
const additionResult = addition(...num);
console.log(additionResult)

// Combined Array
let a = [1, 2, 3];
let b = [5, 4, 8];
const combined = [...a, ...b];
console.log(...combined)

// Dest
const [first, ...second] = a;
console.log(first, second)
