import { pages } from './routes'

// The address the site is meant to live at; canonical and social-preview URLs point here.
export const SITE_URL = 'https://www.nadukanisafaripark.com'
export const SITE_NAME = 'Nadukani Zoo & Safari Park'

const NOT_FOUND = {
  title: `Page not found | ${SITE_NAME}`,
  description: 'This page does not exist. Browse project information for the proposed Nadukani Zoo & Safari Park.',
  noindex: true,
}

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}

// Head metadata for a router path (without the base path).
export function getMeta(pathname) {
  const path = normalizePath(pathname)
  const page = pages.find((p) => p.path === path)
  if (!page) return { ...NOT_FOUND, url: null }
  return {
    title: page.title,
    description: page.description,
    jsonLd: page.jsonLd,
    url: SITE_URL + path,
  }
}
