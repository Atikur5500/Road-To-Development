// Task 01
const oddNumbers = [1, 3, 5, 7, 9];
const getEvenNumbers = oddNumbers.map(num => num + 1);
console.log(getEvenNumbers);

// Task 02
const arr = [33, 50, 79, 78, 90, 101, 30];
const divide = arr.filter(num => num % 10 === 0);
console.log(divide);

const find = arr.find(num => num % 10 === 0);
console.log(find)

// Task 03
const instructor = [
    {name: 'Alex', age: 34, position: 'Senior'},
    {name: 'Trump', age: 22, position: 'Junior'},
    {name: 'Biden', age: 86, position: 'Senior'}
]


const findSenior = instructor.filter(getSenior => getSenior.position == 'Senior')
console.log(findSenior)

// Task 04
const people = [
    {name: 'Doe', age: 20},
    {name: 'John', age: 15},
    {name: 'Kamala', age: 22},
]

// For Loop
let ages = 0;
for (let i = 0; i < people.length; i++){
    ages = ages + people[i].age;
}
console.log(ages)

// Array Reduce
const totalAge = people.reduce((previous, current) => {
    return previous + current.age;
}, 0);
console.log(totalAge)
