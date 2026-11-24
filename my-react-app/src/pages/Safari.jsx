import { Link } from 'react-router'
import Icon from '../components/Icon'
import jeepForestTrackImg from '../assets/img/jeep-forest-track.webp'
import mistyValleyImg from '../assets/img/misty-valley.webp'
import safariJeepSunlitImg from '../assets/img/safari-jeep-sunlit.webp'

export default function Safari() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={safariJeepSunlitImg} alt="" style={{ objectPosition: "center 60%" }} />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Safari</span>
          </nav>
          <span className="pill"><Icon name="jeep" /> Proposed safari concept</span>
          <h1>The Safari <em>Experience</em></h1>
          <p className="lead">A safari experience in which visitors would travel through naturalistic animal habitats in specially protected vehicles.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split split-center">
          <div className="photo photo-wide" data-reveal>
            <img src={jeepForestTrackImg} alt="A safari jeep on a forest track (representative image)" loading="lazy" decoding="async" />
            <span className="img-note">Representative image</span>
          </div>
          <div data-reveal>
            <span className="kicker"><Icon name="route" /> The concept</span>
            <h2 className="h2">Travel through <em>the wild</em></h2>
            <div className="prose mt">
              <p>In a safari park, animals live in large, open, naturalistic enclosures, and visitors move through those habitats in vehicles built for safety. It turns the conventional zoo around: instead of walking past enclosures, visitors enter the animals' landscape.</p>
              <p>Nadukani's safari is planned around this idea. Details of the vehicles, route, duration and charges will be shared once they are officially announced.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-flush-top">
        <div className="wrap split">
          <div className="card card-pad" data-reveal>
            <h2 className="card-title"><Icon name="jeep" /> Safari at a glance</h2>
            <table className="info-table mt-sm">
              <tbody>
                <tr>
                  <th scope="row">Safari concept</th>
                  <td>
                    <span className="badge badge-green">Proposed</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Vehicles</th>
                  <td>Specially protected vehicles<small>Concept, details awaited</small></td>
                </tr>
                <tr>
                  <th scope="row">Safari route</th>
                  <td>
                    <span className="badge">To be announced</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Duration</th>
                  <td>
                    <span className="badge">Not announced</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Safari ticket</th>
                  <td>
                    <span className="badge">Not announced</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Vehicle charges</th>
                  <td>
                    <span className="badge">Not announced</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Online booking</th>
                  <td>
                    <span className="badge badge-grey">Not confirmed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card card-dark card-pad safety-card" data-reveal>
            <h2 className="card-title"><Icon name="shield" /> Safety on safari</h2>
            <ul className="bullets mt-sm">
              <li>Stay seated inside the vehicle at all times</li>
              <li>Keep windows and doors as instructed by staff</li>
              <li>Never feed, call out to or tease animals</li>
              <li>Keep noise low and follow your guide</li>
              <li>Follow all official park rules once they are published</li>
            </ul>
            <p className="fine">General safari-park practice. These are not official Nadukani rules.</p>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="kicker"><Icon name="route" /> How it works</span>
              <h2 className="h2">A typical <em>safari park</em> visit</h2>
              <p>An illustration of how safari parks generally work. Nadukani's visitor flow will be confirmed in official plans.</p>
            </div>
          </div>
          <div className="steps">
            <div className="card step" data-reveal>
              <span className="step-n">01</span>
              <h3>Arrive & orient</h3>
              <p>Visitors usually begin at a reception area with information on habitats and safety.</p>
            </div>
            <div className="card step" data-reveal>
              <span className="step-n">02</span>
              <h3>Board a protected vehicle</h3>
              <p>Guided vehicles carry visitors safely into the habitat zones.</p>
            </div>
            <div className="card step" data-reveal>
              <span className="step-n">03</span>
              <h3>Travel through habitats</h3>
              <p>Animals are observed in large, naturalistic spaces rather than small enclosures.</p>
            </div>
            <div className="card step" data-reveal>
              <span className="step-n">04</span>
              <h3>Explore on foot</h3>
              <p>Many parks pair the safari with walk-through areas such as museums and gardens.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <img src={mistyValleyImg} alt="" loading="lazy" decoding="async" style={{ objectPosition: "center" }} />
        <div className="wrap banner-in" data-reveal>
          <p className="banner-kicker">Stay informed</p>
          <h2>Follow the project's<br />progress</h2>
          <p>Safari, construction and opening news will be posted here as it is officially announced.</p>
          <Link className="btn" to="/news">News & updates <Icon name="arrow" /></Link>
        </div>
      </section>
    </>
  )
}
