const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Umgebungsvariablen für die API-URL (sollte in .env Datei gespeichert werden)
// Fallback ist die aktuelle Web-App-URL des Google-Apps-Scripts
const GOOGLE_SHEETS_API_URL = process.env.GOOGLE_SHEETS_API_URL || 'https://script.google.com/macros/s/AKfycbwgjlBIu5F8SrOkFSugbGE2DRq5jkezyZe7l8oApVdha5o0C8Y-kweN-V4-Lke5rED5/exec';

// Proxy-Endpoint für Projekte
app.get('/api/projects', async (req, res) => {
  try {
    const response = await fetch(GOOGLE_SHEETS_API_URL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fehler beim Abrufen der Projektdaten:', error);
    res.status(500).json({ error: 'Fehler beim Laden der Projektdaten' });
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
  console.log(`Öffne http://localhost:${PORT} im Browser`);
}); 