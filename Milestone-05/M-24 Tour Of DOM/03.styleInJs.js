// How to style all element in section
const sections = document.querySelectorAll('section');
for (const section of sections) {
  section.style.border = '1px solid black'
  section.style.padding = '10px'
  section.style.marginTop = '10px'
}

// Specific element style
const fruitsContainer = document.querySelector('.fruits-container');
fruitsContainer.style.backgroundColor = 'lightblue';

const title = document.getElementById('fruit-title').style.textDecoration = 'underline';

// How to select and style specific element.
const lists = document.querySelectorAll
('.fruits-container li');
for (const list of lists) {
    list.style.listStyle = 'square';
    list.style.fontSize = '18px';
}

