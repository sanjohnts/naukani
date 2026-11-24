import { useEffect, useLayoutEffect, useRef } from 'react'
import { getMeta } from '../seo'

// Find or create <tag key="value">, then set attr to content (or remove the tag when content is empty).
function setHead(tag, key, value, attr, content) {
  let el = document.head.querySelector(`${tag}[${key}="${value}"]`)
  if (!content) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement(tag)
    el.setAttribute(key, value)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, content)
}

/** Keep <title>, description, canonical and social tags in step with the current page. */
export function usePageMeta(pathname) {
  useEffect(() => {
    const m = getMeta(pathname)
    document.title = m.title
    setHead('meta', 'name', 'description', 'content', m.description)
    setHead('meta', 'property', 'og:title', 'content', m.title)
    setHead('meta', 'property', 'og:description', 'content', m.description)
    setHead('meta', 'property', 'og:url', 'content', m.url)
    setHead('link', 'rel', 'canonical', 'href', m.url)
    setHead('meta', 'name', 'robots', 'content', m.noindex ? 'noindex' : null)
  }, [pathname])
}

// Scroll so `el` sits where a normal #anchor jump would put it. offsetTop ignores the
// slide-up transform on not-yet-revealed [data-reveal] sections, so the landing spot is exact.
function scrollToElement(el, behavior) {
  let y = 0
  for (let n = el; n; n = n.offsetParent) y += n.offsetTop
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
  const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
  window.scrollTo({ top: y - margin - padding, behavior })
}

/** New page: jump to the top (or to #hash). Same page, new #hash: scroll smoothly to it. */
export function useScrollOnNavigate(pathname, hash) {
  const lastPath = useRef(null)
  useLayoutEffect(() => {
    const firstLoad = lastPath.current === null
    const newPage = lastPath.current !== pathname
    lastPath.current = pathname
    // On first load the browser has already jumped to #hash in the pre-rendered page.
    if (firstLoad && window.scrollY > 0) return
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) scrollToElement(target, newPage ? 'instant' : 'smooth')
    else if (newPage && !firstLoad) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
}

/** Fade sections marked data-reveal in as they scroll into view (see .js [data-reveal] in the CSS). */
export function useReveal(pathname) {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]:not(.in)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!('IntersectionObserver' in window) || reduce) {
      items.forEach((el) => el.classList.add('in'))
      return undefined
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
