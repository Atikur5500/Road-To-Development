const nestedObj = {
    city: 'California',
    street: {
        houseNo: '343 East',
        roadNo: '879 South'
    }
}

const HouseNumber = nestedObj?.street?.houseNo;
// console.log(HouseNumber)
console.log(nestedObj.street.roadNo)

const nestedArray = [
    {
        name: 'Alex',
        age: 24,
        city:{
            cityName: 'Dhaka',
            street: '3/4 North South',
            numbers: [2, 3, 8, 9]
        }
    }
]

// console.log(nestedArray[0].city.street)
console.log(nestedArray[0]?.city?.numbers?.[2])