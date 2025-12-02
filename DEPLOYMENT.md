# 🚀 Deployment Anleitung - Fotouploader

## 📋 Vorbereitung

### 1. Dateien überprüfen
Stelle sicher, dass folgende Dateien vorhanden sind:
- ✅ `index-github.html` (wird zu `index.html`)
- ✅ `Moseler.png` (Logo)
- ✅ `README.md` (Dokumentation)
- ✅ `.gitignore` (Git-Konfiguration)

### 2. API-URL konfigurieren
In `index-github.html` (Zeile 252):
```javascript
const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbzsKFEeKUyERYqEWlc1Spz9ufZfzDY4wBEXVErsG54qSdG4n5Qq6YIEKFPvYonjZfDgCw/exec';
```

## 🎯 GitHub Repository erstellen

### Schritt 1: Repository auf GitHub
1. Gehe zu [github.com](https://github.com)
2. Klicke "New repository"
3. Repository Name: `fotouploader`
4. Beschreibung: `Projekt-ID Auswahl für WinWorker Foto Upload v0.7`
5. Wähle "Public"
6. Klicke "Create repository"

### Schritt 2: Lokale Dateien vorbereiten
```bash
# Im Projektverzeichnis
cp index-github.html index.html
```

### Schritt 3: Code hochladen
```bash
git init
git add .
git commit -m "Initial commit: Fotouploader Projekt-ID Auswahl"
git branch -M main
git remote add origin https://github.com/malerinstitut/moseler-fotoupload.git
git push -u origin main
```

## 🌐 GitHub Pages aktivieren

### Schritt 4: Pages konfigurieren
1. Gehe zu Repository Settings
2. Scrolle zu "Pages" (linke Seitenleiste)
3. Unter "Source":
   - Wähle "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
4. Klicke "Save"

### Schritt 5: URL notieren
Nach 5-10 Minuten ist die App verfügbar unter:
```
https://malerinstitut.github.io/moseler-fotoupload/
```

## 📱 iOS Kurzbefehl anpassen

### Schritt 6: Kurzbefehl aktualisieren
Im iOS Kurzbefehl die URL ändern zu:
```
https://malerinstitut.github.io/moseler-fotoupload/
```

## ✅ Finale Checkliste

- [ ] Repository ist auf GitHub erstellt
- [ ] `index-github.html` wurde zu `index.html` kopiert
- [ ] API-URL ist korrekt konfiguriert
- [ ] `Moseler.png` ist im Repository
- [ ] Alle Dateien sind committed und gepusht
- [ ] GitHub Pages ist aktiviert
- [ ] URL funktioniert im Browser
- [ ] iOS Kurzbefehl wurde getestet
- [ ] Logo wird korrekt angezeigt

## 🚨 Häufige Probleme

### Problem: Logo wird nicht angezeigt
**Lösung:** 
- Überprüfe, ob `Moseler.png` im Repository ist
- Überprüfe den Dateinamen (Groß-/Kleinschreibung)

### Problem: API-Fehler
**Lösung:**
- Überprüfe die API-URL in `index.html`
- Teste die URL direkt im Browser

### Problem: GitHub Pages lädt nicht
**Lösung:**
- Warte 5-10 Minuten
- Überprüfe die GitHub Pages Einstellungen
- Schaue in die Actions/Deployments

### Problem: CORS-Fehler
**Lösung:**
- Das ist normal bei GitHub Pages
- Die Google Sheets API muss CORS erlauben

## 📈 Updates veröffentlichen

Für zukünftige Änderungen:
```bash
# Änderungen machen
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

## 📞 Support

Bei Problemen:
1. Überprüfe die GitHub Pages Einstellungen
2. Schaue in die Browser-Konsole für Fehler
3. Teste die API-URL direkt
4. Überprüfe die CORS-Einstellungen

---

**🎉 Fertig! Deine App ist jetzt live und für iOS-Kunden verfügbar!**

**URL:** `https://malerinstitut.github.io/moseler-fotoupload/` 
