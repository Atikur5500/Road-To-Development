for (let i = 1; i < 20; i++){
    if (i > 5) {
        break;
    }
    // console.log(i)
}



for (let x = 1; x <= 10; x++){
    if (x > 5) {
        break;
    }
    // console.log(x)
}

let persons = ['a', 'b', 'c', 'd', 'e', 'f'];

for(let i = 0; i < persons.length; i++){
    let person = persons[i]
    if(person == 'd'){
        break;
    }
    console.log(person)
}

for(let i = 0; i < 20; i++){
    if (i > 10) {
        break;
    }
    console.log(i)
}

let members = ['Rahim', 'Karim', 'Abul', 'Babul', 'Dulal', 'Jabar', 'Mokhles'];
for(let i = 0; i < members.length; i++){
    let item = members[i];
    if (item == 'Babul') {
        break;
    }
    console.log(item)
}
console.log('---------------------')

// Continue

for(let i = 0; i < members.length; i++){
    let item = members[i];
    if (item == 'Abul') {
        continue;
    }
    console.log(item)
}
const numbers = [2, 3, 4, 8, 34, 56, 98, 10, 12, 35, 50, 60]
for(let i = 0; i < numbers.length; i++){
    let item = numbers[i];
    if (item < 40) {
        continue;
    }
    console.log(item)
}
