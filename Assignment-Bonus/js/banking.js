function getInputValue(inputIdPart) {
    const inputField = document.getElementById(inputIdPart + '-input');
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);

    inputField.value = '';
    return inputValue;
}

// update Value
function getUpdateValue(inputIdPart) {
    const inputValue = getInputValue(inputIdPart);
    // total-tag
    const totalFieldText = document.getElementById(inputIdPart + '-total');
    const prevuousTotalValue = parseFloat(totalFieldText.innerText);
    // calculate
    const totalValue = inputValue + prevuousTotalValue;
    // set value to total field
    totalFieldText.innerText = totalValue;

    return totalValue;
}

document.getElementById('deposit-btn').addEventListener('click', () => {
    // const inputValue = getInputValue('deposit');
    const totalValue = getUpdateValue('deposit');

    console.log(totalValue);
});

// 
document.getElementById('withdraw-btn').addEventListener('click', () => {
    // const inputValue = getInputValue('withdraw');
    const totalValue = getUpdateValue('withdraw');
    console.log(totalValue);

})