// Product catalog for Caffè Ramenzoni
const products = [
    {
        id: 1,
        name: {
            it: 'Miscela Classica Ramenzoni',
            cz: 'Klasická Směs Ramenzoni',
            en: 'Ramenzoni Classic Blend'
        },
        description: {
            it: 'La nostra miscela storica, un equilibrio perfetto tra dolcezza e corpo',
            cz: 'Naše historická směs, dokonalá rovnováha mezi sladkostí a tělem',
            en: 'Our historic blend, a perfect balance between sweetness and body'
        },
        price: 12.50,
        category: 'blends',
        image: '☕',
        inStock: true
    },
    {
        id: 2,
        name: {
            it: 'Espresso Intenso',
            cz: 'Intenzivní Espresso',
            en: 'Intense Espresso'
        },
        description: {
            it: 'Per chi ama il caffè dal carattere deciso e l\'aroma intenso',
            cz: 'Pro ty, kteří milují kávu s rozhodným charakterem a intenzivní aromou',
            en: 'For those who love coffee with bold character and intense aroma'
        },
        price: 14.00,
        category: 'blends',
        image: '☕',
        inStock: true
    },
    {
        id: 3,
        name: {
            it: 'Arabica Santos Brasile',
            cz: 'Arabica Santos Brazílie',
            en: 'Arabica Santos Brazil'
        },
        description: {
            it: 'Monorigine dal Brasile, note dolci e cioccolatose',
            cz: 'Jednodruhová z Brazílie, sladké a čokoládové tóny',
            en: 'Single origin from Brazil, sweet and chocolatey notes'
        },
        price: 16.50,
        category: 'single-origin',
        image: '🌍',
        inStock: true
    },
    {
        id: 4,
        name: {
            it: 'Colombia Supremo',
            cz: 'Kolumbie Supremo',
            en: 'Colombia Supremo'
        },
        description: {
            it: 'Dalle montagne della Colombia, gusto equilibrato e aromatico',
            cz: 'Z hor Kolumbie, vyvážená a aromatická chuť',
            en: 'From Colombian mountains, balanced and aromatic taste'
        },
        price: 18.00,
        category: 'single-origin',
        image: '⛰️',
        inStock: true
    },
    {
        id: 5,
        name: {
            it: 'Capsule Compatibili - Classica',
            cz: 'Kompatibilní Kapsle - Klasická',
            en: 'Compatible Capsules - Classic'
        },
        description: {
            it: 'Confezione da 10 capsule compatibili con macchine Nespresso',
            cz: 'Balení 10 kapslí kompatibilních s kávovary Nespresso',
            en: 'Pack of 10 capsules compatible with Nespresso machines'
        },
        price: 4.50,
        category: 'capsules',
        image: '🥤',
        inStock: true
    },
    {
        id: 6,
        name: {
            it: 'Capsule Compatibili - Intenso',
            cz: 'Kompatibilní Kapsle - Intenzivní',
            en: 'Compatible Capsules - Intense'
        },
        description: {
            it: 'Confezione da 10 capsule per un espresso più corposo',
            cz: 'Balení 10 kapslí pro plnější espresso',
            en: 'Pack of 10 capsules for a fuller espresso'
        },
        price: 4.50,
        category: 'capsules',
        image: '🥤',
        inStock: true
    },
    {
        id: 7,
        name: {
            it: 'Moka Ramenzoni 3 Tazze',
            cz: 'Moka Ramenzoni 3 Šálky',
            en: 'Ramenzoni Moka 3 Cups'
        },
        description: {
            it: 'Caffettiera tradizionale italiana in alluminio',
            cz: 'Tradiční italský kávovar z hliníku',
            en: 'Traditional Italian aluminum coffee maker'
        },
        price: 25.00,
        category: 'equipment',
        image: '⚱️',
        inStock: true
    },
    {
        id: 8,
        name: {
            it: 'Tazzine Ramenzoni Set 2pz',
            cz: 'Šálky Ramenzoni Sada 2ks',
            en: 'Ramenzoni Espresso Cups Set 2pcs'
        },
        description: {
            it: 'Tazzine da espresso in ceramica con logo Ramenzoni',
            cz: 'Espresso šálky z keramiky s logem Ramenzoni',
            en: 'Ceramic espresso cups with Ramenzoni logo'
        },
        price: 15.00,
        category: 'equipment',
        image: '🏺',
        inStock: true
    },
    {
        id: 9,
        name: {
            it: 'Macinacaffè Manuale',
            cz: 'Ruční Mlýnek na Kávu',
            en: 'Manual Coffee Grinder'
        },
        description: {
            it: 'Macinacaffè manuale in legno e acciaio per caffè sempre fresco',
            cz: 'Ruční mlýnek z dřeva a oceli pro vždy čerstvou kávu',
            en: 'Manual grinder in wood and steel for always fresh coffee'
        },
        price: 45.00,
        category: 'equipment',
        image: '⚙️',
        inStock: false
    },
    // OLIO COLLECTION
    {
        id: 10,
        name: {
            it: 'Olio Extravergine Viola',
            cz: 'Extra Panenský Olivový Olej Viola',
            en: 'Viola Extra Virgin Olive Oil'
        },
        description: {
            it: 'Olio extravergine d\'oliva premium, dal sapore intenso e fruttato',
            cz: 'Prémiový extra panenský olivový olej s intenzivní ovocnou chutí',
            en: 'Premium extra virgin olive oil with intense fruity flavor'
        },
        price: 18.50,
        category: 'oil',
        image: '🫒',
        inStock: true
    },
    {
        id: 11,
        name: {
            it: 'Olio Delicato Bio',
            cz: 'Jemný Bio Olivový Olej',
            en: 'Delicate Organic Oil'
        },
        description: {
            it: 'Olio biologico dal gusto delicato, perfetto per insalate e crudo',
            cz: 'Biologický olej s jemnou chutí, ideální na saláty a za studena',
            en: 'Organic oil with delicate taste, perfect for salads and raw use'
        },
        price: 22.00,
        category: 'oil',
        image: '🌿',
        inStock: true
    },
    {
        id: 12,
        name: {
            it: 'Olio Piccante alle Erbe',
            cz: 'Pikantní Bylinkový Olej',
            en: 'Spicy Herb Oil'
        },
        description: {
            it: 'Olio aromatizzato con peperoncino e erbe mediterranee',
            cz: 'Aromatizovaný olej s chilli papričkami a středomořskými bylinkami',
            en: 'Flavored oil with chili pepper and Mediterranean herbs'
        },
        price: 24.50,
        category: 'oil',
        image: '🌶️',
        inStock: true
    },
    {
        id: 13,
        name: {
            it: 'Olio al Tartufo',
            cz: 'Lanýžový Olej',
            en: 'Truffle Oil'
        },
        description: {
            it: 'Olio pregiato aromatizzato al tartufo nero, per piatti gourmet',
            cz: 'Vzácný olej ochucený černými lanýži pro gurmánské pokrmy',
            en: 'Precious oil flavored with black truffle for gourmet dishes'
        },
        price: 35.00,
        category: 'oil',
        image: '🍄',
        inStock: true
    },
    {
        id: 14,
        name: {
            it: 'Set Degustazione Oli (3x250ml)',
            cz: 'Degustační Set Olejů (3x250ml)',
            en: 'Oil Tasting Set (3x250ml)'
        },
        description: {
            it: 'Set di tre oli per scoprire i diversi sapori della tradizione italiana',
            cz: 'Sada tří olejů pro objevení různých chutí italské tradice',
            en: 'Set of three oils to discover different flavors of Italian tradition'
        },
        price: 52.00,
        category: 'oil',
        image: '🎁',
        inStock: true
    }
];

// Get product name based on current language
function getProductName(product) {
    return product.name[currentLanguage] || product.name.it;
}

// Get product description based on current language
function getProductDescription(product) {
    return product.description[currentLanguage] || product.description.it;
}

// Format price
function formatPrice(price) {
    return `€${price.toFixed(2)}`;
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}

// Create product card HTML
function createProductCard(product) {
    const isInStock = product.inStock;
    const stockClass = isInStock ? '' : 'out-of-stock';
    const buttonText = isInStock ? t('product.addToCart') : 'Esaurito';
    const buttonDisabled = isInStock ? '' : 'disabled';
    
    return `
        <div class="product-card ${stockClass}" data-category="${product.category}">
            <div class="product-image">
                ${product.image}
            </div>
            <div class="product-info">
                <h3 class="product-name">${getProductName(product)}</h3>
                <p class="product-description">${getProductDescription(product)}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart-btn" 
                            data-product-id="${product.id}" 
                            ${buttonDisabled}>
                        ${buttonText}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render products
function renderProducts(productsToRender = products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
    
    // Add event listeners to add-to-cart buttons
    grid.querySelectorAll('.add-to-cart-btn:not([disabled])').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-product-id'));
            const product = products.find(p => p.id === productId);
            if (product) {
                addToCart(product);
                
                // Visual feedback
                const originalText = button.textContent;
                button.textContent = t('product.addedToCart');
                button.classList.add('success');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('success');
                }, 1000);
            }
        });
    });
}

// Search products
function searchProducts(query) {
    if (!query) return products;
    
    const lowerQuery = query.toLowerCase();
    return products.filter(product => {
        const name = getProductName(product).toLowerCase();
        const description = getProductDescription(product).toLowerCase();
        return name.includes(lowerQuery) || description.includes(lowerQuery);
    });
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}
