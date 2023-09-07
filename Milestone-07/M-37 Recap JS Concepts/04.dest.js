const numbers = [3, 5, 8, 9, 10]
const products = { 
    name: 'smartphone', brand: 'Apple', color: 'light gold', price: 3500,
    person: ['alex', 'trump', 'obama'],
    about:{
        height: 67,
        weight: '60kg',
        city: 'Washington DC'
    }
 }
   
const [first, second, third, fourth] = numbers;
// console.log(first, second, third, fourth)

const {name, brand, color, price} = products;
// console.log(name, brand)

const [f, s, t] = products.person;
// console.log(f, s, t)
const {height, weight, city} = products.about;
// console.log(height,weight, city)





