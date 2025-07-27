# iOS-Verteilung - Verschiedene Methoden

## 🥇 Option 1: GitHub Pages (Empfohlen)
**Einfachste Lösung für die meisten Fälle**

### Vorteile:
- ✅ Kostenlos
- ✅ Automatische HTTPS
- ✅ Einfach zu aktualisieren
- ✅ Funktioniert auf allen iOS-Geräten
- ✅ Keine App Store Freigabe nötig

### Nachteile:
- ❌ API-URL ist sichtbar (Sicherheitsrisiko)
- ❌ Kein Backend-Proxy

### Setup:
1. Repository auf GitHub erstellen
2. `index-github.html` als `index.html` hochladen
3. GitHub Pages aktivieren
4. URL an Kunden weitergeben

---

## 🥈 Option 2: Netlify/Vercel (Kostenlos)
**Professionelle Hosting-Lösung**

### Vorteile:
- ✅ Kostenlos
- ✅ Automatische HTTPS
- ✅ Custom Domain möglich
- ✅ Einfache Updates
- ✅ Analytics verfügbar

### Setup:
1. Account auf netlify.com erstellen
2. Repository verbinden
3. Automatische Deployments
4. Custom Domain einrichten (optional)

---

## 🥉 Option 3: Eigener Server (Sicherste Lösung)
**Für Unternehmen mit eigenen Servern**

### Vorteile:
- ✅ Vollständige Kontrolle
- ✅ Backend-Proxy möglich
- ✅ API-URL versteckt
- ✅ Custom Domain
- ✅ SSL-Zertifikat

### Setup:
1. Server mieten (Hetzner, DigitalOcean, etc.)
2. Node.js Backend deployen
3. Domain einrichten
4. SSL-Zertifikat installieren

---

## 📱 Option 4: iOS Web App (PWA)
**App-ähnliches Erlebnis**

### Vorteile:
- ✅ Kann als App installiert werden
- ✅ Offline-Funktionalität möglich
- ✅ App-Icon auf Homescreen
- ✅ Vollbild-Modus

### Setup:
1. Web App Manifest hinzufügen
2. Service Worker implementieren
3. iOS-spezifische Meta-Tags
4. Kunden installieren über Safari

---

## 🚀 Option 5: QR-Code Verteilung
**Einfachste Kundenverteilung**

### Setup:
1. URL generieren (GitHub Pages, Netlify, etc.)
2. QR-Code erstellen (qrcode-monkey.com)
3. QR-Code ausdrucken/versenden
4. Kunden scannen mit Kamera

---

## 📋 Checkliste für Kundenverteilung

### Vor der Verteilung:
- [ ] Logo ist sichtbar
- [ ] Design funktioniert auf iOS
- [ ] API-URL ist korrekt
- [ ] iOS Kurzbefehl ist getestet
- [ ] QR-Code funktioniert

### Für Kunden:
- [ ] Kurzanleitung erstellen
- [ ] Screenshots der Bedienung
- [ ] Kontakt für Support
- [ ] Backup-URL bereitstellen

---

## 🔧 Technische Anpassungen

### Für GitHub Pages:
```bash
# index-github.html umbenennen zu index.html
mv index-github.html index.html
```

### Für eigene Domain:
```javascript
// In index.html die URL anpassen
const SHEET_API_URL = 'https://deine-domain.com/api/projects';
```

### Für iOS Web App:
```html
<!-- Meta-Tags für iOS Web App -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Projekt-ID Auswahl">
<link rel="apple-touch-icon" href="Moseler.png">
```

---

## 💡 Empfehlung

**Für die meisten Fälle: GitHub Pages**
- Einfachste Einrichtung
- Kostenlos
- Schnell umsetzbar
- Funktioniert sofort

**Für Unternehmen: Eigener Server**
- Maximale Sicherheit
- Vollständige Kontrolle
- Professioneller Eindruck 