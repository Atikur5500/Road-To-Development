// Task 01
const multiply = (a, b, c) => a * b * c;
let result = multiply(2, 5, 5);
console.log(result)

// Task 02
const first = 'I am a web Developer';
const second = 'I love to code';
const third = 'My vision become a web developer';

const print = `
${first}
${second}
${third}
`
console.log(print)

// Task 03
const myName = (firstName, lastName = 'Ahmed') =>{
    return `${firstName} ${lastName}`
}
const myNameResult = myName('Badhon');
console.log(myNameResult);

// Task 04
const myFriendsName = friendName =>{
 const newFriends = [];
 for (const friend of friendName) {
    if (friend.length % 2 === 1) {
        newFriends.push(friend)
    }
 }
 return newFriends;
}

const friends = ['Siam', 'Sunny', 'Arafath', 'Riad', 'Pias'];
console.log(myFriendsName(friends))

// Task 05
const squareElements = number => {
    let result = [];
    for (const num of number) {
        const square = num * num;
        const even = square + num;
        const remainder = even / 5;

        result.push(remainder)
        
    }

    return result;
}

const numbers = [5, 3, 6, 9, 10];
console.log(squareElements(numbers))


// Task 06
const findBiggestNumber = (array1, array2) =>{
    const combinedArray = [...array1, ...array2];
    const maxNumber = Math.max(...combinedArray);
    return maxNumber;

}

let array1 = [34, 345, 87, 12, 35];
let array2 = [3, 876, 45, 98, 2345];

const number = findBiggestNumber(array1, array2);
console.log(number);

const member = {
    firstName: 'Badhon', 
    lastName: 'Ahmed', 
    year: 24
}

const {firstName, lastName, year} = member;
console.log(firstName, year, lastName);