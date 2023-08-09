const findingBadData = arr => {
    if (!Array.isArray(arr)) {
        return 'Please Enter a Array of Number'
    } else {
        let badData = 0;
        for (const i of arr) {
            if (typeof i !== 'number') {
                return 'Enter a valid number'
            } else {
                if (i < 0) {
                    badData++;
                }
            }
        }
        return badData;
    }
}

let findData = [1, -3, -4, 5, -8];
console.log(findingBadData(findData));


const gemsToDiamond = (x, y, z) => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
        return 'Enter a valid number'
    } else if (x <= 0 || y <= 0 || z <= 0) {
        return 'Enter a positive number'
    } else {

        let firstFriend = 21;
        let secondFriend = 32;
        let thirdFriend = 43;

        // let firstGems = firstFriend * x;
        // let secondGems = secondFriend * y;
        // let thirdGems = thirdFriend * z;

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
/* 

const printDetails = person => {
    if (typeof person !== 'object') {
        return 'Enter a valid object'
    } else {
        const name = person.name || 'missing';
        const age = person.age || 'missing';
        const email = person.email || '__';
        const wife = person.wife || 'missing';
        const job = person.job || 'None'

        return `My name is ${name}.I'm ${age} years old.My email is ${email}.My Wife ${wife}. My job ${job}`
    }
}

let obj = {
    name: 'Badhon',
    age: 24,
    // email: 'atikur.r.shanto@gmail.com',
    wife: 'Ache'
}

console.log(printDetails(obj)) */


function findAddress(obj) {
    if (typeof obj !== 'object') {
        return 'Enter a valid Object'
    }else {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__'

        const total = street + ',' + house + ',' + society;
        return total;
    }

}


let newObj = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}

console.log(findAddress(newObj))


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


/* function canPay(notes, price) {
  if (notes.length === 0) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < notes.length; i++) {
    sum += notes[i];
  }

  return sum >= price;
}

// Test cases
console.log(canPay([1, 2, 5], 7)); // Output: true (1 + 2 + 5 >= 7)
console.log(canPay([2, 5, 10], 15)); // Output: false (2 + 5 + 10 < 15)
console.log(canPay([], 5)); // Output: false (empty array)

 */

function canPay(input1, input2){
    if (input1.length === 0) {
        return 'Enter your money!'
    }
    let sum = 0;
    for(let i = 0; i < input1.length; i++){
        sum += input1[i];
    }
    return sum >= input2;
}

console.log(canPay([1,5,5], 10))



