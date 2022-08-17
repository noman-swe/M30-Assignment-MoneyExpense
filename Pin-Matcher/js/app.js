function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    // console.log(pin);
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

// 
function generatedPin(){
    const pin = getPin();
    document.getElementById('displayPin-field').value = pin;
}

// 
document.getElementById('submit-btn').addEventListener('click', () => {
    const generatedPin = document.getElementById('displayPin-field').value;
    const typedFieldValue = document.getElementById('display-typedNum').value;
    
    const failed = document.getElementById('notify-failed');
    const success= document.getElementById('notify-success');
    if(generatedPin == typedFieldValue){
        failed.style.display = 'none';
        success.style.display = 'block';
    }else{
        failed.style.display = 'block';
        success.style.display = 'none';
    }
});
// generate-btn
document.getElementById('generate-btn').addEventListener('click', function () {
    generatedPin();
});

// keypad
document.getElementById('keypad').addEventListener('click', function (event) {
    const typedValue = event.target.innerText;
    const typedField = document.getElementById('display-typedNum');
    // typedField.value = typedValue;

    if (isNaN(typedValue)) {
        // console.log('String');
        if(typedValue == 'C'){
            typedField.value = '';
        }
    } 
    else {
        const previousNumber = typedField.value;
        const newNumber = previousNumber + typedValue;
        typedField.value = newNumber;
    }

});

