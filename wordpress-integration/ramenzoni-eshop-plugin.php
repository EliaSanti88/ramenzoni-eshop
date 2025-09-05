<?php
/**
 * Plugin Name: Caffè Ramenzoni E-Shop
 * Description: Plugin per integrare l'e-shop di Caffè Ramenzoni in WordPress
 * Version: 1.0.0
 * Author: Caffè Ramenzoni
 */

// Previeni accesso diretto
if (!defined('ABSPATH')) {
    exit;
}

class RamenzoniEShop {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_shortcode('ramenzoni_shop', array($this, 'shop_shortcode'));
        add_shortcode('ramenzoni_cart', array($this, 'cart_shortcode'));
        add_shortcode('ramenzoni_products', array($this, 'products_shortcode'));
    }
    
    public function init() {
        // Inizializzazione del plugin
    }
    
    public function enqueue_scripts() {
        // Carica solo se lo shortcode è presente nella pagina
        if ($this->has_shortcode()) {
            wp_enqueue_style(
                'ramenzoni-eshop-style',
                plugin_dir_url(__FILE__) . 'assets/css/styles.css',
                array(),
                '1.0.0'
            );
            
            wp_enqueue_script(
                'ramenzoni-eshop-translations',
                plugin_dir_url(__FILE__) . 'assets/js/translations.js',
                array(),
                '1.0.0',
                true
            );
            
            wp_enqueue_script(
                'ramenzoni-eshop-products',
                plugin_dir_url(__FILE__) . 'assets/js/products.js',
                array(),
                '1.0.0',
                true
            );
            
            wp_enqueue_script(
                'ramenzoni-eshop-cart',
                plugin_dir_url(__FILE__) . 'assets/js/cart.js',
                array('ramenzoni-eshop-products'),
                '1.0.0',
                true
            );
            
            wp_enqueue_script(
                'ramenzoni-eshop-app',
                plugin_dir_url(__FILE__) . 'assets/js/app.js',
                array('ramenzoni-eshop-cart'),
                '1.0.0',
                true
            );
            
            // Font Awesome
            wp_enqueue_style(
                'font-awesome',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
            );
            
            // Google Fonts
            wp_enqueue_style(
                'ramenzoni-fonts',
                'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap'
            );
        }
    }
    
    private function has_shortcode() {
        global $post;
        if (is_a($post, 'WP_Post')) {
            return has_shortcode($post->post_content, 'ramenzoni_shop') ||
                   has_shortcode($post->post_content, 'ramenzoni_cart') ||
                   has_shortcode($post->post_content, 'ramenzoni_products');
        }
        return false;
    }
    
    /**
     * Shortcode per l'e-shop completo
     * Uso: [ramenzoni_shop]
     */
    public function shop_shortcode($atts) {
        $atts = shortcode_atts(array(
            'categories' => 'all',
            'show_hero' => 'true',
            'show_cart' => 'true'
        ), $atts);
        
        ob_start();
        ?>
        <div class="ramenzoni-eshop-wrapper">
            <?php if ($atts['show_hero'] === 'true'): ?>
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
            <?php endif; ?>

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

            <?php if ($atts['show_cart'] === 'true'): ?>
            <!-- Cart Components -->
            <?php echo $this->get_cart_components(); ?>
            <?php endif; ?>
        </div>
        <?php
        return ob_get_clean();
    }
    
    /**
     * Shortcode solo per il carrello
     * Uso: [ramenzoni_cart]
     */
    public function cart_shortcode($atts) {
        ob_start();
        ?>
        <div class="ramenzoni-cart-wrapper">
            <button class="cart-btn" id="cartBtn">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-count" id="cartCount">0</span>
                <span data-translate="cart.title">Carrello</span>
            </button>
            <?php echo $this->get_cart_components(); ?>
        </div>
        <?php
        return ob_get_clean();
    }
    
    /**
     * Shortcode solo per i prodotti
     * Uso: [ramenzoni_products category="blends" limit="4"]
     */
    public function products_shortcode($atts) {
        $atts = shortcode_atts(array(
            'category' => 'all',
            'limit' => '12',
            'show_categories' => 'true'
        ), $atts);
        
        ob_start();
        ?>
        <div class="ramenzoni-products-wrapper">
            <?php if ($atts['show_categories'] === 'true'): ?>
            <div class="product-categories">
                <button class="category-btn active" data-category="all" data-translate="categories.all">Tutti</button>
                <button class="category-btn" data-category="blends" data-translate="categories.blends">Miscele</button>
                <button class="category-btn" data-category="single-origin" data-translate="categories.single">Monorigine</button>
                <button class="category-btn" data-category="capsules" data-translate="categories.capsules">Capsule</button>
                <button class="category-btn" data-category="equipment" data-translate="categories.equipment">Attrezzature</button>
            </div>
            <?php endif; ?>
            
            <div class="products-grid" id="productsGrid" data-category="<?php echo esc_attr($atts['category']); ?>" data-limit="<?php echo esc_attr($atts['limit']); ?>">
                <!-- Products will be loaded dynamically -->
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
    
    private function get_cart_components() {
        ob_start();
        ?>
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
                    <!-- Form content here -->
                </form>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
}

// Inizializza il plugin
new RamenzoniEShop();

// Hook per aggiungere il bottone carrello al menu WordPress
add_action('wp_nav_menu_items', 'add_cart_to_menu', 10, 2);
function add_cart_to_menu($items, $args) {
    if ($args->theme_location == 'primary') {
        $cart_item = '<li class="menu-item-cart">
            <button class="cart-btn menu-cart-btn" id="cartBtn">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-count" id="cartCount">0</span>
            </button>
        </li>';
        $items .= $cart_item;
    }
    return $items;
}
?>
