// Shopping cart functionality
let cart = JSON.parse(localStorage.getItem('ramenzoni-cart')) || [];

// Add item to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
    saveCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCart();
}

// Update item quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCart();
        saveCart();
    }
}

// Calculate cart total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartItemCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('ramenzoni-cart', JSON.stringify(cart));
}

// Create cart item HTML
function createCartItemHTML(item) {
    return `
        <div class="cart-item" data-product-id="${item.id}">
            <div class="cart-item-image">
                ${item.image}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name[currentLanguage] || item.name.it}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn decrease" data-product-id="${item.id}">-</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn increase" data-product-id="${item.id}">+</button>
            </div>
        </div>
    `;
}

// Update cart display
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    // Update cart count
    const itemCount = getCartItemCount();
    if (cartCount) {
        cartCount.textContent = itemCount;
        cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
    }
    
    // Update cart items
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #666;">
                    ${t('cart.empty')}
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => createCartItemHTML(item)).join('');
            
            // Add event listeners for quantity buttons
            cartItems.querySelectorAll('.quantity-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.getAttribute('data-product-id'));
                    const isIncrease = e.target.classList.contains('increase');
                    const currentItem = cart.find(item => item.id === productId);
                    
                    if (currentItem) {
                        const newQuantity = isIncrease ? 
                            currentItem.quantity + 1 : 
                            currentItem.quantity - 1;
                        updateQuantity(productId, newQuantity);
                    }
                });
            });
        }
    }
    
    // Update total
    const total = getCartTotal();
    if (cartTotal) {
        cartTotal.textContent = formatPrice(total);
    }
    
    // Update checkout button
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
    
    // Update checkout modal total
    const checkoutTotal = document.getElementById('checkoutTotal');
    if (checkoutTotal) {
        checkoutTotal.textContent = formatPrice(total);
    }
    
    // Update checkout items
    updateCheckoutItems();
}

// Update checkout items display
function updateCheckoutItems() {
    const checkoutItems = document.getElementById('checkoutItems');
    if (!checkoutItems) return;
    
    checkoutItems.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>${item.name[currentLanguage] || item.name.it} x${item.quantity}</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');
}

// Show cart sidebar
function showCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) cartSidebar.classList.add('open');
    if (cartOverlay) cartOverlay.classList.add('show');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Hide cart sidebar
function hideCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) cartSidebar.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('show');
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Show checkout modal
function showCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.classList.add('show');
        updateCheckoutItems();
    }
    hideCart();
}

// Hide checkout modal
function hideCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.classList.remove('show');
    }
}

// Clear cart
function clearCart() {
    cart = [];
    updateCart();
    saveCart();
}

// Process order
function processOrder(orderData) {
    // In a real application, this would send data to a server
    console.log('Processing order:', orderData);
    
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            // Clear cart after successful order
            clearCart();
            resolve({ success: true, orderId: Date.now() });
        }, 1000);
    });
}

// Initialize cart event listeners
function initCart() {
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', showCart);
    }
    
    // Close cart button
    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', hideCart);
    }
    
    // Cart overlay
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', hideCart);
    }
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', showCheckout);
    }
    
    // Close checkout button
    const closeCheckout = document.getElementById('closeCheckout');
    if (closeCheckout) {
        closeCheckout.addEventListener('click', hideCheckout);
    }
    
    // Checkout form
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(checkoutForm);
            const orderData = {
                items: cart,
                total: getCartTotal(),
                customer: {
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    address: formData.get('address'),
                    city: formData.get('city'),
                    postalCode: formData.get('postalCode'),
                    country: formData.get('country')
                },
                payment: {
                    method: formData.get('payment')
                }
            };
            
            // Show loading state
            const submitBtn = checkoutForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Elaborazione...';
            submitBtn.disabled = true;
            
            try {
                const result = await processOrder(orderData);
                
                if (result.success) {
                    alert(t('order.success'));
                    hideCheckout();
                    checkoutForm.reset();
                } else {
                    alert(t('order.error'));
                }
            } catch (error) {
                console.error('Order processing error:', error);
                alert(t('order.error'));
            } finally {
                // Restore button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // ESC key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideCart();
            hideCheckout();
        }
    });
    
    // Update cart display on initialization
    updateCart();
}
