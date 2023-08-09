const feetToInch = inch =>{
    const feet = inch * 12;
    return feet;
}

let feet = feetToInch(10);
console.log(`${feet} Inch`)

const centimeterToMeter = centimeter => {
    const meter = centimeter / 100;
    return meter;
}

let meter = centimeterToMeter(250);
console.log(`${meter} Meter`)


const paperRequirements = (bookQuantity1, bookQuantity2, bookQuantity3) => {
    let firstBook = 100;
    let secondBook = 200;
    let thirdBook = 300;

    const paperNeed1 = bookQuantity1 * firstBook;
    const paperNeed2 = bookQuantity2 * secondBook;
    const paperNeed3 = bookQuantity3 * thirdBook;

    const totalPaperNeeds = paperNeed1 + paperNeed2 + paperNeed3;
    return totalPaperNeeds;
}

let paper = paperRequirements(5, 2, 2);
console.log(`Total: ${paper} single page requirements`);


let salary = 50000;
let car = false;

if (salary > 2000 || car == true) {
    console.log('Got Trip')
}else{
    console.log('Stay home')
}

let i = 7;
while (i <= 19) {
    // console.log(i)
    i++;
}

const getBigNumbers = numbers => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 50) {
           console.log(numbers[i])
        }
    }
}

let number = [23, 2, 87, 34, 65, 10, 25, 67];
let result = getBigNumbers(number);

const calculateNumbers = (a, b, c) => {
    let getNumber = a * b * c;
    return getNumber;
}

let result2 = calculateNumbers(5, 10, 3);
console.log(`The result is: ${result2}`);


const student = {
    name: 'Abul',
    age: 24,
    occupation: 'student'
}

let change = student.occupation = 'Worker';
console.log(student);


let bestFriend = names => {
    let name = [0]
    for(let i = 0; i < names.length; i++){
        if (names[i].length > name.length ) {
            name = names[i];
        }
    }
    return name;
}

let friendName = ['Siam the job holder', 'Sunny is now live in Arabia', 'Roman','Arafat', 'Himel', 'Riad'];
let result3 = bestFriend(friendName);
console.log(result3)

let findPositiveNumber = numbers =>{
    let positiveNumber = [];
    for (const num of numbers) {
        if (num >= 0) {
            positiveNumber.push(num)
        } else {
            break;
        }
    }
    return positiveNumber;
}

let gotNumbers = [23, 34, 44,87, -69, 54, 76, -52, 35];
let result4 = findPositiveNumber(gotNumbers);
console.log(result4)







