import 'dotenv/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { handleContactForm } from './server/contactHandler.js'

const contactApiPlugin = () => ({
  name: 'contact-api-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/contact' && req.method === 'POST') {
        handleContactForm(req, res);
      } else {
        next();
      }
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), contactApiPlugin()],
})


