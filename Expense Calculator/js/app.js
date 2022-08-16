// checking input is a number or not 
function checkInputIsInteger(errorIdPart){
    const inputField = document.getElementById(errorIdPart+'-field');
    const inputValue = inputField.value;
    
    const numberError = document.getElementById('number-input-error');
    
    if(isNaN(inputValue)){
        // console.log('Please input a Number');
        numberError.style.textAlign = 'center';
        numberError.style.color = 'red';
        numberError.style.paddingTop = '15px';
        numberError.innerText = 'Please input a Number.';
    }
    else if(inputValue < 0){
        // not working properly
        console.log('0 theke soto');
        numberError.innerText = 'Please input a Number.';
    }
    else{
        numberError.style.display = 'none';
        inputField.value = '';
        return inputValue;
    }
    inputField.value = '';
}


// calculate function
function getcalculateValue(errorIdPart){
    const incomeField = document.getElementById(errorIdPart+'-field');
    // const incomeInput = incomeField.value;
    const incomeInput = checkInputIsInteger(errorIdPart+'field');
    const incomeInputValue = parseFloat(incomeInput); //Input Value
    return (incomeInputValue);
}

//errors for null entry
function nullEntryMsg(errorIdPart){
    const error = document.getElementById(errorIdPart+'-error');
    if(errorIdPart == 'income'){
        error.innerText =('Income is empty!');
    }
    if(errorIdPart == 'food'){
        error.innerText =('Food is empty!');
    }
    
    if(errorIdPart == 'rent'){
        error.innerText =('Rent is empty!');
    }
    
    if(errorIdPart == 'clothes'){
        error.innerText =('Clothes is empty!');
    }
    
}



// calculateButton
document.getElementById('cal-btn').addEventListener('click', () => {
    // error
    const incomeError = document.getElementById('income-error');
    // Income field
    const incomeInputValue = getcalculateValue('income-field');
    if(!isNaN(incomeInputValue)){
        incomeError.style.display = 'none';
        return (incomeInputValue);
    }
    else{
        nullEntryMsg('income');
        
    }
    // food field
    const foodInputValue = getcalculateValue('food-field');
    // console.log(foodInputValue);
    const foodError = document.getElementById('food-error');
    if(!isNaN(foodInputValue)){
        foodError.style.display = 'none';
        return (foodInputValue);
    }
    else{
        nullEntryMsg('food');
    }
    
    // rent
    const rentInputValue = getcalculateValue('rent-field');
    // console.log(rentInputValue);
    const rentError = document.getElementById('rent-error');
    if(!isNaN(rentInputValue)){
        rentError.style.display = 'none';
        return (rentInputValue);
    }
    else{
        nullEntryMsg('rent');
    }
    
    // clothes
    const clothesInputValue = getcalculateValue('clothes-field');
    const clothrsError = document.getElementById('clothes-error');
    if(!isNaN(clothesInputValue)){
        clothrsError.style.display = 'none';
        return (clothesInputValue);
    }
    else{
        nullEntryMsg('clothes')
    }
    // console.log(clothesInputValue);

    const totalExpense = foodInputValue + rentInputValue + clothesInputValue;
    // console.log(totalExpense);

});
