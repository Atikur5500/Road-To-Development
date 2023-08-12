const fruitsList = document.getElementById('fruits-list');
const newLi = document.createElement('li');
newLi.innerText = 'Grape';
fruitsList.appendChild(newLi);
// console.log(fruitsList, newLi, fruitsList)

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const heading = document.createElement('h1');
heading.innerText = 'My Favorite Food';
section.appendChild(heading);
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Beef';
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'Mutton';
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = 'Biriyani';
ul.appendChild(li3)

const li4 = document.createElement('li');
li4.innerText = 'Kacchi';
ul.appendChild(li4)

section.appendChild(ul);
mainContainer.appendChild(section)


const subSection = document.createElement('section');
subSection.innerHTML = `
    <h1>My Favorite Subject</h1>
    <ul>
        <li>English</li>
        <li>Bangla</li>
        <li>History</li>
        <li>Literature</li>
    </ul>
`
mainContainer.appendChild(subSection)