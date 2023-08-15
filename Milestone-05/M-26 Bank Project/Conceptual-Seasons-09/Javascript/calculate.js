const depositButton = document.querySelector('#deposit-button');
const depositInputField = document.querySelector('#deposit-input-field');
const depositAmount = document.querySelector('#deposit-amount');
const totalBalance = document.querySelector('#total-balance');

depositButton.addEventListener('click', function () {
    const newDepositInput = parseFloat(depositInputField.value);
    depositInputField.value = '';
    if (isNaN(newDepositInput) || newDepositInput < 0) {
        alert('Enter a valid deposit amount');
        return;
    }
    const previousDepositInput = parseFloat(depositAmount.innerText);
    const totalDeposit = previousDepositInput + newDepositInput;
    depositAmount.innerText = totalDeposit.toFixed(2);

    // Update Total Balance
    const previousTotalBalance = parseFloat(totalBalance.innerText);
    const currentTotalBalance = previousTotalBalance + newDepositInput;
    totalBalance.innerText = currentTotalBalance.toFixed(2)

    

})

const withdrawButton = document.querySelector('#withdraw-button');
const withdrawInputField = document.querySelector('#withdraw-input-field');
const withdrawAmount = document.querySelector('#withdraw-amount');

withdrawButton.addEventListener('click', function () {
    const newWithdrawInput = parseFloat(withdrawInputField.value);
    withdrawInputField.value = ''

    if (isNaN(newWithdrawInput) || newWithdrawInput < 0) {
        alert('Enter a valid withdraw amount');
        return;
    }

    const previousWithdrawInput = parseFloat(withdrawAmount.innerText);
    const totalWithdrawAmount = previousWithdrawInput + newWithdrawInput;
    
    if (totalWithdrawAmount > parseFloat(totalBalance.innerText)) {
        alert('Insufficient Balance');
        return;
    }

    withdrawAmount.innerText = totalWithdrawAmount.toFixed(2);
    
    // subtracting the withdrawal amount
    const previousTotalBalance = parseFloat(totalBalance.innerText);
    const currentTotalBalance = previousTotalBalance - newWithdrawInput;
    totalBalance.innerText = currentTotalBalance;

})

