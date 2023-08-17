let total = 0;
let disc = 0.20;
const eventHandlerButton = target => {
    const selectedItems = document.getElementById('selected-items');
    const itemName = target.parentNode.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItems.appendChild(li)
    const price = target.parentNode.parentNode.childNodes[5].innerText.split(' ')[2];
    total = parseInt(total) + parseInt(price);
    document.getElementById('total').innerText = total;
    let discountAmount = total * disc;
    document.getElementById('discount').innerText = discountAmount;
    let grandTotal = total - discountAmount;
    document.getElementById('grand-total').innerText = grandTotal;
}

