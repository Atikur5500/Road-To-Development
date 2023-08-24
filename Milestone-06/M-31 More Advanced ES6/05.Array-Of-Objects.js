const laptop = [
    {name: 'macBook', id: 1, price: 180000},
    {name: 'lenovo', id: 2, price: 53000},
    {name: 'hp', id: 3, price: 85000},
    {name: 'dell', id: 4, price: 55000},
]

// Map
const laptopPrice = laptop.map(price => price.price);
const laptopName = laptop.map(name => name.name);
console.log(laptopPrice, laptopName);

// forEach
laptop.forEach(laptopId => console.log(laptopId.id));
laptop.forEach(laptopPrice => console.log(laptopPrice.price));

// Filter
const filterLaptopPrice = laptop.filter(laptopPrice => laptopPrice.price >= 55000);
console.log(filterLaptopPrice);

// Find
const findLaptopPrice = laptop.find(price => price.price > 55000);
console.log(findLaptopPrice);

// Reduce
const total = laptop.reduce((previousValue, currentValue)=>{
    return previousValue + currentValue.price;
},0)
console.log(total)