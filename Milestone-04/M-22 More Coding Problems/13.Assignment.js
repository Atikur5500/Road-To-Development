function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'Please enter a number'
    } else if (number <= 0) {
        return 'Please Enter a positive number'
    } else {
        let result = number ** 3;
        return result;
    }
}

let getResult = cubeNumber(3);
console.log(getResult);

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please enter a string'
    } else {
        let result = string1.includes(string2);
        return result;
    }

}

const string1Result = 'hello';
const string2Result = 'ell';
console.log(matchFinder(string1Result, string2Result))


function sortMaker(arr) {
    let firstNumber = arr[0];
    let secondNumber = arr[1];

    if (firstNumber <= 0 || secondNumber <= 0) {
        return 'Invalid Input!';
    } else if (firstNumber === secondNumber) {
        return 'equal'
    } else if (secondNumber > 0) {
        if (firstNumber > secondNumber) {
            return [firstNumber, secondNumber]
        } else {
            return [secondNumber, firstNumber]
        }
    }
}
console.log(sortMaker([9, 20]))

function findAddress(obj) {
    if (typeof obj !== 'object') {
        return 'Enter a valid Object'
    } else {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__'

        const total = street + ',' + house + ',' + society;
        return total;
    }

}
let newObj = {
    street: 10,
    // house: '15A',
    // society: 'Earth Perfect'
}
console.log(findAddress(newObj))


function canPay(money, chipsPrice) {
    if (money.length === 0) {
        return 'Enter your money!'
    }
    let sum = 0;
    for (let i = 0; i < money.length; i++) {
        sum += money[i];
    }
    return sum >= chipsPrice;
}

console.log(canPay([1, 5, 1], 10))