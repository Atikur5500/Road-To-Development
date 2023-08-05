// Home Work 01
const maxNumber = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
}

let getMaxNum = maxNumber(240, 550, 95);
console.log(getMaxNum);

// Home Work 02
const minNumber = (num1, num2, num3) => {
    return Math.min(num1, num2, num3);
}

let getMinNum = minNumber(40, 550, 95);
console.log(getMinNum);

// Home Work 03
const homeTask = number => {
    let num = 0;
    for (let i = 0; i < number.length; i++) {
        let index = i;
        let element = number[index];
        num = num + element;
    }
    return num / 6;
}

let getNumber = [23, 45, 67, 87, 92, 35];
let result = homeTask(getNumber);
let x = (result.toFixed(2));
let float = parseFloat(x)
console.log(float)

// Home Work 04

const rectangle = (height, width) => {
    let multiply = height * width;
    return multiply;
}
const getResult = rectangle(20, 40);
console.log(getResult);

