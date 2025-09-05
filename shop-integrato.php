<?php
/**
 * Shop Online - Caffè Ramenzoni
 * Pagina integrata per il sito ramenzoni.eu
 */

// Header del sito esistente (da personalizzare in base al template del sito)
?>
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop Online - Caffè Ramenzoni Parma Praha</title>
    <meta name="description" content="Acquista online i migliori caffè di Caffè Ramenzoni. Miscele tradizionali, monorigine e attrezzature professionali.">
    
    <!-- CSS del sito esistente (da adattare) -->
    <style>
    /* CSS base che matcha il design di ramenzoni.eu */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background: #FAFAFA;
    }
    
    /* Header semplice che matcha il sito esistente */
    .site-header {
        background: white;
        padding: 1rem 0;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        text-align: center;
    }
    
    .site-header h1 {
        margin: 0;
        color: #8B4513;
        font-size: 2rem;
    }
    
    .site-header .tagline {
        color: #666;
        font-style: italic;
    }
    
    .back-link {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        text-decoration: none;
        color: #8B4513;
        font-weight: bold;
    }
    
    .back-link:hover {
        color: #D2691E;
    }
    
    /* Container per l'e-shop */
    .eshop-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    </style>
    
    <!-- CSS dell'e-shop -->
    <link rel="stylesheet" href="shop/css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header semplice integrato -->
    <header class="site-header">
        <a href="/" class="back-link">← Torna al sito</a>
        <h1>Caffè Ramenzoni</h1>
        <p class="tagline">Shop Online • Parma • Praha</p>
    </header>

    <div class="eshop-container">
        <!-- Contenuto E-Shop -->
        
        <!-- Language Selector -->
        <div style="text-align: right; margin-bottom: 20px;">
            <select id="languageSelect" style="padding: 8px; border-radius: 4px; border: 1px solid #ddd;">
                <option value="it">🇮🇹 Italiano</option>
                <option value="cz">🇨🇿 Čeština</option>
                <option value="en">🇬🇧 English</option>
            </select>
            
            <button class="cart-btn" id="cartBtn" style="margin-left: 15px; background: #8B4513; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer;">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-count" id="cartCount" style="background: #D2691E; color: white; border-radius: 50%; width: 20px; height: 20px; font-size: 12px; display: none; position: absolute; top: -8px; right: -8px;">0</span>
                <span data-translate="cart.title">Carrello</span>
            </button>
        </div>

        <!-- Hero Section Semplificata -->
        <section class="hero" style="background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%); color: white; padding: 3rem 2rem; border-radius: 8px; text-align: center; margin-bottom: 3rem;">
            <h2 data-translate="hero.title" style="font-size: 2.5rem; margin-bottom: 1rem;">L'Arte del Caffè Italiano</h2>
            <p data-translate="hero.subtitle" style="font-size: 1.2rem; opacity: 0.9; max-width: 600px; margin: 0 auto;">Dalle colline di Parma alle vie di Praga, portiamo la tradizione italiana del caffè direttamente a casa tua.</p>
        </section>

        <!-- Products Section -->
        <section id="products" class="products-section">
            <h2 class="section-title" data-translate="products.title" style="text-align: center; color: #8B4513; font-size: 2.5rem; margin-bottom: 3rem;">I Nostri Caffè</h2>
            
            <!-- Product Categories -->
            <div class="product-categories" style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap;">
                <button class="category-btn active" data-category="all" data-translate="categories.all">Tutti</button>
                <button class="category-btn" data-category="blends" data-translate="categories.blends">Miscele</button>
                <button class="category-btn" data-category="single-origin" data-translate="categories.single">Monorigine</button>
                <button class="category-btn" data-category="capsules" data-translate="categories.capsules">Capsule</button>
                <button class="category-btn" data-category="equipment" data-translate="categories.equipment">Attrezzature</button>
            </div>

            <!-- Products Grid -->
            <div class="products-grid" id="productsGrid">
                <!-- Products will be loaded dynamically -->
            </div>
        </section>
    </div>

    <!-- Cart Sidebar -->
    <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header">
            <h3 data-translate="cart.title">Carrello</h3>
            <button class="close-cart" id="closeCart">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="cart-items" id="cartItems">
            <!-- Cart items will be populated here -->
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span data-translate="cart.total">Totale: </span>
                <span id="cartTotal">€0.00</span>
            </div>
            <button class="checkout-btn" id="checkoutBtn" data-translate="cart.checkout">Procedi al Checkout</button>
        </div>
    </div>

    <!-- Cart Overlay -->
    <div class="cart-overlay" id="cartOverlay"></div>

    <!-- Checkout Modal -->
    <div class="checkout-modal" id="checkoutModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 data-translate="checkout.title">Checkout</h3>
                <button class="close-modal" id="closeCheckout">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <form class="checkout-form" id="checkoutForm">
                <div class="form-section">
                    <h4 data-translate="checkout.shipping">Informazioni di Spedizione</h4>
                    <div class="form-row">
                        <input type="text" name="firstName" placeholder="Nome" required data-translate-placeholder="checkout.firstName">
                        <input type="text" name="lastName" placeholder="Cognome" required data-translate-placeholder="checkout.lastName">
                    </div>
                    <input type="email" name="email" placeholder="Email" required data-translate-placeholder="checkout.email">
                    <input type="text" name="address" placeholder="Indirizzo" required data-translate-placeholder="checkout.address">
                    <div class="form-row">
                        <input type="text" name="city" placeholder="Città" required data-translate-placeholder="checkout.city">
                        <input type="text" name="postalCode" placeholder="CAP" required data-translate-placeholder="checkout.postalCode">
                    </div>
                    <select name="country" required>
                        <option value="">Seleziona Paese</option>
                        <option value="IT">Italia</option>
                        <option value="CZ">Repubblica Ceca</option>
                        <option value="DE">Germania</option>
                        <option value="FR">Francia</option>
                        <option value="ES">Spagna</option>
                    </select>
                </div>
                
                <div class="form-section">
                    <h4 data-translate="checkout.payment">Metodo di Pagamento</h4>
                    <div class="payment-methods">
                        <label class="payment-option">
                            <input type="radio" name="payment" value="card" checked>
                            <span>💳 Carta di Credito</span>
                        </label>
                        <label class="payment-option">
                            <input type="radio" name="payment" value="paypal">
                            <span>💙 PayPal</span>
                        </label>
                        <label class="payment-option">
                            <input type="radio" name="payment" value="bank">
                            <span>🏦 Bonifico Bancario</span>
                        </label>
                    </div>
                </div>
                
                <div class="order-summary">
                    <h4 data-translate="checkout.summary">Riepilogo Ordine</h4>
                    <div id="checkoutItems"></div>
                    <div class="checkout-total">
                        <strong>Totale: <span id="checkoutTotal">€0.00</span></strong>
                    </div>
                </div>
                
                <button type="submit" class="place-order-btn" data-translate="checkout.placeOrder">Conferma Ordine</button>
            </form>
        </div>
    </div>

    <!-- Footer semplice -->
    <footer style="background: #2C1810; color: white; text-align: center; padding: 2rem; margin-top: 4rem;">
        <p>&copy; 2025 Caffè Ramenzoni. Tutti i diritti riservati.</p>
        <p>📍 Parma, Italia • Praha, Repubblica Ceca • 📧 info@ramenzoni.eu</p>
        <div style="margin-top: 1rem;">
            <a href="https://www.facebook.com/ramenzonipraha" target="_blank" style="color: white; font-size: 1.5rem; margin: 0 10px;">
                <i class="fab fa-facebook"></i>
            </a>
        </div>
    </footer>

    <!-- Scripts dell'e-shop -->
    <script src="shop/js/translations.js"></script>
    <script src="shop/js/products.js"></script>
    <script src="shop/js/cart.js"></script>
    <script src="shop/js/app.js"></script>

    <!-- Script di inizializzazione -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Nascondi header dell'e-shop se presente
        const eshopHeader = document.querySelector('.eshop-container .header');
        if (eshopHeader) {
            eshopHeader.style.display = 'none';
        }
        
        console.log('E-shop Ramenzoni integrato e pronto!');
    });
    </script>
</body>
</html>
