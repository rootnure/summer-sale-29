let discountPercentage = 0;

function getValueForCart(target) {
    const priceString = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    const price = parseFloat(priceString);

    const product = target.childNodes[3].childNodes[3].innerText;

    addToCart(product, price);
}

function addToCart(item, price) {
    const cartItems = document.querySelector('#cart-items');

    const count = cartItems.childElementCount;

    const p = document.createElement('p');
    p.classList.add('text-xl');
    p.innerText = `${count + 1}. ${item}`;

    cartItems.appendChild(p);

    setTotalPrice(price);
}

function setTotalPrice(newItemPrice) {
    const pricesContainer = document.querySelector('#prices-container');

    const totalPriceElement = pricesContainer.childNodes[1].childNodes[1];
    const totalPriceString = totalPriceElement.innerText.split('TK')[0];
    const previousTotalPrice = parseFloat(totalPriceString);

    const newTotalPrice = previousTotalPrice + newItemPrice;

    totalPriceElement.innerText = `${newTotalPrice.toFixed(2)}TK`;

    const makePurchaseBtn = pricesContainer.parentNode.childNodes[9];
    makePurchaseBtn.removeAttribute('disabled');

    if(newTotalPrice >= 200) {
        const couponApplyBtn = document.querySelector('#coupon-apply-btn');
        couponApplyBtn.removeAttribute('disabled');
    }

    setDiscountAndFinalTotal();
}

function setDiscountAndFinalTotal() {
    const newTotalPrice = getElementValueById('total-price');

    const discountPrice = newTotalPrice * discountPercentage / 100;
    const discountStringValue = `${discountPrice.toFixed(2)}TK`;
    setElementValueById('discount-price', discountStringValue);
    
    const finalTotal = newTotalPrice - discountPrice;
    const finalTotalStringValue = `${finalTotal.toFixed(2)}TK`;
    setElementValueById('final-total', finalTotalStringValue);
}

document.querySelector('#coupon-apply-btn').addEventListener('click', function () {
    const couponByUser = getInputValueStringById('coupon-by-user');

    if(couponByUser === '') {
        alert('Please enter a coupon to apply');
        return;
    }

    const couponSuccessMsgElement = document.querySelector('#coupon-success-msg');
    const couponFailureMsgElement = document.querySelector('#coupon-failure-msg');

    if(discountPercentage === 0) {
        if(couponByUser === 'SELL200') {
            discountPercentage = 20;
            setDiscountAndFinalTotal();
            couponSuccessMsgElement.classList.remove('hidden');
            couponSuccessMsgElement.classList.add('block');
            couponFailureMsgElement.classList.remove('block');
            couponFailureMsgElement.classList.add('hidden');
        }
        else {
            couponSuccessMsgElement.classList.remove('block');
            couponSuccessMsgElement.classList.add('hidden');
            couponFailureMsgElement.classList.remove('hidden');
            couponFailureMsgElement.classList.add('block');
        }
    }
    else {
        const couponAlreadyAppliedMsg = document.querySelector('#coupon-already-applied-msg');
        couponAlreadyAppliedMsg.classList.remove('hidden');
    }
});