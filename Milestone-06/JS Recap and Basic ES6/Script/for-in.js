let newMember = {
    firstName: 'Badhon',
    age: 24,
    occupation: 'Student',
    city: 'Munshigonj'
}



for (const member in newMember) {
    const x = `${newMember[member]}`
    console.log(member, x);
}

const y = Object.entries(newMember);
console.log(...y)

const a = [2, 3, 3, 4, 5, 8, 9];
a.forEach((number, index) =>{
    // console.log(index, number)
})

a.map((index, number) => {
    console.log(number, index)
})
