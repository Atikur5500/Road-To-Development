const two = document.querySelector('#parent-two');
const li = document.createElement('li');
li.classList.add('item')
li.classList.add('random')
li.classList.remove('random')
li.innerText = 'New List Item';
two.appendChild(li)
const sibling = two.previousElementSibling;
console.log(sibling.innerText)
console.log(two)



function capitalLetter(name){
    console.log(name.toUpperCase());
}

function fullName(first, callback){
    const fullName = first + 'Ahmed';
    callback(fullName)
}

fullName('Badhon', capitalLetter)







