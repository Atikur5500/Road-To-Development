function add(number1, number2){
    console.log(number1, number2);
    const sum = number1 + number2;
    return sum;
}
const total = add(20, 10);
console.log(total)

function carPrice(money){
    let price = 20;
    let total = money / price;
    return total;
}
let myMoney = carPrice(100);
console.log(myMoney);

function pcPrice(money) {
    let pcPrice = 50;
    let total = money / pcPrice;
    return total;
}

const totalPrice = pcPrice(500);
console.log(totalPrice)

// Assignment Mark With Arrow Function!
const assignmentMarks = (assignmentMark1, assignmentMark2, assignmentMark3) => {
    const totalAssignment = assignmentMark1 + assignmentMark2 + assignmentMark3;
    const average = totalAssignment / 3
    return average;
    // return totalAssignment;
}
const myTotalMarks = assignmentMarks(60, 57, 60);
console.log(myTotalMarks);

// Exam Marks
const myResult = (bangla, english, math, physics) =>{
    const totalMarks = bangla + english + math + physics;
    const marksAverage = totalMarks / 4;
    return marksAverage;
}

const myTotalMarksAverage = myResult(79, 85, 65, 82);
const marksInt = parseInt(myTotalMarksAverage);
console.log(myTotalMarksAverage);
console.log(marksInt);
console.log(myTotalMarks)

// Square
const makeSquare = (input) =>{
    const square = input * input;
    console.log(square);
}
makeSquare(8)




