const phones = [
    {name: 'iPhone', camera: 24, color: 'Silver', price: 142000},
    {name: 'Samsung', camera: 108, color: 'gray', price: 24000},
    {name: 'Redmi', camera: 120, color: 'skyblue', price: 5000},
    {name: 'Realme', camera: 90, color: 'white', price: 42000},
    {name: 'Infinix', camera: 150, color: 'black', price: 32000},
    {name: 'Oppo', camera: 60, color: 'green', price: 12000}
];

// Lowest Price
let cheapestPhone = phones => {
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const findCheapestPhone = cheapestPhone(phones);
console.log(findCheapestPhone)

// Highest Camera
let highestCamera = phones => {
    let highest = phones[0];
    for(let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if (phone.camera > highest.camera) {
            highest = phone;
        }
    }
    return highest;
}

let findHighestCamera = highestCamera(phones);
console.log(findHighestCamera);

