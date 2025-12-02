# GitHub Pages Deployment - Schritt-für-Schritt

## 🚀 Schnellstart (5 Minuten)

### 1. GitHub Repository erstellen
1. Gehe zu [github.com](https://github.com)
2. Klicke auf "New repository"
3. Repository Name: `fotouploader`
4. Beschreibung: `Projekt-ID Auswahl für WinWorker Foto Upload v0.7`
5. Wähle "Public" (für kostenlose GitHub Pages)
6. Klicke "Create repository"

### 2. Dateien vorbereiten
```bash
# Stelle sicher, dass index-github.html als index.html verwendet wird
cp index-github.html index.html
```

### 3. Code hochladen
```bash
# Im Projektverzeichnis
git init
git add .
git commit -m "Initial commit: Fotouploader Projekt-ID Auswahl"
git branch -M main
git remote add origin https://github.com/malerinstitut/moseler-fotoupload.git
git push -u origin main
```

### 4. GitHub Pages aktivieren
1. Gehe zu deinem Repository auf GitHub
2. Klicke auf "Settings" (Tab)
3. Scrolle zu "Pages" (linke Seitenleiste)
4. Unter "Source":
   - Wähle "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
5. Klicke "Save"

### 5. URL für Kunden
Nach wenigen Minuten ist die App verfügbar unter:
```
https://malerinstitut.github.io/moseler-fotoupload/
```

## 📱 iOS Kurzbefehl anpassen

Im iOS Kurzbefehl die URL ändern zu:
```
https://malerinstitut.github.io/moseler-fotoupload/
```

## 🔧 Wichtige Anpassungen

### API-URL überprüfen
In `index.html` (Zeile 252):
```javascript
const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbzsKFEeKUyERYqEWlc1Spz9ufZfzDY4wBEXVErsG54qSdG4n5Qq6YIEKFPvYonjZfDgCw/exec';
```

### Logo überprüfen
- `Moseler.png` muss im Repository sein
- Logo wird automatisch angezeigt

## ✅ Checkliste vor dem Deployment

- [ ] `index-github.html` wurde zu `index.html` kopiert
- [ ] API-URL ist korrekt in `index.html`
- [ ] `Moseler.png` ist im Repository
- [ ] Alle Dateien sind committed
- [ ] GitHub Pages ist aktiviert
- [ ] URL funktioniert im Browser
- [ ] iOS Kurzbefehl wurde getestet

## 🚨 Troubleshooting

### Problem: Logo wird nicht angezeigt
**Lösung:** Überprüfe, ob `Moseler.png` im Repository ist

### Problem: API-Fehler
**Lösung:** Überprüfe die API-URL in `index.html`

### Problem: GitHub Pages lädt nicht
**Lösung:** Warte 5-10 Minuten, GitHub Pages braucht Zeit zum Deployen

### Problem: CORS-Fehler
**Lösung:** Das ist normal bei GitHub Pages, die API muss CORS erlauben

## 📈 Updates veröffentlichen

Für zukünftige Updates:
```bash
git add .
git commit -m "Update: Beschreibung der Änderungen"
git push origin main
```

GitHub Pages aktualisiert sich automatisch!

## 🎯 Nächste Schritte

1. **Teste die App** auf verschiedenen iOS-Geräten
2. **Erstelle QR-Codes** für einfache Kundenverteilung
3. **Dokumentiere** die Bedienung für Kunden
4. **Überwache** die Nutzung (optional)

---

**🎉 Fertig! Deine App ist jetzt live und für iOS-Kunden verfügbar!** 
