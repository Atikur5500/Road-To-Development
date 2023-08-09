let products = [
    {name: 'Symphoni Phone'},
    {name: 'Redmi Phone'},
    {name: 'Samsung Phone'},
    {name: 'iPhone'},
    {name: 'Infinix'},
    {name: 'Realme Phone'},
    {name: 'Nothing'},
    {name: 'Walton Phone'},
    {name: 'Walton Phone'},
];

const matchProducts = (products, search) => {
    let matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

let result = matchProducts(products, 'Phone');
console.log(result);



let x = "hello";
let y = "there";
console.log(x + y);