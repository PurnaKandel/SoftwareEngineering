// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add product to cart
function addToCart(productName) {
    const existingProduct = cart.find(item => item.name === productName);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: productName,
            quantity: 1,
            price: 999 // Default price, can be customized
        });
    }
    
    saveCart();
    updateCartDisplay();
    showNotification(`${productName} added to cart!`);
}

// Remove product from cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    saveCart();
    updateCartDisplay();
}

// Update quantity
function updateQuantity(productName, quantity) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity = Math.max(1, quantity);
        saveCart();
        updateCartDisplay();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Display cart items
function displayCart() {
    const cartContent = document.querySelector('.cart-modal-content');
    if (!cartContent) return;
    
    if (cart.length === 0) {
        cartContent.innerHTML = '<p>Your cart is empty</p>';
        return;
    }
    
    let html = '<h2>Shopping Cart</h2><table class="cart-table"><tr><th>Product</th><th>Qty</th><th>Price</th><th>Action</th></tr>';
    
    cart.forEach(item => {
        html += `<tr>
            <td>${item.name}</td>
            <td><input type="number" value="${item.quantity}" onchange="updateQuantity('${item.name}', this.value)"></td>
            <td>Rs. ${item.price}</td>
            <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
        </tr>`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    html += '</table>';
    html += `<p><strong>Total: Rs. ${total}</strong></p>`;
    html += '<button class="checkout-btn">Checkout</button>';
    
    cartContent.innerHTML = html;
}

// Update cart display in header
function updateCartDisplay() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartButton = document.querySelector('.cart');
    if (cartButton) {
        cartButton.textContent = `🛒Cart (${cartCount})`;
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Toggle cart modal
function toggleCartModal() {
    const modal = document.querySelector('.cart-modal');
    if (modal) {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        if (modal.style.display === 'block') {
            displayCart();
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.card button');
    addToCartButtons.forEach((button, index) => {
        const productName = button.parentElement.querySelector('h3').textContent;
        button.addEventListener('click', () => addToCart(productName));
    });
    
    // Add event listener to cart button
    const cartButton = document.querySelector('.cart');
    if (cartButton) {
        cartButton.addEventListener('click', toggleCartModal);
    }
    
    // Create cart modal
    if (!document.querySelector('.cart-modal')) {
        const modal = document.createElement('div');
        modal.className = 'cart-modal';
        modal.innerHTML = '<div class="cart-modal-content"></div>';
        document.body.appendChild(modal);
    }
    
    // Update cart display on load
    updateCartDisplay();
});
