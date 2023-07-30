const isEven = number => {
    const num = number % 2;
    if (num === 0) {
        console.log('The number is addition')
    } else {
        console.log('The number is even!')
    }
}
isEven(43)
isEven(48)
isEven(50)



const myAge = age => {
    const years = age % 2;
    if (years === 0) {
        return true;
    } else {
        return false;
    }
}


const myYears = myAge(24);
console.log(myYears);











