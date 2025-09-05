// 💳 Payment System Integration for Ramenzoni E-Shop
// This file demonstrates how credit card payments would work

class RamenzoniPayments {
    constructor() {
        // Initialize Stripe (demo key)
        this.stripe = window.Stripe ? Stripe('pk_test_demo') : null;
        this.isDemo = true; // Remove in production
        
        this.init();
    }

    init() {
        // Add payment buttons to existing product cards
        this.addPaymentButtons();
        
        // Listen for payment events
        this.setupEventListeners();
    }

    addPaymentButtons() {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const productId = card.querySelector('.add-to-cart-btn')?.getAttribute('data-product-id');
            if (!productId) return;
            
            const product = getProductById(parseInt(productId));
            if (!product) return;
            
            // Create "Buy Now" button
            const buyNowBtn = this.createBuyNowButton(product);
            
            // Add after the "Add to Cart" button
            const addToCartBtn = card.querySelector('.add-to-cart-btn');
            if (addToCartBtn) {
                addToCartBtn.parentNode.insertBefore(buyNowBtn, addToCartBtn.nextSibling);
            }
        });
    }

    createBuyNowButton(product) {
        const button = document.createElement('button');
        button.className = 'buy-now-btn';
        button.innerHTML = `💳 ${t('payment.buyNow')} ${formatPrice(product.price)}`;
        button.setAttribute('data-product-id', product.id);
        
        // Add specific styling for payment button
        button.style.cssText = `
            background: linear-gradient(135deg, #00D4AA, #01B89A);
            color: white;
            border: none;
            padding: 0.75rem 1rem;
            border-radius: 6px;
            font-weight: 600;
            margin-top: 0.5rem;
            width: 100%;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
        `;
        
        return button;
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('buy-now-btn')) {
                const productId = parseInt(e.target.getAttribute('data-product-id'));
                const product = getProductById(productId);
                
                if (product) {
                    this.initiatePayment(product);
                }
            }
            
            // Checkout from cart
            if (e.target.id === 'checkoutBtnCard') {
                this.checkoutCart();
            }
        });
    }

    async initiatePayment(product) {
        if (this.isDemo) {
            this.showDemoPayment(product);
            return;
        }
        
        try {
            // Show loading
            this.showPaymentLoading(true);
            
            // Create checkout session
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: [{
                        id: product.id,
                        name: getProductName(product),
                        price: product.price,
                        quantity: 1
                    }],
                    currency: 'eur',
                    successUrl: window.location.origin + '/success.html',
                    cancelUrl: window.location.origin + '/cancel.html'
                })
            });
            
            const session = await response.json();
            
            // Redirect to Stripe Checkout
            const result = await this.stripe.redirectToCheckout({
                sessionId: session.id
            });
            
            if (result.error) {
                this.showPaymentError(result.error.message);
            }
            
        } catch (error) {
            this.showPaymentError('Errore durante il pagamento. Riprova.');
            console.error('Payment error:', error);
        } finally {
            this.showPaymentLoading(false);
        }
    }

    async checkoutCart() {
        const cartItems = getCartItems(); // Assuming this function exists
        
        if (cartItems.length === 0) {
            alert(t('cart.empty'));
            return;
        }
        
        if (this.isDemo) {
            this.showDemoCartPayment(cartItems);
            return;
        }
        
        try {
            this.showPaymentLoading(true);
            
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems.map(item => ({
                        id: item.id,
                        name: getProductName(item.product),
                        price: item.product.price,
                        quantity: item.quantity
                    })),
                    currency: 'eur',
                    successUrl: window.location.origin + '/success.html',
                    cancelUrl: window.location.origin + '/cancel.html'
                })
            });
            
            const session = await response.json();
            
            const result = await this.stripe.redirectToCheckout({
                sessionId: session.id
            });
            
            if (result.error) {
                this.showPaymentError(result.error.message);
            }
            
        } catch (error) {
            this.showPaymentError('Errore durante il pagamento. Riprova.');
            console.error('Cart payment error:', error);
        } finally {
            this.showPaymentLoading(false);
        }
    }

    showDemoPayment(product) {
        const modal = document.createElement('div');
        modal.className = 'payment-demo-modal';
        modal.innerHTML = `
            <div class="payment-demo-content">
                <h3>💳 Demo Pagamento con Carta</h3>
                <div class="demo-product">
                    <h4>${getProductName(product)}</h4>
                    <p class="demo-price">${formatPrice(product.price)}</p>
                </div>
                <div class="demo-card-form">
                    <div class="card-field">
                        <label>Numero Carta</label>
                        <input type="text" value="4242 4242 4242 4242" readonly>
                    </div>
                    <div class="card-row">
                        <div class="card-field">
                            <label>Scadenza</label>
                            <input type="text" value="12/25" readonly>
                        </div>
                        <div class="card-field">
                            <label>CVC</label>
                            <input type="text" value="123" readonly>
                        </div>
                    </div>
                </div>
                <div class="demo-actions">
                    <button class="demo-pay-btn" onclick="this.closest('.payment-demo-modal').remove(); alert('✅ Pagamento simulato completato!')">
                        💳 Paga ${formatPrice(product.price)}
                    </button>
                    <button class="demo-cancel-btn" onclick="this.closest('.payment-demo-modal').remove()">
                        Annulla
                    </button>
                </div>
                <p class="demo-note">
                    🧪 <strong>Questa è una demo</strong><br>
                    In produzione, i clienti vedranno il form Stripe sicuro
                </p>
            </div>
        `;
        
        // Add demo styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;
        
        const content = modal.querySelector('.payment-demo-content');
        content.style.cssText = `
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 400px;
            width: 90%;
            text-align: center;
        `;
        
        document.body.appendChild(modal);
    }

    showDemoCartPayment(cartItems) {
        const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        
        const modal = document.createElement('div');
        modal.className = 'payment-demo-modal';
        modal.innerHTML = `
            <div class="payment-demo-content">
                <h3>💳 Demo Pagamento Carrello</h3>
                <div class="demo-cart-summary">
                    ${cartItems.map(item => `
                        <div class="demo-cart-item">
                            <span>${getProductName(item.product)} x${item.quantity}</span>
                            <span>${formatPrice(item.product.price * item.quantity)}</span>
                        </div>
                    `).join('')}
                    <div class="demo-total">
                        <strong>Totale: ${formatPrice(total)}</strong>
                    </div>
                </div>
                <div class="demo-actions">
                    <button class="demo-pay-btn" onclick="this.closest('.payment-demo-modal').remove(); alert('✅ Pagamento carrello simulato completato!'); clearCart();">
                        💳 Paga ${formatPrice(total)}
                    </button>
                    <button class="demo-cancel-btn" onclick="this.closest('.payment-demo-modal').remove()">
                        Annulla
                    </button>
                </div>
                <p class="demo-note">
                    🧪 <strong>Demo</strong> - In produzione sarà Stripe Checkout
                </p>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;
        
        const content = modal.querySelector('.payment-demo-content');
        content.style.cssText = `
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            text-align: center;
        `;
        
        document.body.appendChild(modal);
    }

    showPaymentLoading(show) {
        if (show) {
            const loader = document.createElement('div');
            loader.id = 'payment-loader';
            loader.innerHTML = `
                <div class="loader-content">
                    <div class="spinner"></div>
                    <p>Elaborazione pagamento...</p>
                </div>
            `;
            loader.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                color: white;
            `;
            document.body.appendChild(loader);
        } else {
            const loader = document.getElementById('payment-loader');
            if (loader) loader.remove();
        }
    }

    showPaymentError(message) {
        alert(`❌ Errore Pagamento: ${message}`);
    }
}

// Add payment translations
if (typeof translations !== 'undefined') {
    translations.it['payment.buyNow'] = 'Acquista Ora';
    translations.cz['payment.buyNow'] = 'Koupit Nyní';
    translations.en['payment.buyNow'] = 'Buy Now';
    
    translations.it['payment.processing'] = 'Elaborazione pagamento...';
    translations.cz['payment.processing'] = 'Zpracování platby...';
    translations.en['payment.processing'] = 'Processing payment...';
}

// Initialize payment system when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait for other scripts to load
    setTimeout(() => {
        window.ramenzoniPayments = new RamenzoniPayments();
        console.log('💳 Payment system initialized (Demo Mode)');
    }, 1000);
});

// Add payment button to cart
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const cartFooter = document.querySelector('.cart-footer');
        if (cartFooter) {
            const checkoutBtn = document.getElementById('checkoutBtn');
            if (checkoutBtn) {
                // Add card payment button
                const cardBtn = document.createElement('button');
                cardBtn.id = 'checkoutBtnCard';
                cardBtn.className = 'checkout-btn-card';
                cardBtn.innerHTML = '💳 Paga con Carta';
                cardBtn.style.cssText = `
                    background: linear-gradient(135deg, #00D4AA, #01B89A);
                    color: white;
                    border: none;
                    padding: 0.75rem 1rem;
                    border-radius: 6px;
                    width: 100%;
                    font-weight: 600;
                    margin-top: 0.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                `;
                
                checkoutBtn.parentNode.insertBefore(cardBtn, checkoutBtn.nextSibling);
            }
        }
    }, 1500);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RamenzoniPayments;
}
