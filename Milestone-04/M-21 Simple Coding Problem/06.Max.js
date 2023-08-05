let jim = 100;
let dela = 95;
let chinku = 99;

/* if (jim > dela) {
    console.log('Jim Will get the cake')
} else {
    console.log('Dela will get the cake')
} */

if (jim > dela && jim > chinku) {
    console.log('Jim will gate the cake!')
}else if(dela > jim && dela > chinku){
    console.log('Dela will get the cake')
}else{
    console.log('Chinku will get the cake')
}
// Home Work 01
const maxNumber = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
}

let getMaxNum = maxNumber(240, 550, 95);
console.log(getMaxNum);

// If Else
let num1 = 240;
let num2 = 600;
let num3 = 735;

if (num1 > num2 && num1 > num3) {
    console.log(num1, 'Is the largest')
} else if(num2 > num1 && num2 > num3){
    console.log(num2, 'Is the largest')
}else{
    console.log(num3, 'Is the largest')
}

// Home Work 02
const minNumber = (num1, num2, num3) => {
    return Math.min(num1, num2, num3);
}

let getMinNum = minNumber(40, 550, 95);
console.log(getMinNum);

// If Else
let num4 = 240;
let num5 = 600;
let num6 = 735;

if (num4 < num5 && num4 < num6) {
    console.log(num1, 'Is the lowest')
} else if (num5 < num4 && num5 < num6) {
    console.log(num2, 'Is the lowest')
} else {
    console.log(num3, 'Is the lowest')
}

