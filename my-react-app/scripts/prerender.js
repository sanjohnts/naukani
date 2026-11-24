// After `vite build`, write a real HTML file for every page so the site works on any static
// host (GitHub Pages included) and search engines see full content and per-page <head> tags.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, pages, getMeta } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function headTags(meta) {
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
  ]
  if (meta.url) {
    tags.push(`<link rel="canonical" href="${esc(meta.url)}">`, `<meta property="og:url" content="${esc(meta.url)}">`)
  }
  if (meta.noindex) tags.push('<meta name="robots" content="noindex">')
  if (meta.jsonLd) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')}</script>`)
  }
  return tags.join('\n')
}

function writePage(route, file) {
  const html = template
    .replace('<!--app-head-->', headTags(getMeta(route)))
    .replace('<!--app-html-->', render(route))
  const out = path.join(dist, file)
  return fs.mkdir(path.dirname(out), { recursive: true }).then(() => fs.writeFile(out, html))
}

for (const { path: route } of pages) {
  await writePage(route, route === '/' ? 'index.html' : `${route.slice(1)}/index.html`)
}
await writePage('/404', '404.html')
await fs.rm(ssrDir, { recursive: true, force: true })
console.log(`Pre-rendered ${pages.length} pages + 404.html into dist/`)
