const person = {
    firstName: 'Badhon',
    lastName: 'Ahmed',
    age: 24,
    education: 'Honours',
    passion: 'Web Developing'
}

const templateString = `${person.firstName} ${person.lastName} is also known as a web developer.He is ${person.age} years old.He completed ${person.education} degree.He want to do more ${person.passion}`;
console.log(templateString)