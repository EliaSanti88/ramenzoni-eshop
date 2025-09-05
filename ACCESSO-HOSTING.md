# 🔐 Guida Accesso Hosting - Ramenzoni.eu

## 🎯 **COME ACCEDERE ALL'HOSTING**

### **Metodo 1: Pannello di Controllo Hosting**

#### **Se hai cPanel:**
1. Vai su `https://ramenzoni.eu:2083` o `https://ramenzoni.eu/cpanel`
2. Inserisci **username** e **password** forniti dal provider hosting
3. Cerca "File Manager" o "Gestione File"
4. Naviga nella cartella `public_html` o `www`

#### **Se hai Plesk:**
1. Vai su `https://ramenzoni.eu:8443` 
2. Login con credenziali hosting
3. Vai su "File" → "File Manager"

#### **Altri Pannelli (DirectAdmin, etc.):**
- Contatta il provider hosting per URL specifico
- Generalmente formato: `https://server.provider.com:port`

---

### **Metodo 2: FTP (File Transfer Protocol)**

#### **Con FileZilla (Gratuito):**
1. Scarica FileZilla da `https://filezilla-project.org/`
2. Configura connessione:
   - **Host**: `ftp.ramenzoni.eu` o `ramenzoni.eu`
   - **Username**: [da richiedere al provider]
   - **Password**: [da richiedere al provider]  
   - **Porta**: 21 (standard) o 22 (SFTP sicuro)

#### **Con WinSCP (Windows):**
1. Scarica da `https://winscp.net/`
2. Stesso setup di FileZilla

---

### **Metodo 3: SSH (Per Utenti Avanzati)**
```bash
ssh username@ramenzoni.eu
# Inserisci password quando richiesta
```

---

## 📋 **INFORMAZIONI DA RICHIEDERE AL PROVIDER**

### **Credenziali Necessarie:**
- ✅ **Username Hosting** (es: ramenzoni_admin)
- ✅ **Password Hosting**
- ✅ **Server FTP** (es: ftp.ramenzoni.eu)
- ✅ **URL Pannello Controllo** (es: https://server.provider.com:2083)

### **Dove Trovare Queste Info:**
1. **Email di Benvenuto** del provider hosting
2. **Area Clienti** del provider (Aruba, SiteGround, etc.)
3. **Contatto Supporto** del provider hosting

---

## 🏢 **PROVIDER HOSTING COMUNI IN ITALIA/EU**

### **Se l'hosting è con:**

#### **Aruba.it:**
- Pannello: `https://admin.aruba.it/`
- Login area clienti → Hosting → Gestione

#### **SiteGround:**
- Pannello: `https://tools.siteground.com/`
- cPanel standard

#### **Tophost:**
- Pannello personalizzato
- Login da sito tophost.it

#### **Hosting Solutions:**
- Varia in base al provider specifico

---

## 🚀 **PASSAGGI RAPIDI UPLOAD E-SHOP**

### **Una volta dentro il File Manager:**

1. **Naviga nella Root:**
   ```
   public_html/          (o)
   www/                  (o)
   htdocs/              (o)
   [nome-dominio]/
   ```

2. **Crea Cartella Shop:**
   - Click destro → "Nuova Cartella"
   - Nome: `shop`

3. **Carica Files E-Shop:**
   - Seleziona tutti i file del progetto
   - Drag & drop nella cartella `shop/`
   - Oppure usa "Upload" → "Seleziona Files"

4. **Struttura Finale:**
   ```
   ramenzoni.eu/
   ├── index.php (esistente)
   ├── shop/
   │   ├── index.html
   │   ├── css/styles.css
   │   ├── js/app.js
   │   └── ...
   └── (altri file esistenti)
   ```

5. **Test:**
   - Vai su `http://ramenzoni.eu/shop/`
   - Verifica che l'e-shop funzioni

---

## 🔧 **INTEGRAZIONE NEL SITO ESISTENTE**

### **Opzione A: Link Semplice**
Aggiungi nel menu esistente:
```html
<a href="/shop/">Shop Online</a>
```

### **Opzione B: Pagina Integrata**
1. Carica `shop-integrato.php` nella root
2. Rinomina in `shop.php` 
3. Vai su `http://ramenzoni.eu/shop.php`

### **Opzione C: Modifica Shop Esistente**
Se esiste già `a17_shop-online.html`, sostituisci il contenuto con l'e-shop.

---

## 🆘 **PROBLEMI COMUNI E SOLUZIONI**

### **❌ "Non riesco ad accedere al pannello"**
- Verifica URL pannello con provider
- Controlla credenziali (case-sensitive)
- Prova browser diverso/modalità incognita

### **❌ "Errore 500 dopo upload"**
- Verifica permessi file (755 per cartelle, 644 per file)
- Controlla sintassi PHP se usi file .php

### **❌ "E-shop non si carica"**
- Verifica percorsi file CSS/JS
- Apri console browser (F12) per errori
- Controlla che tutti i file siano caricati

### **❌ "Problemi di design"**
- Conflitti CSS con sito esistente
- Aggiungi `!important` alle regole CSS critiche

---

## 📞 **SUPPORTO TECNICO**

### **Se Non Riesci ad Accedere:**
1. **Contatta Provider Hosting**:
   - Richiedi credenziali FTP/Pannello
   - Fai reset password se necessario

2. **Documentazione Necessaria**:
   - Fatture hosting
   - Email di registrazione dominio
   - Documenti identità per verifica

3. **Alternative**:
   - Chiedi a chi ha gestito il sito in precedenza
   - Controlla email aziendali per credenziali salvate

---

**💡 TIP: Molti provider inviano email con tutti i dettagli di accesso quando si registra il servizio hosting. Cerca nelle email "benvenuto", "attivazione hosting", "credenziali accesso".**
