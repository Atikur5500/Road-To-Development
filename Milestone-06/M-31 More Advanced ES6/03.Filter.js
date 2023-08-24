const numbers = [23, 34, 87, 212, 98, 45, 95, 30];
const friends = ['Alex', 'Donald', 'Obama', 'Biden', 'Kamala'];
// const findEvenNumbers = numbers.filter(num => num >= 80);
const findEvenNumbers = numbers.filter(num => num <= 80);
console.log(findEvenNumbers)
const findFriends = friends.filter(f => f.length >= 6);
// console.log(findFriends)

const myFriends = friend =>{
    let newFriend = [];
    for (const fnf of friend) {
        if (fnf.length % 2 === 0) {
            newFriend.push(fnf)
        }
    }
    return newFriend;
} 

console.log(myFriends(friends))



const arr = ['Biden', 'Joe', 'Rock', 'Broke', 'Mitchel'];
const filter = arr.filter(name => name.length >= 5);
console.log(filter)




