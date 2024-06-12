function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((shoe, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${shoe.image}" alt="${shoe.name}" class="cart-img"> ${shoe.name} - $${shoe.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeFromCart(index);
        });
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    updateTotal();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function updateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, shoe) => sum + shoe.price, 0);
    document.getElementById('total-price').textContent = total.toFixed(2);
}

document.getElementById('buy-button').addEventListener('click', () => {
    alert('Thank you for your purchase!');
    localStorage.removeItem('cart');
    displayCart();
});

displayCart();
