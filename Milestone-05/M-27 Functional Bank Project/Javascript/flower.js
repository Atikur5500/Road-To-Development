/* let total = 0;
let disc = .20;
const handleCLikBtn = target => {
    const selectedItems = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItems.appendChild(li)
    const price = target.parentNode.childNodes[5].innerText.split(' ')[1];
    total = parseInt(total) + parseInt(price)
    document.getElementById('total').innerText = total;
    const discountAmount = total * disc;
    document.getElementById('discount').innerText = discountAmount;
    const grandTotal = total - discountAmount;
    document.getElementById('grand-total').innerText = grandTotal;
    
} */

let total = 0;
const disc = 0.20; // Discount percentage

const handleCLikBtn = target => {
    const selectedItems = document.getElementById('selected-items');
    const itemName = target.parentNode.querySelector('.item-name').innerText;
    const price = parseFloat(target.parentNode.querySelector('.item-price').innerText.split(' ')[1]);

    total += price;
    document.getElementById('total').innerText = total.toFixed(2);

    const discountAmount = total * disc;
    document.getElementById('discount').innerText = discountAmount.toFixed(2);

    const grandTotal = total - discountAmount;
    document.getElementById('grand-total').innerText = grandTotal.toFixed(2);

    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItems.appendChild(li);
};
