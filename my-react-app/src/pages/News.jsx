import { Link } from 'react-router'
import Icon from '../components/Icon'
import forestCanopyLightImg from '../assets/img/forest-canopy-light.webp'

export default function News() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={forestCanopyLightImg} alt="" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>News & Updates</span>
          </nav>
          <span className="pill"><Icon name="calendar" /> Government announcements & progress</span>
          <h1>News & <em>Updates</em></h1>
          <p className="lead">Construction progress, government announcements and opening news for Nadukani Zoo & Safari Park.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split split-wide">
          <div>
            <div className="section-head" data-reveal>
              <div>
                <span className="kicker"><Icon name="calendar" /> Timeline</span>
                <h2 className="h2">Latest <em>first</em></h2>
              </div>
            </div>
            <ol className="timeline">
              <li className="tl-item latest card card-pad" id="mar-2026" data-reveal>
                <p className="tl-date">8 March 2026 <span className="tag">Latest</span></p>
                <h3>Camp office inaugurated</h3>
                <p>A camp office for the proposed zoo-safari project was inaugurated.</p>
              </li>
              <li className="tl-item card card-pad" id="feb-2026" data-reveal>
                <p className="tl-date">February – March 2026</p>
                <h3>Technical survey tender activity</h3>
                <p>Tender activity related to a technical survey for the proposed park was reported.</p>
              </li>
              <li className="tl-item card card-pad" id="oct-2025" data-reveal>
                <p className="tl-date">October 2025</p>
                <h3>Expert committee formed to prepare the DPR</h3>
                <p>A five-member expert committee was formed to prepare the Detailed Project Report (DPR). The reported project area was 252.8 acres.</p>
              </li>
              <li className="tl-item card card-pad" id="animals-2025" data-reveal>
                <p className="tl-date">2025</p>
                <h3>Animal sourcing plans reported</h3>
                <p>A 2025 report mentioned plans to source animals from the Thiruvananthapuram and Thrissur zoos and through exchanges with other zoos in India. An official animal collection list has not yet been released.</p>
              </li>
              <li className="tl-item card card-pad" id="jul-2024" data-reveal>
                <p className="tl-date">July 2024</p>
                <h3>Approval and land transfer</h3>
                <p>Government-level approval and land-transfer procedures were reported. Approximately 250–257 acres were identified or transferred from Plantation Corporation land.</p>
              </li>
              <li className="tl-item card card-pad" id="feb-2024" data-reveal>
                <p className="tl-date">February 2024</p>
                <h3>Announced in the Kerala Budget</h3>
                <p>The Kerala Budget proposed a full-fledged safari park at Nadukani, with a museum, zoo and biodiversity park.</p>
              </li>
            </ol>
          </div>
          <aside className="stack">
            <div className="card card-dark card-pad" data-reveal>
              <h2 className="card-title"><Icon name="eye" /> What to watch for next</h2>
              <ul className="bullets mt-sm">
                <li>Detailed Project Report (DPR) details</li>
                <li>Official animal collection list</li>
                <li>Construction progress</li>
                <li>Opening date, timings and tickets</li>
                <li>Official contact channels</li>
              </ul>
            </div>
            <div className="card card-pad" data-reveal>
              <h2 className="card-title"><Icon name="book" /> Sources</h2>
              <ul className="sources mt-sm">
                <li><strong>Kerala Budget 2024–25</strong>Government budget information</li>
                <li><strong>Government of Kerala</strong>Ministerial office publications</li>
                <li><strong>Onmanorama & Malayala Manorama</strong>Project reporting, 2024–2026</li>
                <li><strong>The Times of India</strong>Kerala news coverage</li>
              </ul>
              <p className="fine">Last reviewed: November 2026.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
