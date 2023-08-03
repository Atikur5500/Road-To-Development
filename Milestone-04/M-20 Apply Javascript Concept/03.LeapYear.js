
const isLeapYear = year => {
    const leapYear = year % 4;
    if (leapYear === 0) {
        console.log(year,'is a leap year.')
    } else {
       console.log(year,'is not leap year')
    }
}

isLeapYear(2048);
