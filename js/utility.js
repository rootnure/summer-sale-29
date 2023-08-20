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

function resetToDefault() {
    discountPercentage = 0;

    const defaultAmountString = '0.00TK';
    document.querySelector('#final-total').innerText = defaultAmountString;
    document.querySelector('#discount-price').innerText = defaultAmountString;
    document.querySelector('#total-price').innerText = defaultAmountString;
    document.querySelector('#cart-items').innerText = '';
    document.querySelector('#make-purchase-btn').setAttribute('disabled', true);
    document.querySelector('#coupon-apply-btn').setAttribute('disabled', true);
}

document.querySelector('.modal-action button').addEventListener('click', function () {
    resetToDefault();
    window.location.href = 'index.html';
});

resetToDefault();