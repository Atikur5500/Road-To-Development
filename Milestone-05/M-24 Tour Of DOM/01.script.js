console.log(`It's time to move browser!`);
console.log(document.body)

// getElementsByTagName
let liCollections = document.getElementsByTagName('li');
console.log(liCollections)

for (const item of liCollections) {
    console.log(item.innerText)
}



const array = [10, 20, 30, 40, 50];

for (const [index, element] of array.entries()) {
    console.log(index, element)
}

let headings = document.getElementsByTagName('h1');
for (const h1 of headings) {
    console.log(h1.innerText);
}

// getElementById
let title = document.getElementById('menu-bar-title').innerText;
title = document.getElementById('menu-bar-title').innerText = 'Navbar'
title = document.getElementById('menu-bar-title');
console.log(title)


// getElementsByClassName
let places = document.getElementsByClassName('places');
console.log(places)
for (const place of places) {
    console.log(place.innerText, place);
    
}

// querySelectorAll
let fruitContainer = document.querySelectorAll('.fruit-container li');
// querySelector
fruitContainer = document.querySelector('.fruit-container li')
console.log(fruitContainer);
fruitContainer = document.querySelector('.fruit-container li').style.color = 'orangered'; 

