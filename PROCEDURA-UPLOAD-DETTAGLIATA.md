# 🚀 UPLOAD E-SHOP - Procedura Dettagliata

## 📁 **STRUTTURA FINALE DESIDERATA**

```
ramenzoni.eu/
├── index.php (esistente)
├── a17_shop-online.html (esistente - da modificare)
├── shop/ (NUOVA CARTELLA)
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── app.js
│   │   ├── cart.js
│   │   ├── products.js
│   │   └── translations.js
│   └── (altri file)
└── (altri file esistenti)
```

---

## 🔧 **PROCEDURA UPLOAD STEP-BY-STEP**

### **STEP 1: Navigazione File Manager**

**Via Pannello Hosting:**
1. **Login** al pannello hosting
2. **Cerca** "File Manager" o "Gestione File"
3. **Naviga** a:
   - `public_html/` (cPanel)
   - `httpdocs/` (Plesk)
   - `www/` (hosting generico)

**Via FTP (FileZilla):**
1. **Apri** FileZilla
2. **Connetti** al server
3. **Naviga** nella cartella root del sito

### **STEP 2: Creazione Cartella Shop**

**Nel File Manager:**
1. **Click destro** nella cartella principale
2. **"Nuova Cartella"** o "Create Folder"
3. **Nome**: `shop`
4. **Conferma** creazione

### **STEP 3: Upload Files E-Shop**

**Metodo A - Upload ZIP:**
1. **Upload** il file `ramenzoni-eshop.zip`
2. **Click destro** sul file ZIP
3. **"Estrai"** o "Extract"
4. **Sposta** i contenuti nella cartella `shop/`

**Metodo B - Upload Diretto:**
1. **Seleziona** tutti i file del progetto:
   - `index.html`
   - Cartella `css/`
   - Cartella `js/`
2. **Trascina** nella cartella `shop/`
3. **Attendi** completamento upload

---

## 🔗 **STEP 4: Modifica Menu Sito Esistente**

Dobbiamo aggiungere il link al nuovo shop nel menu. Cerchiamo il file che contiene la navigazione:

**File da Modificare (uno di questi):**
- `header.php`
- `menu.php` 
- `index.php`
- File template principale

**Codice da Aggiungere:**
```html
<a href="/shop/">Shop Online</a>
```

### **Esempio di Integrazione:**

**Se trovi un menu tipo:**
```html
<nav>
    <a href="/">Home</a>
    <a href="/chi-siamo/">Chi Siamo</a>
    <a href="/contatti/">Contatti</a>
</nav>
```

**Aggiungi:**
```html
<nav>
    <a href="/">Home</a>
    <a href="/chi-siamo/">Chi Siamo</a>
    <a href="/shop/">Shop Online</a>
    <a href="/contatti/">Contatti</a>
</nav>
```

---

## 🎯 **STEP 5: Modifica Pagina Shop Esistente**

Se esiste già `a17_shop-online.html`, sostituiamo il contenuto:

**Opzione A - Redirect:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=/shop/">
    <title>Shop Online - Caffè Ramenzoni</title>
</head>
<body>
    <p>Reindirizzamento al nuovo shop...</p>
    <a href="/shop/">Clicca qui se non vieni reindirizzato</a>
</body>
</html>
```

**Opzione B - Iframe nella Pagina Esistente:**
```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Shop Online - Caffè Ramenzoni</title>
    <style>
        iframe { width: 100%; height: 800px; border: none; }
        @media (max-width: 768px) { iframe { height: 600px; } }
    </style>
</head>
<body>
    <iframe src="/shop/" title="Caffè Ramenzoni E-Shop"></iframe>
</body>
</html>
```

---

## ✅ **STEP 6: Test Funzionalità**

### **URL da Testare:**
1. **Shop diretto**: `http://ramenzoni.eu/shop/`
2. **Pagina esistente**: `http://ramenzoni.eu/a17_shop-online.html`
3. **Menu integrato**: Verifica link nel menu principale

### **Checklist Test:**
- [ ] E-shop si carica correttamente
- [ ] Prodotti si visualizzano
- [ ] Carrello funziona
- [ ] Checkout procede
- [ ] Responsive su mobile
- [ ] Link menu funziona

---

## 🚨 **RISOLUZIONE PROBLEMI COMUNI**

### **Errore 403/404:**
- Verifica permessi cartella (755)
- Controlla nome file `index.html`
- Verifica cartella corretta

### **CSS/JS non si caricano:**
- Controlla percorsi relativi
- Verifica struttura cartelle
- Controlla permessi file (644)

### **Non funziona su mobile:**
- Verifica viewport meta tag
- Testa responsive design
- Controlla performance

---

## 📞 **SUPPORTO IMMEDIATO**

**Se hai problemi:**
1. **Screenshot** dell'errore
2. **URL** che non funziona
3. **Browser** utilizzato
4. **Dispositivo** (desktop/mobile)

**🎯 L'obiettivo: E-shop funzionante su ramenzoni.eu/shop/ in 30 minuti!**
