# # 🫒☕ Caffè Ramenzoni - E-Shop Online

**E-commerce moderno per caffè premium e olio extravergine d'oliva**

🌐 **[VISUALIZZA IL SITO LIVE](https://eliasanti88.github.io/ramenzoni-eshop/)**

---

## 🎯 Caratteristiche Principali

### ☕ **Prodotti Caffè**
- Miscele esclusive Ramenzoni
- Caffè monorigine selezionati
- Capsule compatibili
- Attrezzature professionali

### 🫒 **Prodotti Olio d'Oliva**
- Olio Extravergine Viola
- Oli biologici e aromatizzati
- Set degustazione premium
- Catalogazione dettagliata

### 🌍 **Multilingua**
- 🇮🇹 Italiano
- 🇨🇿 Čeština  
- 🇬🇧 English

---

## 🚀 Funzionalità

✅ **Design Responsive** - Perfetto su mobile, tablet e desktop  
✅ **Carrello Avanzato** - Gestione completa ordini  
✅ **Filtri Intelligenti** - Ricerca per categoria  
✅ **Checkout Semplificato** - Processo d'ordine intuitivo  
✅ **Multilingua Completo** - 3 lingue supportate  
✅ **Catalogo Visivo** - Immagini e descrizioni dettagliate  

---

## 🏪 Pagine del Sito

| Pagina | Descrizione | Link |
|--------|-------------|------|
| **Home** | Pagina principale con tutti i prodotti | [index.html](https://eliasanti88.github.io/ramenzoni-eshop/) |
| **Catalogo Olio** | Pagina dedicata agli oli con immagini | [catalogo-olio.html](https://eliasanti88.github.io/ramenzoni-eshop/catalogo-olio.html) |
| **Test Sistema** | Verifica funzionalità e-shop | [test-prodotti.html](https://eliasanti88.github.io/ramenzoni-eshop/test-prodotti.html) |

---

## 🛠️ Tecnologie Utilizzate

- **HTML5** - Struttura semantica
- **CSS3** - Styling moderno e responsive
- **JavaScript Vanilla** - Funzionalità interattive
- **GitHub Pages** - Hosting gratuito e veloce
- **Font Awesome** - Icone professionali
- **Google Fonts** - Tipografia elegante

---

## 📱 Integrazione

### WordPress
Integrazione semplice tramite iframe:
```html
<iframe src="https://eliasanti88.github.io/ramenzoni-eshop/" 
        width="100%" height="800px" frameborder="0"></iframe>
```

### Sito Esistente
```html
<div id="ramenzoni-shop"></div>
<script src="https://eliasanti88.github.io/ramenzoni-eshop/js/app.js"></script>
```

---

## 📞 Contatti

**Caffè Ramenzoni**  
📍 Parma, Italia | Praha, Repubblica Ceca  
📧 info@ramenzoni.eu  
🌐 Facebook: [ramenzonipraha](https://www.facebook.com/ramenzonipraha)

---

## 📈 Statistiche Repository

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

✨ **Dal 1950, la passione per il caffè e l'olio d'oliva di qualità che unisce Italia e Repubblica Ceca!**

Un e-shop moderno e responsive per Caffè Ramenzoni, facilmente integrabile nel sito web esistente.

## 🚀 Caratteristiche

- **Design Responsive**: Ottimizzato per desktop, tablet e mobile
- **Multilingua**: Supporto per Italiano, Ceco e Inglese
- **Carrello Avanzato**: Gestione completa del carrello con persistenza locale
- **Checkout Semplificato**: Processo di checkout user-friendly
- **Performance Ottimizzate**: Caricamento veloce e animazioni fluide
- **SEO Ready**: Struttura ottimizzata per i motori di ricerca

## 📦 Prodotti Supportati

- **Miscele di Caffè**: Blend tradizionali e speciali
- **Monorigine**: Caffè da singole piantagioni
- **Capsule**: Compatibili con macchine Nespresso
- **Attrezzature**: Moka, tazzine, macinacaffè e accessori

## 🛠️ Tecnologie

- **HTML5**: Struttura semantica e accessibile
- **CSS3**: Styling moderno con variabili CSS e Flexbox/Grid
- **JavaScript Vanilla**: Logica pulita senza dipendenze esterne
- **LocalStorage**: Persistenza dei dati del carrello e preferenze

## 📁 Struttura del Progetto

```
caffè-ramenzoni-eshop/
├── index.html              # Pagina principale
├── css/
│   └── styles.css          # Stili principali
├── js/
│   ├── app.js             # Script principale
│   ├── cart.js            # Gestione carrello
│   ├── products.js        # Catalogo prodotti
│   └── translations.js    # Sistema multilingua
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## 🚀 Installazione e Uso

### Metodo 1: Integrazione Diretta
Copia i file nel tuo server web e apri `index.html` nel browser.

### Metodo 2: Server Locale
```bash
# Con Python
python -m http.server 8000

# Con Node.js (se hai live-server installato)
npx live-server

# Con PHP
php -S localhost:8000
```

Poi apri http://localhost:8000 nel browser.

## ⚙️ Configurazione

### Personalizzazione Prodotti
Modifica il file `js/products.js` per aggiungere, rimuovere o modificare i prodotti:

```javascript
const products = [
    {
        id: 1,
        name: {
            it: 'Nome Prodotto',
            cz: 'Název Produktu',
            en: 'Product Name'
        },
        description: {
            it: 'Descrizione in italiano',
            cz: 'Popis v češtině',
            en: 'Description in English'
        },
        price: 15.50,
        category: 'blends', // blends, single-origin, capsules, equipment
        image: '☕',
        inStock: true
    }
];
```

### Personalizzazione Colori
Modifica le variabili CSS in `css/styles.css`:

```css
:root {
    --primary-color: #8B4513;    /* Marrone caffè */
    --secondary-color: #D2691E;  /* Arancione caldo */
    --accent-color: #F4E4C1;     /* Crema */
    /* ... altre variabili */
}
```

### Aggiungere Traduzioni
Estendi l'oggetto `translations` in `js/translations.js`:

```javascript
const translations = {
    it: {
        'nuova.chiave': 'Testo in italiano'
    },
    cz: {
        'nuova.chiave': 'Text v češtině'
    },
    en: {
        'nuova.chiave': 'Text in English'
    }
};
```

## 🎨 Personalizzazione Design

### Logo e Branding
- Sostituisci il testo "Caffè Ramenzoni" nell'header con il tuo logo
- Modifica i colori brand nelle variabili CSS
- Personalizza le emoji dei prodotti con immagini reali

### Layout
- Il design è completamente responsive
- Usa CSS Grid per il layout dei prodotti
- Flexbox per i componenti dell'interfaccia

## 🔧 Integrazione con Sito Esistente

### Opzione 1: Pagina Separata
Carica l'e-shop come pagina separata e collega dal menu principale.

### Opzione 2: Integrazione Modulare
Copia sezioni specifiche (es. solo il catalogo prodotti) nel sito esistente.

### Opzione 3: Widget Carrello
Integra solo il sistema carrello in pagine esistenti:

```html
<!-- Include CSS e JS necessari -->
<link rel="stylesheet" href="path/to/css/styles.css">
<script src="path/to/js/cart.js"></script>

<!-- Aggiungi il bottone carrello -->
<button class="cart-btn" id="cartBtn">
    <i class="fas fa-shopping-cart"></i>
    <span class="cart-count" id="cartCount">0</span>
</button>
```

## 📱 Funzionalità Mobile

- **Touch-friendly**: Bottoni e controlli ottimizzati per dispositivi touch
- **Swipe gestures**: Supporto per gesti di swipe (implementabile)
- **Responsive images**: Immagini che si adattano alla dimensione dello schermo
- **Mobile-first CSS**: Design pensato prima per mobile

## 🔐 Sicurezza e Privacy

- **HTTPS**: Raccomandato per gestire dati sensibili
- **Validazione client-side**: Controlli immediati sui form
- **LocalStorage**: I dati del carrello rimangono nel browser dell'utente
- **GDPR ready**: Struttura pronta per compliance privacy

## 🚀 Ottimizzazioni Performance

- **CSS minificato**: Pronto per produzione
- **JavaScript modulare**: Caricamento efficiente
- **Lazy loading**: Implementabile per immagini prodotto
- **Caching**: Compatibile con service workers

## 🛡️ Browser Supportati

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 📈 Analytics e Tracking

Il sistema include hook per analytics:

```javascript
// Traccia eventi personalizzati
trackEvent('product_view', {
    product_id: 123,
    product_name: 'Espresso Intenso'
});
```

## 🤝 Supporto e Manutenzione

### Aggiungere Nuovi Prodotti
1. Modifica `js/products.js`
2. Aggiungi traduzioni se necessario
3. Testa su tutti i dispositivi

### Aggiornare Prezzi
Modifica direttamente l'array `products` nel file `js/products.js`.

### Backup Dati
I dati del carrello sono salvati in localStorage del browser utente.

## 📞 Supporto

Per supporto tecnico o personalizzazioni, contatta il team di sviluppo.

## 📄 Licenza

Questo progetto è sviluppato per Caffè Ramenzoni. Tutti i diritti riservati.

---

**Caffè Ramenzoni** - *L'arte del caffè italiano dal 1950*
