// Main application script
document.addEventListener('DOMContentLoaded', function() {
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('ramenzoni-language') || 'it';
    setLanguage(savedLanguage);
    
    // Initialize components
    initCart();
    renderProducts();
    
    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            renderProducts(); // Re-render products with new language
        });
    }
    
    // Product category filters
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            e.target.classList.add('active');
            
            // Filter products
            const category = e.target.getAttribute('data-category');
            const filteredProducts = filterProducts(category);
            renderProducts(filteredProducts);
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA button smooth scrolling
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetElement = document.querySelector('#products');
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards for animations
    const observeProducts = () => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    };
    
    // Initial observation
    setTimeout(observeProducts, 100);
    
    // Re-observe after filtering
    document.addEventListener('productsRendered', observeProducts);
    
    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const headerActions = document.querySelector('.header-actions');
        
        if (window.innerWidth <= 768) {
            // Mobile menu logic can be added here
        }
    };
    
    // Responsive adjustments
    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();
    
    // Form validation helpers
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    
    const validatePostalCode = (code, country) => {
        const patterns = {
            'IT': /^\d{5}$/,
            'CZ': /^\d{3}\s?\d{2}$/,
            'DE': /^\d{5}$/,
            'FR': /^\d{5}$/,
            'ES': /^\d{5}$/
        };
        
        const pattern = patterns[country];
        return pattern ? pattern.test(code) : true;
    };
    
    // Add real-time form validation
    const addFormValidation = () => {
        const checkoutForm = document.getElementById('checkoutForm');
        if (!checkoutForm) return;
        
        const emailInput = checkoutForm.querySelector('input[name="email"]');
        const postalCodeInput = checkoutForm.querySelector('input[name="postalCode"]');
        const countrySelect = checkoutForm.querySelector('select[name="country"]');
        
        if (emailInput) {
            emailInput.addEventListener('blur', (e) => {
                const isValid = validateEmail(e.target.value);
                e.target.style.borderColor = isValid ? 'var(--border-color)' : '#EF4444';
            });
        }
        
        if (postalCodeInput && countrySelect) {
            const validatePostal = () => {
                const isValid = validatePostalCode(postalCodeInput.value, countrySelect.value);
                postalCodeInput.style.borderColor = isValid ? 'var(--border-color)' : '#EF4444';
            };
            
            postalCodeInput.addEventListener('blur', validatePostal);
            countrySelect.addEventListener('change', validatePostal);
        }
    };
    
    // Initialize form validation
    setTimeout(addFormValidation, 100);
    
    // Console welcome message
    console.log('%c☕ Benvenuto in Caffè Ramenzoni E-Shop!', 'color: #8B4513; font-size: 16px; font-weight: bold;');
    console.log('Versione: 1.0.0');
    console.log('Sviluppato con ❤️ per gli amanti del caffè');
    
    // Analytics placeholder (replace with real analytics)
    const trackEvent = (eventName, eventData) => {
        console.log('Analytics Event:', eventName, eventData);
        // Here you would send data to your analytics service
    };
    
    // Track page load
    trackEvent('page_load', {
        page: 'home',
        language: currentLanguage,
        timestamp: Date.now()
    });
    
    // Track product views
    const trackProductView = (productId) => {
        trackEvent('product_view', {
            product_id: productId,
            language: currentLanguage,
            timestamp: Date.now()
        });
    };
    
    // Track add to cart
    const originalAddToCart = window.addToCart;
    window.addToCart = function(product) {
        trackEvent('add_to_cart', {
            product_id: product.id,
            product_name: getProductName(product),
            price: product.price,
            language: currentLanguage,
            timestamp: Date.now()
        });
        return originalAddToCart(product);
    };
    
    // Error handling
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', e.error);
        trackEvent('javascript_error', {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            timestamp: Date.now()
        });
    });
    
    // Service Worker registration (for future PWA implementation)
    if ('serviceWorker' in navigator) {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    }
    
    // Dispatch custom event to indicate app initialization is complete
    document.dispatchEvent(new CustomEvent('ramenzoniAppReady', {
        detail: {
            version: '1.0.0',
            language: currentLanguage,
            cartItems: getCartItemCount()
        }
    }));
});
