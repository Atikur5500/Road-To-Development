const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName('Badhon', 'Rahman'))

const letters = (a, b, c, d, e, f, g) => (a + b + c) - (d + e) + (f - g);
console.log(letters(3, 5, 8, 9, 3, 6, 2))

const getAge = person => person.age;
const student = {
    name: 'Badhon',
    age: 24,
}
const age = getAge(student);
console.log(age)

const thirdIndex = numbers => numbers[2];
const third = thirdIndex([32, 5, 56, 76]);
console.log(third);

// this

const obj = {
    value: 32,
    arrowFunction: () =>{
        console.log(this.value)
    },
    regularFunction: function (){
        console.log(this.value);
    }
}

obj.arrowFunction();
obj.regularFunction();