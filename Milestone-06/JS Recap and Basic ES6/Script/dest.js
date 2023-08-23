const person = {
    firstName: 'Badhon',
    lastName: 'Ahmed',
    age: 24,
    occupation: 'Student',
    mission: 'Web Developer'
}
console.log(person)

const {mission, firstName, lastName, age } = person;
console.log(mission, firstName, lastName)



const numbers = [23, 45, 567, 856, 67, 456, 986, 123, 432];
const [first, x, third, fourth, ...fifth] = numbers;
console.log(first, third, ...fifth);



const getName = () =>{
    return ['Badohon', 'Ahmed']
}

const [first1, second] = getName();
console.log(second, first1)



const letter = ['a', 'b', 'c', 'd'];
const letter1 = ['e', 'f', 'g', 'h'];
const arr = [...letter, ...letter1]
console.log(arr)
console.log(...letter, ...letter1)