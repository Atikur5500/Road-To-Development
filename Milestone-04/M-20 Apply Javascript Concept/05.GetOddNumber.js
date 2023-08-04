/* const findOddSum = numbers => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        sum += element;
        // console.log(index, element, sum)
        // console.log(index)
    }
    return sum;
}

const getOddNumber = numbers => {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
       if (element % 2 !== 0) {
        sum += element;
        console.log(index, element, sum)
       }
    }
}

const myNumbers = [23, 44, 24, 53, 5, 21, 56, 74, 58, 95];
getOddNumber(myNumbers)
findOddSum(myNumbers) */


const findOddNumbers = numbers => {
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}


const myNumbersArray = [5, 13, 24, 44, 45, 67, 76, 88, 93];
const find = findOddNumbers(myNumbersArray)
console.log(find)



/* const getOddNumber = numbers => {
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++ ){
        let index = i;
        let element = numbers[index];
        if (element % 2 !== 0) {
            oddNumbers.push(element)
        }
    }
    return oddNumbers;
}

const myNumbers = [2, 23, 43, 45, 78, 65, 98, 60, 37];
const arrayOddNumbers = getOddNumber(myNumbers);
console.log(arrayOddNumbers)
 */







