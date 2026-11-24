import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import Icon from '../components/Icon'
import mistyValleyImg from '../assets/img/misty-valley.webp'

export default function NotFound() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  // Links to the old static site (about.html, wildlife.html#birds …) forward to the new addresses.
  useEffect(() => {
    if (pathname.endsWith('.html')) {
      const to = pathname.replace(/(index)?\.html$/, '').replace(/\/$/, '') || '/'
      navigate(to + hash, { replace: true })
    }
  }, [pathname, hash, navigate])

  return (
    <section className="page-hero">
      <img className="page-hero-bg" src={mistyValleyImg} alt="" />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Page not found</span>
        </nav>
        <span className="pill"><Icon name="info" /> Error 404</span>
        <h1>Page not found</h1>
        <p className="lead">This page does not exist or may have moved. Use the menu above, or start again from the home page.</p>
        <div className="btn-row mt">
          <Link className="btn" to="/">Back to home <Icon name="arrow" /></Link>
        </div>
      </div>
    </section>
  )
}
