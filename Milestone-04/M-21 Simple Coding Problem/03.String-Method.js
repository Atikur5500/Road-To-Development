const details = 'I live in Bangladesh.It is a independent country.Over population is one of the biggest problem in this country!';

// Split
const splitDetails = details.split(' ');
const sentence = details.split('.')
const eachCharacter = details.split('');
// console.log(eachCharacter);


// Slice
let slice = details.slice(2, 5);
console.log(slice);

// Sub String
let subStr = details.substring(2, 5);
console.log(subStr);

// Join
const myCountry = [
    'I live in Bangladesh',
    'It is a independent country',
    'Over population is one of the biggest problem in this country!'
];

const newLine = myCountry.join('/');
console.log(newLine)