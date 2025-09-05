# 🚀 GITHUB PAGES - Guida Completa Ramenzoni E-Shop

## 🔑 **STEP 1: Account GitHub (2 minuti)**

### **Se NON hai account GitHub:**
1. **Vai su**: https://github.com/
2. **Click**: "Sign up" (in alto a destra)
3. **Inserisci**:
   - Email: la tua email
   - Password: scegli una password sicura
   - Username: es. `ramenzoni-coffee` o simile
4. **Verifica** email e completa registrazione

### **Se hai GIÀ account GitHub:**
1. **Login** su https://github.com/
2. **Procedi** direttamente al Step 2

---

## 📁 **STEP 2: Creazione Repository (3 minuti)**

### **Crea Nuovo Repository:**
1. **Click** sul pulsante verde **"New"** o **"+"** in alto
2. **Repository name**: `ramenzoni-eshop`
3. **Description**: "E-shop Caffè Ramenzoni - Parma Praha"
4. **Visibilità**: ✅ **Public** (deve essere pubblico per GitHub Pages gratuito)
5. **Initialize**: ✅ Spunta "Add a README file"
6. **Click**: **"Create repository"**

---

## 📤 **STEP 3: Upload Files E-Shop (5 minuti)**

### **Metodo A - Upload Web (CONSIGLIATO):**

1. **Nel nuovo repository**, click su **"uploading an existing file"**

2. **Seleziona files** dalla cartella `c:\ProgettoSitoRamenzoni\`:
   - `index.html`
   - Cartella `css` (trascina intera cartella)
   - Cartella `js` (trascina intera cartella)

3. **Aspetta** completamento upload

4. **Commit changes**:
   - Message: "Aggiungi e-shop Caffè Ramenzoni completo"
   - Click **"Commit changes"**

### **Metodo B - ZIP Upload:**

1. **Upload** il file `ramenzoni-eshop.zip`
2. **Estrai** contenuti (GitHub può farlo automaticamente)
3. **Organizza** struttura files

---

## 🌐 **STEP 4: Attivazione GitHub Pages (2 minuti)**

### **Configurazione Pages:**

1. **Nel repository**, vai su **"Settings"** (tab in alto)

2. **Scroll** giù nel menu sinistro fino a **"Pages"**

3. **Source**: Seleziona **"Deploy from a branch"**

4. **Branch**: Seleziona **"main"** (o "master")

5. **Folder**: Lascia **"/ (root)"**

6. **Click**: **"Save"**

7. **Attendi** 2-5 minuti per il deploy

### **Verifica Deploy:**
- Vedrai un messaggio verde: "Your site is published at..."
- L'URL sarà: `https://TUO-USERNAME.github.io/ramenzoni-eshop/`

---

## 🔗 **STEP 5: Test E-Shop Online (1 minuto)**

1. **Apri** l'URL generato da GitHub Pages
2. **Verifica** che l'e-shop si carichi correttamente
3. **Testa**:
   - ✅ Prodotti si visualizzano
   - ✅ Carrello funziona
   - ✅ Responsive su mobile
   - ✅ Tutte le funzionalità

---

## 📋 **STEP 6: Integrazione nel Sito Ramenzoni (5 minuti)**

### **Copia URL GitHub Pages**
Esempio: `https://ramenzoni-coffee.github.io/ramenzoni-eshop/`

### **Modifica Pagina Shop Esistente**

**Opzione A - File `a17_shop-online.html`:**

Sostituisci tutto il contenuto con:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop Online - Caffè Ramenzoni</title>
    <style>
        body { 
            margin: 0; 
            padding: 0; 
            font-family: Arial, sans-serif; 
            background: #FAFAFA;
        }
        
        .header { 
            background: white; 
            padding: 1rem; 
            text-align: center; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
            position: relative;
        }
        
        .header h1 { 
            margin: 0; 
            color: #8B4513; 
            font-size: 2rem; 
        }
        
        .header .tagline { 
            color: #666; 
            font-style: italic; 
            margin-top: 5px; 
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
        
        .iframe-container { 
            width: 100%; 
            height: calc(100vh - 100px); 
        }
        
        .shop-iframe { 
            width: 100%; 
            height: 100%; 
            border: none; 
        }
        
        .loading { 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            height: 200px; 
            color: #8B4513; 
            font-size: 1.2rem; 
        }
        
        @media (max-width: 768px) { 
            .shop-iframe { 
                height: calc(100vh - 80px); 
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <a href="/" class="back-link">← Torna al sito</a>
        <h1>Caffè Ramenzoni</h1>
        <p class="tagline">Shop Online • Parma • Praha</p>
    </div>
    
    <div class="iframe-container">
        <div class="loading" id="loading">☕ Caricamento shop...</div>
        <iframe 
            id="shopFrame"
            class="shop-iframe" 
            src="https://TUO-USERNAME.github.io/ramenzoni-eshop/"
            title="Caffè Ramenzoni E-Shop"
            style="display: none;">
        </iframe>
    </div>

    <script>
        document.getElementById('shopFrame').onload = function() {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('shopFrame').style.display = 'block';
        };
    </script>
</body>
</html>
```

**🚨 IMPORTANTE**: Sostituisci `TUO-USERNAME` con il tuo username GitHub!

---

## 🎯 **RISULTATO FINALE**

### **Prima:**
`http://ramenzoni.eu/a17_shop-online.html` → Pagina vuota/basic

### **Dopo:**
`http://ramenzoni.eu/a17_shop-online.html` → **E-SHOP COMPLETO!**

### **URL Diretto E-Shop:**
`https://TUO-USERNAME.github.io/ramenzoni-eshop/`

---

## ✅ **CHECKLIST VELOCE**

- [ ] Account GitHub creato/login effettuato
- [ ] Repository `ramenzoni-eshop` creato
- [ ] Files e-shop caricati (index.html, css/, js/)
- [ ] GitHub Pages attivato
- [ ] URL GitHub Pages funzionante
- [ ] Codice iframe preparato
- [ ] Pagina shop ramenzoni.eu modificata
- [ ] Test completo effettuato

---

## 🚀 **VANTAGGI GITHUB PAGES**

✅ **Gratuito** per sempre  
✅ **HTTPS** automatico  
✅ **CDN** globale veloce  
✅ **Backup** automatico  
✅ **Aggiornamenti** facili  
✅ **Zero manutenzione**  

---

## 🔄 **AGGIORNAMENTI FUTURI**

Per aggiornare l'e-shop:
1. **Modifica** files nel repository GitHub
2. **Commit** le modifiche
3. **Attendi** 1-2 minuti per il deploy automatico
4. **Aggiornamenti** live immediatamente!

---

## 📞 **SUPPORTO**

**Se hai problemi:**
- Repository non funziona? Verifica che sia pubblico
- Pages non attivo? Controlla Settings > Pages
- Iframe non carica? Verifica URL corretto
- Mobile non responsive? Testa su dispositivi diversi

**🎯 Tempo totale: 15 minuti per essere completamente online!**
