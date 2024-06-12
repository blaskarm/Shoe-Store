class Shoe {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const shoes = [
    new Shoe(1, 'Adidas VL Court 3.0', 829.00, 'images/adidas1.webp'),
    new Shoe(2, 'Nike Dunk Low Retro', 1449.00, 'images/nike1.webp'),
    new Shoe(3, 'Adidas Forum Low CL', 1349.00, 'images/adidas2.webp'),
    new Shoe(4, 'Selected Homme Black', 1199.00, 'images/selectedhomme1.webp'),
    new Shoe(5, 'Nike SB Chron 2', 487.00, 'images/nike2.webp'),
    new Shoe(6, 'Selected Homme Grey', 1199.00, 'images/selectedhomme2.webp'),
    new Shoe(7, 'New Balance 306', 1049.00, 'images/newbalance1.webp'),
    new Shoe(8, 'Vans OLD Skool Grey', 552.00, 'images/vans1.webp'),
    new Shoe(9, 'Adidas Stan Smith', 1249.00, 'images/adidas3.webp'),
    new Shoe(10, 'Adidas Galaxy 6', 449.00, 'images/adidas4.webp'),
    new Shoe(11, 'Phantom Trail', 899.00, 'images/phantom.webp'),
    new Shoe(12, 'Karhu Fusion 2.0', 1700.00, 'images/karhu.webp'),
];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const productElement = event.target.closest('.product');
        const productId = productElement.dataset.id;
        const shoe = shoes.find(shoe => shoe.id == productId);
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(shoe);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    });
});

function updateCart() {
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
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

updateCart();
