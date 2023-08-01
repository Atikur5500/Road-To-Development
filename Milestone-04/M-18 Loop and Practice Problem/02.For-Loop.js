// For Loop Using Addition and Subtraction
// Addition
for(let i = 0; i <= 10; i = i + 2){
    // console.log('My Number' + i)
    // console.log(i)
}

// Subtraction
for(let i = 1; i <= 10; i += 2){
    // console.log(i)
}

// For Each Method/Function
let numbers = [2, 3, 5, 8, 9, 34, 54, 22, 12, 40, 38, 98, 76];
// numbers.forEach(value => console.log(value))

let member = ['a', 'b', 'c', 'd', 'e'];
// member.forEach(i => console.log(i));


for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    // console.log(number)
}

numbers.forEach(i => console.log(i))
member.forEach(i => console.log(i))