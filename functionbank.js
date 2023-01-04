function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const newInputAmountText = inputField.value;
    const newInputAmount = parseFloat(newInputAmountText);
    //clear input value
    inputField.value = ''
    return newInputAmount;
}

function totalUpdateField(totalFieldId, newDepositAmount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousAmount = parseFloat(totalText);
    totalElement.innerText = previousAmount + newDepositAmount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        //NEW deposit total
        totalUpdateField('deposit-total', newDepositAmount)

        //update account balance
        updateBalance(newDepositAmount, true)
    }



})

//withdraw money

document.getElementById('withdraw-button').addEventListener('click', function () {

    const newWithdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        //  set withdraw total
        totalUpdateField('withdraw-total', newWithdrawAmount)

        updateBalance(newWithdrawAmount, false)
    }
    if (newWithdrawAmount > currentBalance) {
        alert('you can not withdraw more than your balance')
    }


})
