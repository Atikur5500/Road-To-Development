// How to declare variable
// Let is mutable
let x = 'Alex';

const y = 'Donald';
console.log(y)
console.log(x)

// Conditions
if (x === 'alex') {
    console.log('oops! Your naming spell is not correct')
} else if(x === 'Alex') {
    console.log('Yes your name is correct')
}

if(y === 'donald' || y === 'Donald'){
    console.log('Yes! You are Donald');
}else{
    console.log('You have no name')
}

const friends = ['Donald', 'Barack', 'Joe', 'Trump', 'Obama', 'Biden'];
friends[0] = 'Kamala';
friends.push('Donald')
let m = friends.indexOf('Obama')
console.log(m)

// How to get for of index with value
for (const item of friends.entries()) {
    console.log(...item)  
}

const item = friends.forEach((value, index, arr)=>{
    console.log(index, value, arr)
})

const filter = friends.filter(item => item.length < 5)
console.log(filter)

const numbers = [3, 5, 8, 9, 10]
const getSquare = num => console.log(num * 2)
numbers.forEach(getSquare)

const person = {
    name: 'Badhon',
    age: 23,
    color: 'Orange'
}
const keys = Object.keys(person); values =  Object.values(person);
console.log(...keys, ...values)
