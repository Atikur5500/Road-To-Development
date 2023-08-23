// Default parameter value
const fullName = (firstName = 'Atikur', lastName = 'Rahman') => {
    const name = `${firstName} ${lastName}`;
    return name;
}

const getFullName = fullName();
console.log(getFullName);


const student = (firstName, lastName) =>{
    const name = `${firstName} ${lastName}`;
    return name;
}

const accessFullName = student('Atikur', 'Rahman'); // Arguments
console.log(accessFullName)



