function getInputValueById(elementId) {
    const inputField = document.querySelector('#'+elementId);
    const inputValueSting = inputField.value;
    const value = parseFloat(inputValueSting);
    return value;
}