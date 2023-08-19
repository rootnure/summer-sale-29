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
}
