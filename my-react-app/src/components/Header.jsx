import { useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { NavLink } from 'react-router'
import Brand from './Brand'
import Icon from './Icon'

const NAV = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/wildlife', 'Wildlife'],
  ['/safari', 'Safari'],
  ['/attractions', 'Attractions'],
  ['/conservation', 'Conservation'],
  ['/gallery', 'Gallery'],
  ['/visitor-info', 'Visitor Info'],
  ['/news', 'News'],
]

// Above this width the menu is always visible, so an open mobile menu is closed.
const DESKTOP = '(min-width: 1181px)'

function subscribeScroll(onChange) {
  window.addEventListener('scroll', onChange, { passive: true })
  return () => window.removeEventListener('scroll', onChange)
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 24,
    () => false,
  )

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('nav-open', open)
    if (!open) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const mq = window.matchMedia(DESKTOP)
    const onMq = (e) => e.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
      document.documentElement.classList.remove('nav-open')
    }
  }, [open])

  const closeOnLink = (e) => {
    if (e.target.closest('a')) setOpen(false)
  }

  return (
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
      <div className="wrap header-in">
        <Brand />
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-controls="site-nav"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name="menu" className="ic ic-menu" />
          <Icon name="close" className="ic ic-close" />
        </button>
        <nav className="nav" id="site-nav" aria-label="Main" onClick={closeOnLink}>
          <ul>
            {NAV.map(([to, label]) => (
              <li key={to}>
                <NavLink className="nav-link" to={to} end>{label}</NavLink>
              </li>
            ))}
          </ul>
          <NavLink className="btn btn-sm" to="/contact">Contact <Icon name="arrow" /></NavLink>
        </nav>
        <div className="nav-scrim" onClick={() => setOpen(false)} />
      </div>
    </header>
  )
}
