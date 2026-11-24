/* Build-time renderer used by scripts/prerender.js to write real HTML for every page. */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

export { pages } from './routes'
export { getMeta } from './seo'

export function render(path) {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')
  return renderToString(
    <StrictMode>
      <StaticRouter basename={basename || '/'} location={basename + path}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
