const validation = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return `Please Enter a valid number`
    }
    return num1 * num2;
}

let result = validation(3, '5');
console.log(result);