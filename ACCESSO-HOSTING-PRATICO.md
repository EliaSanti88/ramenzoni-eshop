# 🔐 ACCESSO HOSTING RAMENZONI.EU - Guida Pratica

## 🎯 **IDENTIFICAZIONE PROVIDER HOSTING**

Dal nostro precedente check, ramenzoni.eu è hostato su:
- **IP**: 195.225.169.251
- **Provider**: Probabilmente Aruba.it o hosting italiano
- **Tipo**: Hosting condiviso con pannello di controllo

---

## 🔍 **COME TROVARE LE CREDENZIALI**

### **Opzione 1: Email di Benvenuto Hosting**
Cerca nelle email una con oggetto tipo:
- "Benvenuto in Aruba"
- "Attivazione hosting"
- "Dati accesso cPanel"
- "Configurazione dominio"

**Informazioni da cercare:**
- URL pannello: `https://ramenzoni.eu:2083` o `https://cpanel.aruba.it`
- Username: spesso è il dominio o parte di esso
- Password: quella assegnata o modificata

### **Opzione 2: Contatto Provider**
Se non trovi le email:
1. **Vai su**: sito del provider hosting (es. aruba.it)
2. **Login**: "Area clienti" o "Pannello di controllo"
3. **Recupera credenziali**: "Password dimenticata"

### **Opzione 3: Contatta Webmaster**
Se il sito è gestito da terzi:
- Chiedi credenziali FTP al webmaster
- Richiedi accesso File Manager
- Fai caricare i file direttamente

---

## 🚪 **TIPI DI ACCESSO POSSIBILI**

### **A) Pannello cPanel (PIÙ COMUNE)**
- **URL**: `https://ramenzoni.eu:2083` o `https://cpanel.aruba.it`
- **Sezione**: "File Manager"
- **Cartella**: `public_html` o `www`

### **B) Pannello Plesk**
- **URL**: `https://ramenzoni.eu:8443`
- **Sezione**: "File" o "Gestione File"
- **Cartella**: `httpdocs`

### **C) FTP Diretto**
- **Server**: `ftp.ramenzoni.eu` o `195.225.169.251`
- **Porta**: 21 (standard)
- **Client**: FileZilla (gratuito)

### **D) SFTP/SSH**
- **Server**: `ramenzoni.eu`
- **Porta**: 22
- **Client**: WinSCP o FileZilla

---

## 🔧 **ISTRUZIONI SPECIFICHE PER PROVIDER**

### **Se è Aruba.it:**
1. **Login**: https://admin.aruba.it
2. **Servizi**: Seleziona hosting
3. **Gestione**: "File Manager Web"
4. **Cartella**: `public_html`

### **Se è SiteGround:**
1. **Login**: https://my.siteground.com
2. **Websites**: Seleziona dominio
3. **Site Tools**: "File Manager"
4. **Cartella**: `public_html`

### **Se è hosting generico:**
1. **URL**: Prova `https://ramenzoni.eu/cpanel`
2. **User**: spesso `ramenzoni` o `admin`
3. **File Manager**: Cerca sezione files

---

## 📞 **SE NON RIESCI AD ACCEDERE**

### **Contatti da Provare:**
1. **Email webmaster**: webmaster@ramenzoni.eu
2. **Email generica**: info@ramenzoni.eu
3. **Telefono**: Cerca contatti sul sito

### **Informazioni da Richiedere:**
- Credenziali pannello hosting
- Accesso FTP (server, user, password)
- Permessi di caricamento file
- Posizione cartella web (public_html)

---

## 🎯 **PROSSIMO STEP**

**Una volta ottenuto l'accesso, procederemo con:**
1. **Navigazione** nella cartella web
2. **Creazione** cartella `shop`
3. **Upload** files e-shop
4. **Test** funzionamento
5. **Integrazione** nel menu esistente

**🚀 Dimmi che tipo di accesso hai o se dobbiamo prima recuperare le credenziali!**
