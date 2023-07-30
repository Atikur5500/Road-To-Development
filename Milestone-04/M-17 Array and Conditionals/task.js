// Task 01
let fruit = ['Apple', 'Banana', 'Orange'];

console.log(fruit.indexOf('Banana'))
fruit[1] = 'Mango';
fruit.pop()
fruit.push('Watermelon')
console.log(fruit)

// Task 02
const myScore = 80;
const tomScore = 66;
const janeScore = 95;
const peterScore = 56;
const johnScore = 40;

if (myScore >= 80) {
    console.log('I have got A Grade')
} else if (myScore >= 60) {
    console.log('I have got B Grade')
} else if (myScore >= 50) {
    console.log('I have got C Grade')
} else if (myScore >= 40) {
    console.log('I have got D Grade')
} else if (myScore <= 39) {
    console.log('I am fail')
}

// Task 03
const a = 13;
const b = 79;
const c = 45;

if (a > b || a > c) {
    console.log('a is the largest')
} else if (b > a || b > c) {
    console.log('b is the largest')
} else {
    console.log('c is the largest')
}


