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
        // 

        // 
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
        console.log(nullEntry);
    }
}



// calculateButton
document.getElementById('cal-btn').addEventListener('click', () => {
    const filteredInputValue = checkInputValue('income');

});