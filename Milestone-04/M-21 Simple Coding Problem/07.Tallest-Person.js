const tallestPerson = numbers => {
    let largest = numbers[0]
    for(let i = 0; i < numbers.length; i++){
       let index = i;
       let element = numbers[index];
       if (element > largest) {
        largest = element;
       }
    }
    return largest;
}


let findTallest = [190, 320, 765, 137, 167];
let tallest = tallestPerson(findTallest);
console.log(tallest);



const findLowest = numbers => {
    let lowest = numbers[0];
    for(let i = 0; i< numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const lowestNumber = [23, 34, 56, 87, 13, 48];
const result = findLowest(lowestNumber);
console.log(result);








