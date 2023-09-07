const products = {
    name: 'smartphone',
    brand: 'Apple',
    color: 'light gold',
    price: 3500 
}

// console.log(products)
const intoJSON = JSON.stringify(products)
const intoObj = JSON.parse(intoJSON);
console.log(intoObj)

/* fetch('url')
    .then(response => response.json())
    .then(data => console.log(data))
 */


const money = 50;
let budget = 20;

let myMoney = (money > 100 || budget > 10) ? 'I will Eat Biriyani' : 'I will eat Tea';
console.log(myMoney)

const isActive = true;

const displayUser = () => console.log('Display user');
const hideUser = () => console.log('Hide User');

// isActive ? displayUser() : hideUser();
isActive && displayUser();

