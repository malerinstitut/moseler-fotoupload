# Fotouploader - Projekt-ID Auswahl

Eine moderne Web-Anwendung zur Auswahl von Projekt-IDs für den WinWorker Foto Upload Kurzbefehl auf iOS-Geräten.

## 🚀 Live Demo

Die Anwendung ist verfügbar unter: [https://malerinstitut.github.io/fotouploader/](https://malerinstitut.github.io/fotouploader/)

## ✨ Features

- 🔍 **Intelligente Suche**: Teilsuche in Projektnamen
- 📱 **iOS-optimiert**: Perfekt für mobile Geräte
- 🎨 **Modernes Design**: Bootstrap 5 mit Custom Styling
- ⚡ **Schnelle Performance**: Caching für bessere Ladezeiten
- 🔗 **iOS Kurzbefehl Integration**: Direkte Weiterleitung an Shortcuts
- 🏢 **Firmenbranding**: Moseler Logo Integration

## 🛠️ Installation

### Für lokale Entwicklung:

1. **Repository klonen:**
   ```bash
   git clone https://github.com/malerinstitut/fotouploader.git
   cd fotouploader
   ```

2. **Abhängigkeiten installieren (optional für Backend):**
   ```bash
   npm install
   ```

3. **Lokalen Server starten:**
   ```bash
   # Für Backend-Version
   npm start
   
   # Oder einfach index.html in Browser öffnen
   ```

### Für GitHub Pages Deployment:

1. **Repository auf GitHub erstellen**
2. **Code hochladen:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/malerinstitut/fotouploader.git
   git push -u origin main
   ```

3. **GitHub Pages aktivieren:**
   - Gehe zu Repository Settings
   - Scrolle zu "Pages"
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
   - Save

## 📁 Projektstruktur

```
fotouploader/
├── index.html              # Hauptanwendung (GitHub Pages Version)
├── index-github.html       # Version ohne Backend
├── server.js              # Node.js Backend (optional)
├── package.json           # Node.js Dependencies
├── Moseler.png           # Firmenlogo
├── README.md             # Diese Datei
├── .gitignore            # Git Ignore Regeln
├── deploy-github.md      # GitHub Pages Anleitung
├── ios-verteilung.md     # iOS Verteilungsoptionen
└── env.example           # Umgebungsvariablen Template
```

## 🔧 Konfiguration

### API-URL anpassen:

In `index.html` oder `index-github.html`:
```javascript
const SHEET_API_URL = 'https://script.google.com/macros/s/DEINE_API_URL/exec';
```

### Für Backend-Version:
```javascript
const SHEET_API_URL = '/api/projects'; // Wird über Backend-Proxy geleitet
```

## 📱 iOS Kurzbefehl Integration

Die Anwendung ist für die Integration mit iOS Kurzbefehlen optimiert:

1. **Kurzbefehl erstellen** in der Shortcuts App
2. **"Webseite öffnen"** Aktion hinzufügen
  3. **URL eingeben**: `https://malerinstitut.github.io/fotouploader/`
4. **"Kurzbefehl ausführen"** Aktion hinzufügen
5. **Name**: `WinWorker Foto Upload BETA`

## 🎨 Customization

### Logo ändern:
- Ersetze `Moseler.png` mit deinem Logo
- Anpasse die Größe in CSS: `.logo { max-height: 80px; }`

### Farben anpassen:
```css
/* Hauptfarben in index.html */
:root {
  --primary-color: #007bff;
  --secondary-color: #0056b3;
  --background-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
```

## 🔒 Sicherheit

### Für Produktionsumgebung:
- Verwende HTTPS
- Implementiere Rate-Limiting
- Logge API-Zugriffe
- Verwende Umgebungsvariablen für sensible Daten

### Backend-Proxy (empfohlen):
```bash
npm install
cp env.example .env
# Bearbeite .env mit deiner API-URL
npm start
```

## 🚀 Deployment Optionen

### 1. GitHub Pages (Einfachste)
- ✅ Kostenlos
- ✅ Automatische HTTPS
- ✅ Einfache Updates

### 2. Netlify/Vercel (Professionell)
- ✅ Kostenlos
- ✅ Custom Domain
- ✅ Analytics

### 3. Eigener Server (Sicherste)
- ✅ Vollständige Kontrolle
- ✅ Backend-Proxy möglich
- ✅ Custom Domain

## 📞 Support

Bei Fragen oder Problemen:
1. Erstelle ein Issue auf GitHub
2. Kontaktiere den Entwickler
3. Überprüfe die Dokumentation

## 📄 Lizenz

Dieses Projekt ist für interne Unternehmensnutzung bestimmt.

---

**Entwickelt für Moseler - WinWorker Foto Upload System** 