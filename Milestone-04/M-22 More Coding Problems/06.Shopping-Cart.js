let shoppingCart = [
    {name: 'Shirt', price: 2300, quantity: 5},
    {name: 'Pant', price: 2500, quantity: 3},
    {name: 'Blazer', price: 5800, quantity:2},
    {name: 'Shoe', price: 3000, quantity: 2},
    {name: 'Belt', price: 900, quantity: 1},
    {name: 'Watch', price: 4200, quantity: 1}
]

/* // Total Cost
const totalCost = products => {
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        let product = products[i]
        sum += product.price;
    }
    return sum;
}
let totalShopping = totalCost(shoppingCart);
console.log(`Total Shopping Cost: ${totalShopping}`);
 */
// Total Quantity
const totalQuantity = products =>{
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        sum += product.quantity * product.price;
    }
    return sum;
}

let allProducts = totalQuantity(shoppingCart);
console.log(`Total Quantity: ${allProducts}`);





