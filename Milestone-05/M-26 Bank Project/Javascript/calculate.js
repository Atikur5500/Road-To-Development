const depositButton =  document.querySelector('#deposit-button');
const depositInputField = document.querySelector('#deposit-input-field');
const depositAmount = document.querySelector('#deposit-amount');
const totalBalance = document.querySelector('#total-balance');

depositButton.addEventListener('click', function(){
    const newDepositInput = parseFloat(depositInputField.value);
    depositInputField.value = '';
    if (isNaN(newDepositInput) || newDepositInput < 0) {
        alert('Please enter a valid input');
        return;
    }
    const previousDepositAmount = parseFloat(depositAmount.innerText);
    const totalDepositAmount = previousDepositAmount + newDepositInput;
    depositAmount.innerText = totalDepositAmount;

    // update total amount
    const previousTotalBalance = parseFloat(totalBalance.innerText);
    const currentTotalBalance = previousTotalBalance + newDepositInput;
    totalBalance.innerText = currentTotalBalance;
})

const withdrawButton = document.querySelector('#withdraw-button');
const withdrawInputField = document.querySelector('#withdraw-input-field');
const withdrawAmount = document.querySelector('#withdraw-amount');

withdrawButton.addEventListener('click', function(){
    const newWithdrawAmount = parseFloat(withdrawInputField.value);
    withdrawInputField.value = '';

    if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
        alert('Enter a valid withdraw amount');
        return;
    }

    const previousWithdrawAmount = parseFloat(withdrawAmount.innerText);
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

    if (totalWithdrawAmount > parseFloat(totalBalance.innerText)) {
        alert('Insufficient Balance');
        return;
    }

    withdrawAmount.innerText = totalWithdrawAmount;
    // Subtract Withdraw money
    const previousTotalBalance = parseFloat(totalBalance.innerText);
    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
    totalBalance.innerText = currentTotalBalance;
})

