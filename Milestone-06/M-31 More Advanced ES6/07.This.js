class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    working(){
        console.log(`${this.name} Is a very smart.He is ${this.age}.`)
    }
}


const student = new Person('Alex', 34);
student.working()
console.log(student)

const student1 = new Person('John', 24);
student1.working()
console.log(student1);


const member = {
    name: 'Sand',
    greet(){
        console.log(`Hello, I am ${this.name}`);
    }
}

member.greet();


function greet() {
    console.log(`Hello,I am ${this.name} new employee in this company.`)
}

let person1 = {name: 'Shun'};
let person2 = {name: 'Mac'};

greet.call(person1)
greet.call(person2)

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);