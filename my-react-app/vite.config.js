import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// BASE_PATH is the folder the site is served from, e.g. "/naukani/" on GitHub Pages
// (set by .github/workflows/deploy.yml). Leave it unset for a domain root.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
