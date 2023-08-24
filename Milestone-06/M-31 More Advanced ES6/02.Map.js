const numbers = [23, 34, 56, 5, 9, 87, 98];
numbers.map(num => {
    console.log(num * 2)
})

const triple = numbers.map(num => num * 3);
console.log(triple);


const friends = ['Alex', 'Doe', 'Beast', 'John'];
const length = friends.map(fnd => fnd.length);
const firstLetters = friends.map(frnd => frnd[0]);
console.log(firstLetters)
console.log(length)

for (const num of numbers) {
    // console.log(num * 2)
}
for(const num in numbers){
    console.log(numbers[num])
}