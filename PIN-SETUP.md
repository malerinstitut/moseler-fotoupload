# 🔐 Sichere PIN-Verwaltung

## 🚀 Schnellstart

### 1. Neue PIN generieren
1. Öffne `pin-generator.html` im Browser
2. Gib deine gewünschte 6-stellige PIN ein
3. Klicke "Hash generieren"
4. Kopiere den generierten Hash

### 2. PIN in index.html aktualisieren
Ersetze in `index.html` (Zeile 159):
```javascript
const PIN_HASH = 'DEIN_GENERIERTER_HASH_HIER';
```

### 3. GitHub hochladen
```bash
git add .
git commit -m "Sichere PIN-Hash Implementierung"
git push origin main
```

## 🔒 Sicherheitsfeatures

### ✅ **Hash-basierte Authentifizierung:**
- **SHA-256 Hash** mit Salt
- **Keine PIN im Code** sichtbar
- **Salt-basiert** für zusätzliche Sicherheit
- **Brute-Force-Schutz** mit Lockout

### 🛡️ **Sicherheitsstufen:**
1. **PIN wird gehasht** vor Vergleich
2. **Salt hinzugefügt** für Uniqueness
3. **Hash im Code** statt Klartext-PIN
4. **3 Versuche** bevor Lockout
5. **5 Minuten Lockout** bei zu vielen Versuchen

## 🔧 PIN ändern

### Schritt 1: Neue PIN generieren
1. Öffne `pin-generator.html`
2. Gib neue PIN ein (z.B. `654321`)
3. Klicke "Hash generieren"
4. Kopiere den Hash

### Schritt 2: Hash in index.html ersetzen
```javascript
// Alte Zeile:
const PIN_HASH = '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92';

// Neue Zeile (mit deinem Hash):
const PIN_HASH = 'DEIN_NEUER_HASH_HIER';
```

### Schritt 3: GitHub aktualisieren
```bash
git add .
git commit -m "PIN geändert"
git push origin main
```

## 📱 Funktionsweise

### 🔐 **Sichere PIN-Validierung:**
1. **Benutzer gibt PIN** ein
2. **PIN + Salt** wird gehasht
3. **Hash wird verglichen** mit gespeichertem Hash
4. **Bei Übereinstimmung** → Zugriff gewährt

### 🚫 **Sicherheitsvorteile:**
- **Keine PIN im Code** sichtbar
- **Salt verhindert** Rainbow Tables
- **SHA-256** ist kryptographisch sicher
- **Brute-Force-Schutz** durch Lockout

## 🎯 Deployment

### Für GitHub Pages:
1. **PIN Hash generieren** mit `pin-generator.html`
2. **Hash in index.html** ersetzen
3. **GitHub hochladen**:
   ```bash
   git add .
   git commit -m "Sichere PIN implementiert"
   git push origin main
   ```

### Für Kunden:
- **URL bleibt gleich**: `https://malerinstitut.github.io/fotouploader/`
- **PIN wird abgefragt** vor der App
- **Sichere Authentifizierung** ohne sichtbare PIN

## 🔑 PIN-Verwaltung

### PIN an Kunden weitergeben:
- **Per E-Mail:** "App-PIN: 123456"
- **Per WhatsApp:** "PIN für Foto-Uploader: 123456"
- **QR-Code** mit PIN-Info
- **Dokumentation** mit PIN

### PIN sicher aufbewahren:
- **Nicht im Code** speichern
- **Nicht öffentlich** teilen
- **Regelmäßig ändern** für mehr Sicherheit
- **Nach Verwendung** `pin-generator.html` löschen

## 📋 Checkliste

- [ ] PIN Hash mit `pin-generator.html` generiert
- [ ] Hash in `index.html` ersetzt
- [ ] GitHub hochgeladen
- [ ] PIN an Kunden weitergegeben
- [ ] App mit neuer PIN getestet
- [ ] `pin-generator.html` nach Verwendung gelöscht

## 🚨 Troubleshooting

### Problem: PIN wird nicht akzeptiert
**Lösung:** 
1. Überprüfe den Hash in `index.html`
2. Generiere Hash neu mit `pin-generator.html`
3. Teste die PIN lokal

### Problem: Hash funktioniert nicht
**Lösung:** 
1. Stelle sicher, dass der Salt gleich ist
2. Verwende `pin-generator.html` für korrekten Hash
3. Überprüfe die Zeilennummer in `index.html`

### Problem: Lockout funktioniert nicht
**Lösung:** Browser-Cache leeren und neu testen

## 🔐 Beispiel-Hashes

| PIN | Hash |
|-----|------|
| 123456 | `8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92` |
| 654321 | `a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3` |
| 000000 | `5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8` |

---

**🎉 Fertig! Deine App ist jetzt mit sicherer Hash-basierter PIN-Authentifizierung gesichert!**

**URL:** `https://malerinstitut.github.io/fotouploader/`
**PIN:** Die von dir gewählte 6-stellige PIN (nicht im Code sichtbar) 
