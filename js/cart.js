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

    const totalPriceElement = pricesContainer.childNodes[1].childNodes[1];
    const totalPriceString = totalPriceElement.innerText.split('TK')[0];
    const previousTotalPrice = parseFloat(totalPriceString);

    const newTotalPrice = previousTotalPrice + newItemPrice;

    totalPriceElement.innerText = newTotalPrice.toFixed(2) + 'TK';

    pricesContainer.childNodes[5].childNodes[1].innerText = newTotalPrice.toFixed(2) + 'TK';

    const makePurchaseBtn = pricesContainer.parentNode.childNodes[9];
    makePurchaseBtn.removeAttribute('disabled');

    if(newTotalPrice >= 200) {
        const couponApplyBtn = document.querySelector('#coupon-apply-btn');
        couponApplyBtn.removeAttribute('disabled');
    }
}