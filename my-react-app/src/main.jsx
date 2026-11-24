import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import './styles/style.css'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'
const container = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Built pages arrive pre-rendered (see scripts/prerender.js); the dev server sends an empty root.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)
