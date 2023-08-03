// Task 01
function foo(){
    console.log('foo')
    bar()
}
function bar(){
    console.log('bar')
}
foo()

// Task 02

const make_avg = (bangla, english, math)=>{
    const total = bangla + english + math;
    const totalMarks = total / 3
    return totalMarks;
    // return total / 3;
}

const result = make_avg(80, 95, 76);
console.log(result)
// console.log(result.toFixed(2));


// Task 03
function make_avg1(arr){
    if (arr.length === 0) {
        return 0;
    }

    const sum = arr.reduce((total, num) => total + num, 0);
    const average = sum / arr.length;
    return average;
}

const number = [10, 20, 30, 40, 50];
const averageValue = make_avg1(number);
console.log(averageValue)

// Task 04

function odd_even(integer){
    return integer % 2;
}

odd_even(54);

// Task 05


