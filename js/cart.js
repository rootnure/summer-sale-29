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
    p.innerHTML = `
        ${count + 1}. ${item}
    `;

    cartItems.appendChild(p);

    setTotalPrice(price);
}

function setTotalPrice(newItemPrice) {
    const pricesContainer = document.querySelector('#prices-container');

    const totalPriceElement = pricesContainer.childNodes[1].childNodes[1]
    const totalPriceString = totalPriceElement.innerText.split('TK')[0];
    const previousTotalPrice = parseFloat(totalPriceString);

    const newTotalPrice = previousTotalPrice + newItemPrice;

    totalPriceElement.innerText = newTotalPrice.toFixed(2) + 'TK';

    if(newTotalPrice > 0) {
        const element = pricesContainer.parentNode.childNodes[9];
        toggleMakePurchaseBtn(element, true);

        const discountPriceElement = pricesContainer.childNodes[3];
        const finalPriceElement = pricesContainer.childNodes[5];
        calculateDiscountAndFinalPrice(newTotalPrice, discountPriceElement, finalPriceElement);
    }

    if(newTotalPrice >= 200) {
        toggleCouponApplyBtn(true);
    }
}

const coupons = { 'SELL200': 20 };

let discountPercentage = 0;

function calculateDiscountAndFinalPrice(totalPrice, discountAmountElement, finalAmountElement) {
    let discountAmount = 0;

    const finalAmountString = finalAmountElement.childNodes[1].innerText.split('TK')[0];
    let finalAmount = parseFloat(finalAmountString);

    if(discountPercentage > 0) {
        discountAmount = totalPrice * discountPercentage / 100;
    }
    
    finalAmount = totalPrice - discountAmount;
    discountAmountElement.childNodes[1].innerText = discountAmount.toFixed(2) + 'TK';

    finalAmountElement.childNodes[1].innerText = finalAmount.toFixed(2) + ' TK';
}

function toggleMakePurchaseBtn(makePurchaseBtn, isActive) {
    if(isActive) {
        makePurchaseBtn.removeAttribute('disabled');
    }
}

function toggleCouponApplyBtn(isActive) {
    const couponApplyBtn = document.querySelector('#coupon-apply-btn');
    if(isActive) {
        couponApplyBtn.removeAttribute('disabled');
    }
}