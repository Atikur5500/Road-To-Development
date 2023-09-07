const addToLocalStorage = () => {
    const itemKey = document.querySelector('#item-key');
    const itemValue = document.querySelector('#item-value');
    
    const key = itemKey.value;
    const value = itemValue.value;

    itemKey.value = '';
    itemValue.value = '';
    
    if (key && value) {   
        localStorage.setItem(key, value);
    }
    displayItem(key, value)
    console.log(key, value)

}


const displayItem = (key, value) =>{
    const itemContainer = document.querySelector('#item-container');
    const li = document.createElement('li');

    li.innerText = `${key} ${value}`;
    itemContainer.appendChild(li)

}


let person = null;
console.log(person ? person : "person is null");

const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);

