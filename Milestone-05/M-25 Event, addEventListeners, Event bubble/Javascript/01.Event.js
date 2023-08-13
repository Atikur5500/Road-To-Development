const myFunction = () => {
    console.log('Hello World')
}
// Option 02 Important!
const makeRed = () => {
    document.body.style.backgroundColor = 'brown'
}
// Option 03
const makeLightBlue = () => {
    document.body.style.backgroundColor = 'lightblue';
}
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = makeLightBlue;

// Option 03 another way
const makePurpleColor = document.getElementById('make-purple');
makePurpleColor.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}
// Option 04
const makePink = document.getElementById('make-pink').addEventListener('click', makePinkColor);

function makePinkColor(){
    document.body.style.backgroundColor = 'pink'
}

const makePink1 = document.getElementById('make-pink').addEventListener('click', function(){
    // document.body.style.backgroundColor = 'violet'
})

const makePink2 = document.getElementById('make-pink').addEventListener('click', element => {
    document.body.style.backgroundColor = 'blue'
    console.log(element)
})

// Important!
document.getElementById('make-tomato').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
})







