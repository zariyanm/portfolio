import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleContactForm } from './server/contactHandler.js';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API Endpoint for contact form submission
app.post('/api/contact', (req, res) => {
  handleContactForm(req, res);
});

// Serve static frontend build files
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
});
