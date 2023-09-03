// const store = localStorage.setItem('name', 'Shanto');
// console.log(store)
const get = localStorage.getItem('name');
const get1 = localStorage.getItem('games');
console.log(get, get1)

const obj = { name: 'Badhon', age: 23, passion: 'Coding'};
const objString = JSON.stringify(obj);
const setLocalStorage = localStorage.setItem('MyObject', objString)
console.log(setLocalStorage)
const str = JSON.stringify(obj);
console.log(str)

const setAge = () =>{
    localStorage.setItem('age', 45)
}




