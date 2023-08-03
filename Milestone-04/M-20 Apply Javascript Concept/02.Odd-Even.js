// Odd Even
const oddEven = number => {
    const num = number % 2;
    if (num === 0) {
        console.log(number,'is Even')
    }else{
        console.log(number,'is Odd')
    }
}
oddEven(141);
oddEven(543);
oddEven(134);
oddEven(196);

const evenOdd = num => {
    const number = num % 2;
    if (number === 0) {
        return true;
    } else {
        return false;
    }
}

const check = evenOdd(25);
console.log(check)

