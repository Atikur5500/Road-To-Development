// Find Odd Sum
/* const findOddSum = numbers => {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        sum += element;
        console.log(index, element, sum)
        // console.log(index)
    }
    return sum;
}

const myNumbers = [23, 44, 24, 53, 5, 21, 56, 74, 58, 95];
findOddSum(myNumbers) */





const sumAllNumber = numbers => {
    let sum = 0
    for(let i = 0; i < myArray.length; i++){
        let index = i;
        const myNumbers = numbers[index]
        sum = sum + myNumbers;
        console.log(index, myNumbers, sum)
    }
}

const myArray = [23, 3, 42, 54, 12, 47, 87, 64, 10];
sumAllNumber(myArray)








