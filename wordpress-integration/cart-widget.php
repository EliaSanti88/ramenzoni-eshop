<?php
/**
 * Widget per il carrello di Caffè Ramenzoni
 */

class Ramenzoni_Cart_Widget extends WP_Widget {
    
    public function __construct() {
        parent::__construct(
            'ramenzoni_cart_widget',
            'Caffè Ramenzoni - Carrello',
            array('description' => 'Widget carrello per l\'e-shop di Caffè Ramenzoni')
        );
    }
    
    public function widget($args, $instance) {
        echo $args['before_widget'];
        
        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }
        
        ?>
        <div class="ramenzoni-cart-widget">
            <button class="cart-btn widget-cart-btn" id="cartBtn">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-count" id="cartCount">0</span>
                <span><?php echo $instance['button_text'] ?: 'Carrello'; ?></span>
            </button>
            
            <div class="cart-summary" id="cartSummary">
                <div class="cart-total-widget">
                    Totale: <span id="cartTotalWidget">€0.00</span>
                </div>
            </div>
        </div>
        
        <script>
        // Aggiorna il widget quando il carrello cambia
        document.addEventListener('cartUpdated', function(e) {
            const widgetTotal = document.getElementById('cartTotalWidget');
            const widgetCount = document.querySelector('.ramenzoni-cart-widget .cart-count');
            
            if (widgetTotal) {
                widgetTotal.textContent = '€' + e.detail.total.toFixed(2);
            }
            if (widgetCount) {
                widgetCount.textContent = e.detail.itemCount;
                widgetCount.style.display = e.detail.itemCount > 0 ? 'flex' : 'none';
            }
        });
        </script>
        <?php
        
        echo $args['after_widget'];
    }
    
    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : '';
        $button_text = !empty($instance['button_text']) ? $instance['button_text'] : 'Carrello';
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>">Titolo:</label>
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" 
                   name="<?php echo $this->get_field_name('title'); ?>" type="text" 
                   value="<?php echo esc_attr($title); ?>" />
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('button_text'); ?>">Testo Bottone:</label>
            <input class="widefat" id="<?php echo $this->get_field_id('button_text'); ?>" 
                   name="<?php echo $this->get_field_name('button_text'); ?>" type="text" 
                   value="<?php echo esc_attr($button_text); ?>" />
        </p>
        <?php
    }
    
    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';
        $instance['button_text'] = (!empty($new_instance['button_text'])) ? strip_tags($new_instance['button_text']) : '';
        return $instance;
    }
}

// Registra il widget
add_action('widgets_init', function() {
    register_widget('Ramenzoni_Cart_Widget');
});
?>
