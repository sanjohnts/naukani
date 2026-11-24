import { Link } from 'react-router'
import Brand from './Brand'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>A proposed wildlife, safari and biodiversity destination at Nadukani, Taliparamba, in Kannur district, Kerala.</p>
          <span className="pill"><span className="dot" /> Status: proposed · planning & development</span>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About the project</Link></li>
            <li><Link to="/wildlife">Wildlife</Link></li>
            <li><Link to="/safari">Safari experience</Link></li>
            <li><Link to="/attractions">Attractions</Link></li>
            <li><Link to="/conservation">Nature & conservation</Link></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li><Link to="/visitor-info">Visitor information</Link></li>
            <li><Link to="/visitor-info#location">Location & map</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/news">News & updates</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Location</h4>
          <ul className="footer-contact">
            <li><Icon name="pin" /><span>Nadukani, Taliparamba,<br />Kannur district, Kerala, India</span></li>
            <li><Icon name="route" /><span>Taliparamba–Alakode State Highway corridor</span></li>
            <li><Icon name="info" /><span>Official contact details awaited</span></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-note">
        <p>Nadukani Zoo & Safari Park is a proposed project. Information on this website is based on public reports (Kerala Budget 2024 and news coverage, 2024–2026) and may change as the project progresses. This is not the official website of the Government of Kerala or the Department of Museums & Zoos. Photographs are representative and do not show the project site.</p>
        <div className="footer-bottom">
          <span>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> nadukanisafaripark.com</span>
          <span>Last reviewed: November 2026</span>
        </div>
      </div>
    </footer>
  )
}
