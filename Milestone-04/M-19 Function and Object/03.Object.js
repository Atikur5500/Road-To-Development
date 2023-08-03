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
// How to get property
/* console.log(student['thana'])
let country = student.country;
console.log(country)
 */

// Key Values Property

/* 
let keys = Object.keys(student);
let values = Object.values(student);
console.log(values)
console.log(keys);
 */

/* let text = '';
for (const x in student) {
    text += student[x];
}
console.log(text); */

// How to find value dynamic way.
let propertyName = 'profession';

let propertyValue = student[propertyName];
console.log(propertyName,propertyValue);

// How to set Property
/* student.board = 'Rajshahi';
console.log(student)
student['district'] = 'Chapainawabganj';
console.log(student.district) */


