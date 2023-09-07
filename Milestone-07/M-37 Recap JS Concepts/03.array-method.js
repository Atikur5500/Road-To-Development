const products = [
    {name: 'smartphone', brand: 'Apple', color: 'light gold', price: 3500},
    {name: 'camera', brand: 'Canon', color: 'gray', price: 4200},
    {name: 'watch', brand: 'rolex', color: 'white', price: 5500},
]


const getBrand = products.map(item => item.brand);
const getColor = products.map(item => item.color);
console.log(getBrand)

products.forEach(item => console.log(item.price))
console.log(getBrand, getColor)

const filter = products.filter(item => item.price > 4000)
// console.log(filter)

const find = products.find(item => item.price > 4000);
// console.log(find)

// Find Specific letter
const filterName = products.filter(product => product.name.includes('m'));
console.log(filterName)



