function getInputValue(inputIdPart) {
    const inputField = document.getElementById(inputIdPart + '-input');
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);

    inputField.value = '';
    return inputValue;
}

// update Value
function getUpdateValue(inputIdPart, inputValue) {
    // total-tag
    const totalFieldText = document.getElementById(inputIdPart + '-total');
    const prevuousTotalValue = parseFloat(totalFieldText.innerText);
    // calculate
    const totalValue = inputValue + prevuousTotalValue;
    // set value to total field
    totalFieldText.innerText = totalValue;

    // return totalValue; -. return isn't needed for this section cause, totalValue will not be use in this hole project.
}

// 
function getUpdateBalance(inputValue, checkDepositOrWithdraw) {
    const balanceField = document.getElementById('balance-total');
    /* 
    const previousBalanceValue = parseFloat(balanceField.innerText); */
    // console.log(previousBalanceValue);
    const previousBalanceValue = getInnerTextValue('balance-total');
    if (checkDepositOrWithdraw == true) {
        const totalBalance = previousBalanceValue + inputValue;
        balanceField.innerText = totalBalance;
    }
    else {
        const totalBalance = previousBalanceValue - inputValue;
        balanceField.innerText = totalBalance;
    }

}

// innerTextValue
function getInnerTextValue(inputId) {
    const innerTextTag = document.getElementById(inputId);
    const fieldValueInText = innerTextTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

document.getElementById('deposit-btn').addEventListener('click', () => {
    const depositInputValue = getInputValue('deposit');

    if (depositInputValue > 0 && !isNaN(depositInputValue)) {
        getUpdateValue('deposit', depositInputValue);
        getUpdateBalance(depositInputValue, true);
    }
});

// 
document.getElementById('withdraw-btn').addEventListener('click', () => {
    const withdrawInputValue = getInputValue('withdraw');

    const balanceValue = getInnerTextValue('balance-total');

    if (withdrawInputValue > 0 && !isNaN(withdrawInputValue)) {
        if (balanceValue > withdrawInputValue) {
            getUpdateValue('withdraw', withdrawInputValue);
            getUpdateBalance(withdrawInputValue, false);
        }
        else {
            document.getElementById('enough-withdraw').innerText = ('ops!! You do not have enough balance. Withdraw is not possible!');
        }
    }


})