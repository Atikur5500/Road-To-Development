// Class
class Person {
    constructor(firstName, lastName, age, country){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }
}

// Inheritance
class Member extends Person{
    constructor(firstName, lastName, age, country, id, phone, city){
        super(firstName, lastName, age, country);
        this.id = id;
        this.phone = phone;
        this.city = city;
    }
}

class Teacher extends Member{
    constructor(age, country, subject){
        super(age, country);
        this.subject = subject;
    }
}

const teacher = new Teacher(34, 'Bangladesh', 'Math');
console.log(teacher)

const student = new Member('Badhon', 'Ahmed', 24, 'Bangladesh', 4554, '01814672423', 'Dhaka');
// console.log(student);

const student2 = new Member('Atikur', 'Rahman', 25, 'Bangladesh', 9870, '039453984', 'Rajshahi');
// console.log(student2)

for(let stu in student){
    const x = student[stu];
    // console.log(stu, x)
}

// stu -> Key
// student -> Value