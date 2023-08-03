const student = {
    firstName: 'Badhon',
    lastName: 'Ahmed',
    age: 24,
    class: 'Honours 4th year',
    board: 'Dhaka',
    country: 'Bangladesh',
    district: 'Munshigonj',
    thana: 'Shirajdikhan',
    isMarried: true,
    profession: 'Web Developer'
}
// Convert Object to Array
let values = Object.entries(student);
// console.log(values);

let values1 = student;

for(let key in values1){
    const keys = values1[key];
    // console.log(key, keys)
}

for(let x in student){
    let value = student[x];
    console.log(x, value);
}







