// Summation
const summation = number => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
       sum += i;
       console.log(i, sum)
    }
    return sum;
}
let result = summation(10);
console.log(result)


let n = 10;
let sum1 = (n*(n + 1)) / 2;
console.log(sum1)


for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${3} = ${i * 3}`);
}


const inchToFeet = inches => {
    const feet = inches / 12;
    return feet;
}

const myHeight = 72;
const totalHeight = inchToFeet(myHeight);
console.log(totalHeight, 'Feet');


const oddEven = num => {
    let number = num % 2;
    if (number === 0) {
        console.log('Even')
    }else{
        console.log('Odd')
    }
}
oddEven(51)

const sumAllNumbers = numbers =>{
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        sum = sum + element;
        console.log(element, sum)
    }
    return sum;
}

let y = [23, 28, 30, 56,75, 34, 98];
sumAllNumbers(y)


const isInteger = integer => {
    if (integer === 0 && integer < 0) {
        
    } else {
        
    }
}

let getInteger = isInteger(24);
console.log(getInteger);









