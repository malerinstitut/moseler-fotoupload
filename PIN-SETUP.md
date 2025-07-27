# 🔐 PIN-Schutz Setup

## 🚀 Schnellstart

### 1. PIN ändern
In `index-pin.html` (Zeile 158):
```javascript
const CORRECT_PIN = '147666'; // Hier die gewünschte PIN ändern
```

### 2. Dateien umbenennen
```bash
# index-pin.html wird zur Hauptseite
cp index-pin.html index.html
cp index.html index-app.html
```

### 3. GitHub hochladen
```bash
git add .
git commit -m "PIN-Schutz hinzugefügt"
git push origin main
```

## 🔧 PIN-Konfiguration

### Standard-PIN ändern:
1. Öffne `index-pin.html`
2. Suche Zeile 158: `const CORRECT_PIN = '123456';`
3. Ändere `'123456'` zu deiner gewünschten PIN
4. Speichere die Datei

### Sicherheitseinstellungen:
```javascript
const MAX_ATTEMPTS = 3;           // Maximale Versuche
const LOCKOUT_TIME_MS = 5 * 60 * 1000; // Lockout-Zeit (5 Minuten)
```

## 📱 Funktionsweise

### 🔒 PIN-Abfrage:
- **6-stellige PIN** erforderlich
- **Nur Zahlen** erlaubt
- **3 Versuche** bevor Lockout
- **5 Minuten** Lockout bei zu vielen Versuchen

### ✅ Nach erfolgreicher PIN:
- **Weiterleitung** zur Hauptanwendung
- **24 Stunden** gültig
- **Automatische Abmeldung** nach 24h

### 🚫 Sicherheitsfeatures:
- **Keine PIN-Speicherung** im Code
- **Session-basiert** (nur im Browser)
- **Automatischer Logout** nach 24h
- **Brute-Force-Schutz** mit Lockout

## 🎯 Deployment

### Für GitHub Pages:
1. **PIN konfigurieren** in `index-pin.html`
2. **Dateien umbenennen**:
   ```bash
   cp index-pin.html index.html
   cp index.html index-app.html
   ```
3. **GitHub hochladen**:
   ```bash
   git add .
   git commit -m "PIN-Schutz aktiviert"
   git push origin main
   ```

### Für Kunden:
- **URL bleibt gleich**: `https://malerinstitut.github.io/fotouploader/`
- **PIN wird abgefragt** vor der App
- **Einfache Bedienung** für autorisierte Nutzer

## 🔑 PIN-Verwaltung

### PIN an Kunden weitergeben:
- **Per E-Mail** mit PIN
- **Per WhatsApp** mit PIN
- **QR-Code** mit PIN-Info
- **Dokumentation** mit PIN

### PIN ändern:
1. **Neue PIN** in `index-pin.html` setzen
2. **GitHub hochladen**:
   ```bash
   git add .
   git commit -m "PIN geändert"
   git push origin main
   ```
3. **Kunden informieren** über neue PIN

## 📋 Checkliste

- [ ] PIN in `index-pin.html` geändert
- [ ] Dateien umbenannt (`index-pin.html` → `index.html`)
- [ ] GitHub hochgeladen
- [ ] PIN an Kunden weitergegeben
- [ ] App getestet mit PIN
- [ ] Lockout-Funktion getestet

## 🚨 Troubleshooting

### Problem: PIN wird nicht akzeptiert
**Lösung:** Überprüfe die PIN in `index-pin.html` (Zeile 158)

### Problem: App lädt nicht nach PIN
**Lösung:** Überprüfe, ob `index.html` die richtige Hauptanwendung ist

### Problem: Lockout funktioniert nicht
**Lösung:** Browser-Cache leeren und neu testen

---

**🎉 Fertig! Deine App ist jetzt mit PIN-Schutz gesichert!**

**URL:** `https://malerinstitut.github.io/fotouploader/`
**PIN:** Die von dir gewählte 6-stellige PIN 
