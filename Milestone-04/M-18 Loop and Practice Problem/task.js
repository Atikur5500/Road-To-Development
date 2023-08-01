//---------Variable---------

/* What is javascript?
Ans: JavaScript is a high-level, interpreted programming language that allows you to create interactive and dynamic websites.  */

/* How does javascript work?
Ans: JavaScript is a versatile and flexible programming language that can be used both on the client-side (in web browsers) and on the server-side (with the help of platforms like Node.js). 
*/

// task 03

let a = 20;
a += 20;
console.log(a)

let b = 40;
b /= 5;
console.log(b)

let c = 10
console.log(c++)


let myMoney = 5000;
if (myMoney > 50000) {
    console.log('I will buy gaming pc')
}else if(myMoney > 40000){
    console.log('I will buy laptop')
}else{
    console.log('I will buy phone!')
}


// -----------Loop---------
// Task 01
for(let i = 1; i <= 39; i++){
    // console.log(i, 'Ajke amar mone valo nei')
}
// Task 02
for(let i = 58; i <= 98; i++){
    // console.log(i)
}
// Task 03
for(let i = 412; i <= 456; i+=2){
    // console.log(i)
}
// Task 04
for (let i = 581; i <= 623; i += 2) {
    // console.log(i)
}
// Task 05
let skills = ['Html', 'Css', 'Tailwind', 'Bootstrap', 'DaisyUI', 'Javascript'];
for(let i = 0; i < skills.length; i++){
    let learn = skills[i]
    // console.log(learn)
    // console.log(skills[i])
}
// Task 06
for(let i = 30; i < 86; i++){
    if (i > 44) {
        break;
    }
    // console.log(i)
}
// Task 07
let bookPrice = [280, 140, 230, 100, 138, 249, 349, 430, 190];

for(let i = 0; i < bookPrice.length; i++){
    let bookItem = bookPrice[i];
    if (bookItem < 200) {
        continue;
    }
    // console.log(bookItem);
}






