// forEach, Map, find, filter, reduce

const numbers = [2, 4, 8, 9, 21, 45, 35];
const fruits = ['mango', 'watermelon', 'grape', 'banana'];

// For
for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    // console.log(index, element)
}

// For Of
for (const number of numbers) {
    // console.log(number)
}


// For Each
numbers.forEach(num => console.log(num))

let sum = 0;
numbers.forEach(item => sum+= item);
console.log(sum)


fruits.forEach((fruit) =>{
    console.log(fruit)
})


// Map
numbers.map((item) => console.log(item * 2));
const x = numbers.map((num) =>{
    return num * 2;
})

console.log(x)

fruits.map((item, index) =>{
    console.log(item, index)
})


// find
const findFruits = () =>{
    for (const item of fruits) {
        if (item === 'grape') {
            return item;
        }
    }
}

const result3 = findFruits(fruits);
console.log(result3)

const z = fruits.find(item => item === 'mango');
console.log(z)


// Filter
const evenNumber = () => {
    let even = [];
    for (const num of numbers) {
        if (num % 2 === 0) {
            even.push(num)
        }
    }
    return even;
}
const findEven = evenNumber(numbers);
console.log(findEven)

const odd = numbers.filter(oddNumbers => oddNumbers % 2 === 1);
console.log(odd)


// Reduce
const even = numbers.reduce((previous, current)=>{
    return previous + current;
}, 0)
console.log(even)

const anotherWayEven = numbers.reduce((previous, current) => previous + current)
console.log(anotherWayEven)

const findOdd = numbers.reduce((previous, current) => previous - current);
console.log(findOdd)

const multiply = numbers.reduce((previous, current) => previous * current)
console.log(multiply)

// Using Map with Template String
const student = {
    name: 'Badhon', 
    age: 24,
    isMarried: true,
}

const templateString = `My Name is ${student.name}.I am ${student.age} years old. My favorite fruit is ${fruits.map((fruit) => fruit).join(' ')}`;
console.log(templateString)