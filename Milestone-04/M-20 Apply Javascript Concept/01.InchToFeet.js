/* function inchToFeet(number){
    let inch = number / 12;
    return inch;
}
const feet = inchToFeet(60);;
console.log(feet, 'Feet');

function mileToKm(km){
    let mile = km * 1.60;
    return mile;
}

const kilo = mileToKm(9);
console.log(kilo,'Kilometer');

const gramToKg = (gram) => {
    let totalGram = gram / 1000;
    return totalGram;
}
const kg = gramToKg(8000);
console.log(kg, 'Kg') */


// Inch to Feet
const inchToFeet = inches => {
    const feet = inches / 12;
    return feet;
}

const myHeight = 72;
const totalHeight = inchToFeet(myHeight);
console.log(totalHeight, 'Feet');

// Mile to Kilometer
const mileToKilometer = mile => {
    const kilometer = mile * 1.60;
    return kilometer;
}

const houseToSchool = 11;
const totalDistance = mileToKilometer(houseToSchool);
console.log(totalDistance, 'Kilometer');
// const kmInt = parseInt(totalDistance);
// console.log(kmInt);
// ---------------------


// Gram to Kilogram
const gramToKilogram = gram => {
    const kilogram = gram / 1000;
    return kilogram;
}

let pcWeight = 6800;
let totalWeight = gramToKilogram(pcWeight);
console.log(totalWeight, 'Kg')



