<?php
/**
 * Template Name: E-Shop Ramenzoni
 * Description: Pagina dedicata per l'e-shop di Caffè Ramenzoni
 */

get_header(); ?>

<div id="ramenzoni-eshop-container">
    <!-- Import degli stili e script dell'e-shop -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/eshop/css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h2 data-translate="hero.title">L'Arte del Caffè Italiano</h2>
                <p data-translate="hero.subtitle">Dalle colline di Parma alle vie di Praga, portiamo la tradizione italiana del caffè direttamente a casa tua.</p>
                <a href="#products" class="cta-btn" data-translate="hero.cta">Scopri i Nostri Caffè</a>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products-section">
        <div class="container">
            <h2 class="section-title" data-translate="products.title">I Nostri Caffè</h2>
            
            <!-- Product Categories -->
            <div class="product-categories">
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
        </div>
    </section>

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
        <!-- Contenuto del modal checkout -->
    </div>

    <!-- Scripts dell'e-shop -->
    <script src="<?php echo get_template_directory_uri(); ?>/eshop/js/translations.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/eshop/js/products.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/eshop/js/cart.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/eshop/js/app.js"></script>
</div>

<style>
/* Override WordPress theme styles se necessario */
#ramenzoni-eshop-container {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
}

/* Nascondi elementi WordPress non necessari */
.site-header, .site-footer {
    display: none;
}
</style>

<?php get_footer(); ?>
