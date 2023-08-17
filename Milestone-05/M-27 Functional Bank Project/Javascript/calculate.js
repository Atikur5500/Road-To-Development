const depositButton = document.getElementById('deposit-button');
const depositInputField = document.getElementById('deposit-input-field');
const depositAmount = document.getElementById('deposit-amount');
const totalBalance = document.getElementById('total-balance');

depositButton.addEventListener('click', function(){
    const newDepositAmount = parseFloat(depositInputField.value);
    depositInputField.value = ''
    if (isNaN(newDepositAmount) || newDepositAmount < 0) {
        alert('Enter a valid deposit amount!')
        return;
    }
    const previousDepositAmount = parseFloat(depositAmount.innerText);
    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    depositAmount.innerText = totalDepositAmount;

    // Update Total Amount
    const previousTotalBalance = parseFloat(totalBalance.innerText);
    const currentTotalBalance = previousTotalBalance + newDepositAmount;
    totalBalance.innerText = currentTotalBalance;

})

const withdrawButton = document.querySelector('#withdraw-button');
const withdrawInputField = document.querySelector('#withdraw-input-field');
const withdrawAmount = document.querySelector('#withdraw-amount');

withdrawButton.addEventListener('click', function(){
    const newWithdrawAmount = parseFloat(withdrawInputField.value);
    withdrawInputField.value = '';

    if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
        alert('Enter a valid withdraw amount!');
        return;
    }

    const previousWithdrawAmount = parseFloat(withdrawAmount.innerText);
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

    if (totalWithdrawAmount > parseFloat(totalBalance.innerText)) {
        alert('Insufficient Balance');
        return;
    }

    withdrawAmount.innerText = totalWithdrawAmount;

    // Subtract Withdraw Money from total;
    const previousTotalBalance = parseFloat(totalBalance.innerText);
    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
    totalBalance.innerText = currentTotalBalance;
})
