// Task 01
const minuteToHour = minute => {
    let count = minute * 60;
    return count;
}

const getMinute = minuteToHour(8);
console.log(getMinute);


// Task 02
const findLeapYear = year => {
    let pushLeapYear = [];
    for(let i = 0; i < year.length; i++){
        let index = i;
        let element = year[index];
        if (element % 4 === 0) {
            pushLeapYear.push(element);
        }
    }
    return pushLeapYear;
}


let leapYear = [2023, 2024, 2025, 2028, 2030, 2032, 2034];
let foundLeapYear = findLeapYear(leapYear)
console.log(foundLeapYear);







