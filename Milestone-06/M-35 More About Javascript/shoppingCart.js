const addProduct = () =>{
    const productField = document.querySelector('#product-field');
    const quantityField = document.querySelector('#quantity-field');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) =>{
    const productContainer = document.querySelector('#product-container');
    const li = document.createElement('li');
    li.style.marginTop = '10px'
    li.innerText = `Product Name: ${product}
    Quantity: ${quantity}`
    productContainer.appendChild(li)
}
// How to get Product from local storage
const getStoredShoppingCart = () =>{
    let cart = {};
    const storedData = localStorage.getItem('cart');
    if (storedData) {
        cart = JSON.parse(storedData)
    }
    return cart;
}
// How to save product in local storage
const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
// How to display/ui in local storage save product.
const displayProductFromLocalStorage = () =>{
    const saveCart = getStoredShoppingCart();
    for(const product in saveCart){
        const quantity = saveCart[product]
        displayProduct(product, quantity)
        console.log(quantity)
    }
}



displayProductFromLocalStorage()
