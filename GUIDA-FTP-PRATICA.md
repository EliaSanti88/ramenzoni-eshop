# 🚀 Guida Pratica Accesso FTP - Ramenzoni.eu

## 📋 **INFORMAZIONI FTP DA PROVARE**

### **Configurazioni Standard da Testare:**

#### **Configurazione 1 (Standard):**
- **Host**: `ftp.ramenzoni.eu`
- **Porta**: `21`
- **Username**: `ramenzoni` o `admin` o `root`
- **Password**: [da scoprire]
- **Tipo**: FTP normale

#### **Configurazione 2 (Alternativa):**
- **Host**: `ramenzoni.eu`
- **Porta**: `21`
- **Username**: [da scoprire]
- **Password**: [da scoprire]
- **Tipo**: FTP normale

#### **Configurazione 3 (Sicura):**
- **Host**: `ramenzoni.eu`
- **Porta**: `22`
- **Username**: [da scoprire]
- **Password**: [da scoprire]
- **Tipo**: SFTP (SSH File Transfer Protocol)

---

## 🔧 **METODO 1: FileZilla (CONSIGLIATO)**

### **Download e Installazione:**
1. Vai su https://filezilla-project.org/
2. Scarica "FileZilla Client" (GRATUITO)
3. Installa con impostazioni predefinite

### **Configurazione Connessione:**
1. Apri FileZilla
2. File → Gestore Siti → Nuovo sito
3. Inserisci dati:
   ```
   Nome: Ramenzoni E-Shop
   Host: ftp.ramenzoni.eu
   Porta: 21
   Protocollo: FTP - File Transfer Protocol
   Crittografia: Solo FTP normale (insicuro)
   Tipo di accesso: Normale
   Username: [prova: ramenzoni, admin, root]
   Password: [da richiedere o provare]
   ```

### **Test Connessione:**
- Click "Connetti"
- Se errore, prova altre configurazioni

---

## 🔧 **METODO 2: Browser Web**

### **Accesso Diretto:**
Prova questi URL nel browser:
```
ftp://ramenzoni.eu
ftp://ftp.ramenzoni.eu
```
Il browser chiederà username/password.

---

## 🔧 **METODO 3: Pannello Hosting**

### **URL Pannelli da Provare:**
```
https://ramenzoni.eu:2083        (cPanel)
https://ramenzoni.eu:8443        (Plesk)
https://ramenzoni.eu/cpanel      (cPanel alternativo)
https://ramenzoni.eu/plesk       (Plesk alternativo)
https://cp.ramenzoni.eu          (Control Panel)
https://panel.ramenzoni.eu       (Panel)
https://admin.ramenzoni.eu       (Admin)
```

---

## 🔍 **IDENTIFICARE IL PROVIDER HOSTING**

### **Comando per Identificare Server:**
Apri Command Prompt (cmd) e digita:
```bash
nslookup ramenzoni.eu
ping ramenzoni.eu
```

### **Provider Comuni e Loro Pannelli:**

#### **Se è Aruba:**
- Pannello: https://admin.aruba.it/
- FTP: ftp.ramenzoni.eu
- Username: formato email o codice cliente

#### **Se è SiteGround:**
- Pannello: https://tools.siteground.com/
- FTP: formato standard

#### **Se è Tophost:**
- Pannello: pannello personalizzato
- FTP: ftp.nomedominio.ext

---

## 📞 **COME OTTENERE CREDENZIALI**

### **Metodo 1: Email di Benvenuto**
Cerca nelle email:
- Soggetti: "Benvenuto", "Attivazione", "Hosting", "FTP"
- Mittenti: provider hosting, registrar dominio
- Periodo: quando è stato registrato il dominio

### **Metodo 2: Fatture Hosting**
- Controlla fatture hosting per provider
- Molte fatture includono dati di accesso

### **Metodo 3: Contatto Provider**
Se trovi il provider, contattali con:
- Documento identità
- Fatture pagamento
- Email registrazione dominio

---

## 🚀 **TEST RAPIDO - PROVA SUBITO**

### **Step 1: Identifica Provider**
```bash
# Copia e incolla nel Command Prompt
nslookup ramenzoni.eu
```

### **Step 2: Prova Pannelli Web**
Clicca questi link uno per uno:
- [cPanel](https://ramenzoni.eu:2083)
- [Plesk](https://ramenzoni.eu:8443)
- [Control Panel](https://ramenzoni.eu/cpanel)

### **Step 3: Test FTP con FileZilla**
1. Host: `ftp.ramenzoni.eu`
2. Username: prova `ramenzoni`, `admin`, `root`
3. Password: prova password comuni o lascia vuoto

---

## 🔐 **PASSWORD COMUNI DA PROVARE**

⚠️ **ATTENZIONE**: Usa solo per siti di tua proprietà!

### **Username Comuni:**
- `ramenzoni`
- `admin`
- `root`
- `ftp`
- `user`
- `web`

### **Password da Provare (se autorizzato):**
- La stessa del username
- `password`
- `123456`
- `admin`
- Nome azienda + anno (es: `ramenzoni2024`)
- Lasciare vuoto (accesso anonimo)

---

## 📱 **APP MOBILE FTP**

### **Android:**
- AndFTP
- FTP Manager

### **iOS:**
- FTP Client Pro
- Transmit

---

## 🆘 **RISOLUZIONE PROBLEMI**

### **Errore: "Connessione rifiutata"**
- Provider potrebbe bloccare FTP
- Prova SFTP (porta 22)
- Contatta provider per sblocco

### **Errore: "Login fallito"**
- Username/password errati
- Account FTP potrebbe essere disabilitato
- Richiedi reset credenziali

### **Errore: "Timeout"**
- Firewall/antivirus blocca connessione
- Prova modalità passiva in FileZilla
- Prova da rete diversa

---

## ✅ **CHECKLIST ACCESSO FTP**

- [ ] FileZilla installato
- [ ] Provato ftp.ramenzoni.eu
- [ ] Provato ramenzoni.eu
- [ ] Testato pannelli web
- [ ] Controllato email per credenziali
- [ ] Identificato provider hosting
- [ ] Contattato supporto se necessario

---

**🎯 OBIETTIVO: Una volta dentro, dovrai navigare in `public_html` o `www` e caricare la cartella `shop/` con tutti i file dell'e-shop!**

Inizia provando il comando `nslookup ramenzoni.eu` per identificare il provider, poi testa i pannelli web!
