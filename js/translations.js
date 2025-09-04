// Translations for multi-language support
const translations = {
    it: {
        'hero.title': 'L\'Arte del Caffè Italiano',
        'hero.subtitle': 'Dalle colline di Parma alle vie di Praga, portiamo la tradizione italiana del caffè direttamente a casa tua.',
        'hero.cta': 'Scopri i Nostri Caffè',
        'products.title': 'I Nostri Caffè',
        'categories.all': 'Tutti',
        'categories.blends': 'Miscele',
        'categories.single': 'Monorigine',
        'categories.capsules': 'Capsule',
        'categories.equipment': 'Attrezzature',
        'cart.title': 'Carrello',
        'cart.total': 'Totale: ',
        'cart.checkout': 'Procedi al Checkout',
        'cart.empty': 'Il carrello è vuoto',
        'checkout.title': 'Checkout',
        'checkout.shipping': 'Informazioni di Spedizione',
        'checkout.firstName': 'Nome',
        'checkout.lastName': 'Cognome',
        'checkout.email': 'Email',
        'checkout.address': 'Indirizzo',
        'checkout.city': 'Città',
        'checkout.postalCode': 'CAP',
        'checkout.payment': 'Metodo di Pagamento',
        'checkout.summary': 'Riepilogo Ordine',
        'checkout.placeOrder': 'Conferma Ordine',
        'footer.description': 'Dal 1950, la passione per il caffè di qualità che unisce Italia e Repubblica Ceca.',
        'footer.contact': 'Contatti',
        'footer.follow': 'Seguici',
        'product.addToCart': 'Aggiungi al Carrello',
        'product.addedToCart': 'Aggiunto!',
        'order.success': 'Ordine confermato! Riceverai una email di conferma.',
        'order.error': 'Errore nell\'elaborazione dell\'ordine. Riprova.'
    },
    cz: {
        'hero.title': 'Umění Italské Kávy',
        'hero.subtitle': 'Z kopců Parmy do ulic Prahy, přinášíme italskou tradici kávy přímo k vám domů.',
        'hero.cta': 'Objevte Naše Kávy',
        'products.title': 'Naše Kávy',
        'categories.all': 'Všechny',
        'categories.blends': 'Směsi',
        'categories.single': 'Jednodruhové',
        'categories.capsules': 'Kapsle',
        'categories.equipment': 'Vybavení',
        'cart.title': 'Košík',
        'cart.total': 'Celkem: ',
        'cart.checkout': 'Pokračovat k Pokladně',
        'cart.empty': 'Košík je prázdný',
        'checkout.title': 'Pokladna',
        'checkout.shipping': 'Informace o Dopravě',
        'checkout.firstName': 'Jméno',
        'checkout.lastName': 'Příjmení',
        'checkout.email': 'Email',
        'checkout.address': 'Adresa',
        'checkout.city': 'Město',
        'checkout.postalCode': 'PSČ',
        'checkout.payment': 'Způsob Platby',
        'checkout.summary': 'Shrnutí Objednávky',
        'checkout.placeOrder': 'Potvrdit Objednávku',
        'footer.description': 'Od roku 1950, vášeň pro kvalitní kávu spojující Itálii a Českou republiku.',
        'footer.contact': 'Kontakt',
        'footer.follow': 'Sledujte nás',
        'product.addToCart': 'Přidat do Košíku',
        'product.addedToCart': 'Přidáno!',
        'order.success': 'Objednávka potvrzena! Obdržíte potvrzovací email.',
        'order.error': 'Chyba při zpracování objednávky. Zkuste znovu.'
    },
    en: {
        'hero.title': 'The Art of Italian Coffee',
        'hero.subtitle': 'From the hills of Parma to the streets of Prague, we bring Italian coffee tradition directly to your home.',
        'hero.cta': 'Discover Our Coffees',
        'products.title': 'Our Coffees',
        'categories.all': 'All',
        'categories.blends': 'Blends',
        'categories.single': 'Single Origin',
        'categories.capsules': 'Capsules',
        'categories.equipment': 'Equipment',
        'cart.title': 'Cart',
        'cart.total': 'Total: ',
        'cart.checkout': 'Proceed to Checkout',
        'cart.empty': 'Cart is empty',
        'checkout.title': 'Checkout',
        'checkout.shipping': 'Shipping Information',
        'checkout.firstName': 'First Name',
        'checkout.lastName': 'Last Name',
        'checkout.email': 'Email',
        'checkout.address': 'Address',
        'checkout.city': 'City',
        'checkout.postalCode': 'Postal Code',
        'checkout.payment': 'Payment Method',
        'checkout.summary': 'Order Summary',
        'checkout.placeOrder': 'Place Order',
        'footer.description': 'Since 1950, the passion for quality coffee connecting Italy and Czech Republic.',
        'footer.contact': 'Contact',
        'footer.follow': 'Follow Us',
        'product.addToCart': 'Add to Cart',
        'product.addedToCart': 'Added!',
        'order.success': 'Order confirmed! You will receive a confirmation email.',
        'order.error': 'Error processing order. Please try again.'
    }
};

let currentLanguage = 'it';

// Translation function
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Update page translations
function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = t(key);
    });

    // Update placeholder texts
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = t(key);
    });
}

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    updateTranslations();
    
    // Save language preference
    localStorage.setItem('ramenzoni-language', lang);
    
    // Update language selector
    document.getElementById('languageSelect').value = lang;
}
