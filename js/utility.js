function getInputValueStringById(elementId) {
    const inputField = document.querySelector('#'+elementId);
    const inputValueSting = inputField.value;
    inputField.value = '';
    return inputValueSting;
}

function getElementValueById(elementId) {
    const element = document.querySelector('#'+elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setElementValueById(elementId, value) {
    const element = document.querySelector('#'+elementId);
    element.innerText = value;
}

document.querySelector('.modal-action button').addEventListener('click', function () {
    window.location.href = 'index.html';
});