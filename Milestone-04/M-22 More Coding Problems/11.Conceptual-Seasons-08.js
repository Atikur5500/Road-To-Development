// Problem 01
const isInteger = number => {
    if (typeof number !== 'number') {
        return 'Please provide a valid number!'
    } else {
        if (number % 1 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

// console.log(isInteger(50.5));


// Problem 02;
const isJavascriptFile = filename => {
    if (typeof filename !== 'string') {
        return 'Please provide a valid value'
    } else {
        // Way 01
       /*  if (filename.endsWith('.js') === true) {
            return true;
        }else{
            return false;
        } */
        // Way 02
        // return filename.toLowerCase().endsWith('.js');
        // Way 03
        const arr = filename.split('.');
        const lastElement = arr.pop()
        if (lastElement.toLowerCase() === 'js') {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isJavascriptFile('hello.world.js'))


// Problem 03
const mindGame = number => {
    if (typeof number !== 'number') {
        return 'Enter a valid number'
    } else if(number <= 0){
        return 'Enter a positive number'
    }else{
        const result = (((number*3)+10)/2) -5;
        return result;
    }
}
console.log(mindGame('hello'))



// Problem 04
const isLgSeven = x => {
    if (typeof x !== 'number') {
        return 'Enter a valid number'
    } else {
        const differ = x -7;
        if (differ < 7) {
            return differ;
        } else {
            return x * 2;
        }
    }
}

console.log(isLgSeven(-15))


// Problem 05
const findingBadData = numbers =>{
    if (!Array.isArray(numbers)) {
        return 'Give a valid data'
    } else {
        let badData = 0;
       /*  for(let i = 0; i < numbers.length; i++){
            if (typeof numbers[i] !== 'number') {
                return 'Enter a valid data'
            } else {
                if (numbers[i] < 0) {
                    badData++
                }
            }
        }
        return badData;
    } */
        for (let item of numbers) {
            if (typeof item !== 'number') {
                return 'Enter a valid data'
            } else {
                if (item < 0) {
                    badData++
                }
            }
        }
        return badData;
    }
}
let badDataArr = [1, 3, 5, -9, -6];
console.log(findingBadData(badDataArr));



// Problem 06
const gemsToDiamond = (x, y, z) => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
        return 'Enter a valid number'
    } else if (x <= 0 || y <= 0 || z <= 0) {
        return 'Enter a positive number'
    } else {

        let firstFriend = 21;
        let secondFriend = 32;
        let thirdFriend = 43;

        // Way 01
        // let firstGems = firstFriend * x;
        // let secondGems = secondFriend * y;
        // let thirdGems = thirdFriend * z;
        
        // Way 02
        let total = (firstFriend * x) + (secondFriend * y) + (thirdFriend * z);

        if (total > 2000) {
            return total - 2000;
        } else {
            return total;
        }

    }
}
let result = gemsToDiamond('Hello')
console.log(result)


// Problem 07
const printDetails = person => {
    if (typeof person !== 'object') {
        return 'Enter a valid object'
    } else {
        const name = person.name || 'missing';
        const age = person.age || 'missing';
        const email = person.email || 'missing';
        const wife = person.wife || 'missing';
        const job = person.job || 'None'

        return `My name is ${name}.I'm ${age} years old.My email is ${email}.My Wife ${wife}. My job ${job}`
    }
}

let obj = {
    name: 'Badhon',
    age: 24,
    email: 'atikur.r.shanto@gmail.com',
    wife: 'Ache'
}

console.log(printDetails(obj))

// Problem 08
const isValidPhotoName = (fileName, photoExtension) => {
    if (typeof fileName !== 'string' || !Array.isArray(photoExtension)) {
        return 'Please enter a valid Array of String'
    } else {
        for (const item of photoExtension) {
            if (fileName.toLowerCase().endsWith(item.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
}

const photo = 'image.png'
const imageName = ['jpg', 'svg', 'png', 'ic'];
console.log(isValidPhotoName(photo, imageName))








