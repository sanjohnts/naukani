import { Link } from 'react-router'
import Icon from '../components/Icon'
import forestCanopyLightImg from '../assets/img/forest-canopy-light.webp'
import mistyValleyImg from '../assets/img/misty-valley.webp'
import rainforestCanopyImg from '../assets/img/rainforest-canopy.webp'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={mistyValleyImg} alt="" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>About</span>
          </nav>
          <span className="pill"><Icon name="leaf" /> Project background, vision & history</span>
          <h1>About the <em>Project</em></h1>
          <p className="lead">Nadukani Zoo & Safari Park is a proposed Kerala Government wildlife tourism project, planned to become a major wildlife destination in North Kerala.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split split-wide">
          <div data-reveal>
            <span className="kicker"><Icon name="book" /> Project background</span>
            <h2 className="h2">An ambitious project for <em>North Kerala</em></h2>
            <div className="prose mt">
              <p>Nadukani Zoo & Safari Park is an ambitious proposed tourism project planned in the beautiful surroundings of Nadukani, Taliparamba. The project aims to create an integrated wildlife experience with a zoo, safari, botanical garden, natural history museum and biodiversity park.</p>
              <p>The park was announced as a major tourism development project in the <strong>2024 Kerala Budget</strong>, which proposed a full-fledged safari park at Nadukani with a museum, zoo and biodiversity park. The project site is associated with Plantation Corporation land in the Nadukani division, along the Taliparamba–Alakode State Highway corridor.</p>
              <p>The vision is to promote wildlife awareness, nature education and responsible tourism while developing the region as a major tourism destination.</p>
            </div>
          </div>
          <aside className="card card-pad" data-reveal>
            <h2 className="card-title"><Icon name="info" /> Basic information</h2>
            <table className="info-table mt-sm">
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>Nadukani Zoo & Safari Park</td>
                </tr>
                <tr>
                  <th scope="row">Location</th>
                  <td>Nadukani, Taliparamba</td>
                </tr>
                <tr>
                  <th scope="row">District / State</th>
                  <td>Kannur, Kerala, India</td>
                </tr>
                <tr>
                  <th scope="row">PIN</th>
                  <td>670142<small>Mapped project area</small></td>
                </tr>
                <tr>
                  <th scope="row">Project type</th>
                  <td>Zoo, wildlife safari and biodiversity park</td>
                </tr>
                <tr>
                  <th scope="row">Land area</th>
                  <td>Approx. 252.8 acres<small>Later project reporting</small></td>
                </tr>
                <tr>
                  <th scope="row">Proposed investment</th>
                  <td>Approx. ₹300 crore<small>Initial proposal estimate</small></td>
                </tr>
                <tr>
                  <th scope="row">Project authority</th>
                  <td>Government of Kerala<small>Involving Museums & Zoos authorities</small></td>
                </tr>
                <tr>
                  <th scope="row">Current status</th>
                  <td>
                    <span className="badge">Proposed · planning</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </aside>
        </div>
      </section>
      <section className="section section-flush-top" id="vision">
        <div className="wrap">
          <div className="card card-dark vm-card" data-reveal>
            <div className="vm-media">
              <img src={rainforestCanopyImg} alt="Sunlight through a dense rainforest canopy" loading="lazy" decoding="async" />
            </div>
            <div className="vm-copy">
              <span className="kicker kicker-light"><Icon name="eye" /> Vision</span>
              <p className="vm-vision">To create a nature-oriented destination that connects people with wildlife and encourages the protection of biodiversity.</p>
              <span className="kicker kicker-light mt"><Icon name="flag" /> Mission</span>
              <ul className="checks mt-sm">
                <li><Icon name="paw" /> Encourage wildlife awareness</li>
                <li><Icon name="education" /> Promote environmental education</li>
                <li><Icon name="leaf" /> Support responsible tourism</li>
                <li><Icon name="mountain" /> Showcase the natural richness of the region</li>
                <li><Icon name="people" /> Create an educational experience for future generations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="kicker"><Icon name="calendar" /> History</span>
              <h2 className="h2">Project <em>milestones</em></h2>
              <p>Key steps reported between 2024 and 2026.</p>
            </div>
            <Link className="link" to="/news">All news & updates <Icon name="arrow" /></Link>
          </div>
          <ol className="timeline">
            <li className="tl-item card card-pad" data-reveal>
              <p className="tl-date">February 2024</p>
              <h3>Announced in the Kerala Budget</h3>
              <p>The Kerala Budget proposed a full-fledged safari park at Nadukani, with a museum, zoo and biodiversity park.</p>
            </li>
            <li className="tl-item card card-pad" data-reveal>
              <p className="tl-date">July 2024</p>
              <h3>Approval and land transfer</h3>
              <p>Government-level approval and land-transfer procedures were reported. Approximately 250–257 acres were identified or transferred from Plantation Corporation land.</p>
            </li>
            <li className="tl-item card card-pad" data-reveal>
              <p className="tl-date">October 2025</p>
              <h3>Expert committee for the DPR</h3>
              <p>A five-member expert committee was formed to prepare the Detailed Project Report (DPR). The reported project area was 252.8 acres.</p>
            </li>
            <li className="tl-item card card-pad" data-reveal>
              <p className="tl-date">February – March 2026</p>
              <h3>Technical survey tender</h3>
              <p>Tender activity related to a technical survey for the proposed park was reported.</p>
            </li>
            <li className="tl-item latest card card-pad" data-reveal>
              <p className="tl-date">8 March 2026 <span className="tag">Latest</span></p>
              <h3>Camp office inaugurated</h3>
              <p>A camp office for the proposed zoo-safari project was inaugurated.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="banner">
        <img src={forestCanopyLightImg} alt="" loading="lazy" decoding="async" style={{ objectPosition: "center" }} />
        <div className="wrap banner-in" data-reveal>
          <p className="banner-kicker">What's planned</p>
          <h2>Six ideas, one<br />natural landscape</h2>
          <p>Safari, zoo, botanical garden, natural history museum, biodiversity park and rainwater conservation.</p>
          <Link className="btn" to="/attractions">Explore planned attractions <Icon name="arrow" /></Link>
        </div>
      </section>
    </>
  )
}
