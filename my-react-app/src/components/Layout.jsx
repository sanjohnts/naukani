import { Outlet, useLocation } from 'react-router'
import { usePageMeta, useReveal, useScrollOnNavigate } from '../hooks/useSiteEffects'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const { pathname, hash } = useLocation()
  usePageMeta(pathname)
  useScrollOnNavigate(pathname, hash)
  useReveal(pathname)

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
