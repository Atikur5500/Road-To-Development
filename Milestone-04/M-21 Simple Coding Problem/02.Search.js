const details = 'I live in Bangladesh.It is a independent country.Over population is one of the biggest problem in this country!';
const searchString = 'Live'

const detailsLowerCase = details.toLowerCase();
const searchStringLowerCase = searchString.toLowerCase();
const doesExist = detailsLowerCase.includes(searchStringLowerCase);

const oneLineResult = details.toLowerCase().includes(searchString.toLowerCase());

console.log(doesExist); 
console.log(oneLineResult);

// Index Of--What is the position of element.
let findIndex = details.indexOf('B');
// Starts With--What's the start with?
findIndex = details.startsWith('I');
// Ends With--What's the end with?
findIndex = details.endsWith('y');
console.log(findIndex);






