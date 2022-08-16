function getInputValue(inputIdPart) {
    const inputField = document.getElementById(inputIdPart + '-field');
    const inputValueTxt = inputField.value;
    const inputValue = parseFloat(inputValueTxt);

    inputField.value = '';
    return inputValue;
}

// 
function nullEntryMsg(errorIdPart) {
    const error = document.getElementById(errorIdPart + '-error');

    if (errorIdPart == 'income') {
        error.innerText = ('Income is required with integer numbers!');
    }
    if (errorIdPart == 'food') {
        error.innerText = ('Food is required with integer numbers!');
    }

    if (errorIdPart == 'rent') {
        error.innerText = ('Rent required with integer numbers!');
    }

    if (errorIdPart == 'clothes') {
        error.innerText = ('Clothes is required with integer numbers!');
    }

}

//string error
function stringError(errorIdPart) {
    const errorId = document.getElementById(errorIdPart + '-error');
    errorId.innerText = 'Integer is required!';
}


// 

function checkInputValue(inputIdPart) {
    // got value
    const inputValue = getInputValue(inputIdPart);
    const nullEntry = nullEntryMsg(inputIdPart);
    const errorId = document.getElementById(inputIdPart + '-error');
    //check value
    if (inputValue == null || isNaN(inputValue)) {
        return (nullEntry);
    }
    else {
        errorId.style.display = 'none';
        return (inputValue);
    }
}


function expenses() {
    // food
    const foodInputValue = checkInputValue('food');
    // income
    const rentInputValue = checkInputValue('rent');
    // income
    const clothesInputValue = checkInputValue('clothes');
    // total 
    const totalExpense = foodInputValue + rentInputValue + clothesInputValue;

    return (totalExpense);

}

// save amount
function getSaveAmount(inputIdPart) {
    // console.log(existingBalance);
    const saveField = document.getElementById(inputIdPart + '-field');
    const saveInputValue = getInputValue(inputIdPart);
    // console.log(saveInputValue);

    const existingBalanceField = document.getElementById('existing-balance');
    const existingBalanceTxt = existingBalanceField.innerText;
    const existingBalanceValue = parseFloat(existingBalanceTxt);
    const saveAmount = (existingBalanceValue * saveInputValue) / 100;
    return saveAmount;
}



// calculateButton
document.getElementById('cal-btn').addEventListener('click', () => {
    // income
    const incomeInputValue = checkInputValue('income');

    const totalExpense = expenses();
    //  set total expense to total Expense section
    document.getElementById('total-expense').innerText = totalExpense;

    //   calculate Existing Balance 
    const existingBalanceField = document.getElementById('existing-balance');
    const existingBalance = incomeInputValue - totalExpense;
    // const existingBalance = getExistingBalance();
    existingBalanceField.innerText = existingBalance;
});

// save section
document.getElementById('saving-btn').addEventListener('click', () => {
    const saveAmount = getSaveAmount('saving');
    // console.log(saveAmount);
    document.getElementById('saving-amount').innerText = saveAmount;

    // remaining balance
    const remainingField = document.getElementById('remaining-amount');
    const existingBalanceTxt = document.getElementById('existing-balance').innerText;
    const existingBalanceValue = parseFloat(existingBalanceTxt);

    // calculate
    const remainingBalance = existingBalanceValue - saveAmount;
    remainingField.innerText = remainingBalance;
   
});