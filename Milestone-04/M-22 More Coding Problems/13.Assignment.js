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



function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please enter a string'
    } else {
        let result = string1.includes(string2);
        return result;
    }

}



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



function canPay(changeArray,  totalDue) {
    if (changeArray.length === 0) {
        return 'Enter your changeArray!'
    }
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }
    return sum >=  totalDue;
}


