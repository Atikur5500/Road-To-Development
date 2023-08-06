/* const removeDuplicate = names =>{
    let add = [];
    for(let i = 0; i < names.length; i++){
        let index = names[i];
        if (add.includes(index) === false) {
            add.push(index)
        }
    }
    return add;
}

let persons = ['Alex', 'john', 'Saddam', 'Laden', 'Trump', 'Justin', 'Barack Obama','john', 'Trump', 'Biden', 'Alex','Kamala Harris', 'Justin', 'Nelson Mandela', 'Bill Clinton'];
console.log(persons)
let duplicate = removeDuplicate(persons);
console.log(duplicate); */

const removeDuplicate = names => {
    let add = [];
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        if (add.includes(name) === false) {
            add.push(name);
        }
    }
    return add;
}

let persons = ['Alex', 'john', 'Saddam', 'Laden', 'Trump', 'Justin', 'Barack Obama', 'john', 'Trump', 'Biden', 'Alex', 'Kamala Harris', 'Justin', 'Nelson Mandela', 'Bill Clinton'];

let duplicate = removeDuplicate(persons);
console.log(duplicate);










