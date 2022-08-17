function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

// set random pin value in the display field
function generatePin(pin) {
    document.getElementById('displayPin-field').value = pin;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    const pin = getPin();
    generatePin(pin);
});

// get keypad value
document.getElementById('keypad').addEventListener('click', function (event) {
    // get typed pin
    const typedNum = (event.target.innerText);
    const typedField = document.getElementById('display-typedNum');
    if (isNaN(typedNum)) {
        if (typedNum == 'C') {
            typedField.value = '';
        }
    } else {
        const previousNumber = typedField.value;
        typedField.value = (previousNumber + typedNum);
    }
});

// compare between random pin & typed pin
document.getElementById('submit-btn').addEventListener('click', () => {
    const typedPin = document.getElementById('display-typedNum').value;
    const generatedPin = document.getElementById('displayPin-field').value;

    const success = document.getElementById('notify-success');
    const failed = document.getElementById('notify-failed');

    if (typedPin == generatedPin) {
        success.style.display = 'block';
        failed.style.display = 'none';
    } else {
        failed.style.display = 'block';
        success.style.display = 'none';
    }

}); 