import { Link } from 'react-router'
import Icon from '../components/Icon'
import elephantsCrossingImg from '../assets/img/elephants-crossing.webp'
import jeepForestTrackImg from '../assets/img/jeep-forest-track.webp'

export default function VisitorInfo() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={jeepForestTrackImg} alt="" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Visitor Info</span>
          </nav>
          <span className="pill"><Icon name="ticket" /> Timings, tickets & location</span>
          <h1>Visitor <em>Information</em></h1>
          <p className="lead">Location, timings, tickets, rules and facilities, updated as each detail is officially confirmed.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="callout" data-reveal>
            <Icon name="info" />
            <p><strong>Visitor facilities and ticket information will be announced after the official opening of the park.</strong> To avoid confusion, this website does not publish unconfirmed prices, timings or booking links.</p>
          </div>
          <div className="section-head mt-lg" data-reveal>
            <div>
              <span className="kicker"><Icon name="info" /> At a glance</span>
              <h2 className="h2">Visitor information <em>status</em></h2>
              <p>Last reviewed November 2026. Each item will be updated when it is officially announced.</p>
            </div>
          </div>
          <div className="card card-pad" data-reveal>
            <ul className="status-list">
              <li>
                <Icon name="calendar" />
                <span className="label">Opening date</span>
                <span className="badge badge-grey">Not confirmed</span>
              </li>
              <li>
                <Icon name="clock" />
                <span className="label">Opening time</span>
                <span className="badge ">Not announced</span>
              </li>
              <li>
                <Icon name="clock" />
                <span className="label">Closing time</span>
                <span className="badge ">Not announced</span>
              </li>
              <li>
                <Icon name="ticket" />
                <span className="label">Entry ticket</span>
                <span className="badge ">Not announced</span>
              </li>
              <li>
                <Icon name="ticket" />
                <span className="label">Children's ticket</span>
                <span className="badge ">Not announced</span>
              </li>
              <li>
                <Icon name="jeep" />
                <span className="label">Safari ticket</span>
                <span className="badge ">Not announced</span>
              </li>
              <li>
                <Icon name="cursor" />
                <span className="label">Online booking</span>
                <span className="badge badge-grey">Not confirmed</span>
              </li>
              <li>
                <Icon name="jeep" />
                <span className="label">Safari vehicle charges</span>
                <span className="badge ">Not announced</span>
              </li>
              <li>
                <Icon name="parking" />
                <span className="label">Parking fee</span>
                <span className="badge ">Not announced</span>
              </li>
              <li>
                <Icon name="calendar" />
                <span className="label">Weekly holiday</span>
                <span className="badge ">Not announced</span>
              </li>
              <li>
                <Icon name="phone" />
                <span className="label">Official contact number</span>
                <span className="badge badge-grey">Not verified</span>
              </li>
              <li>
                <Icon name="bed" />
                <span className="label">Accommodation</span>
                <span className="badge badge-grey">Not confirmed</span>
              </li>
              <li>
                <Icon name="food" />
                <span className="label">Restaurant / food court</span>
                <span className="badge badge-grey">Not confirmed</span>
              </li>
              <li>
                <Icon name="people" />
                <span className="label">Guided tour</span>
                <span className="badge badge-grey">Not confirmed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section section-flush-top" id="location">
        <div className="wrap split split-center">
          <div data-reveal>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sNadukani,+Taliparamba,+Kannur,+Kerala!6i13" title="Map of Nadukani, Taliparamba, Kannur" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </div>
          <div data-reveal>
            <span className="kicker"><Icon name="pin" /> Location</span>
            <h2 className="h2">Nadukani, <em>Taliparamba</em></h2>
            <table className="info-table mt-sm">
              <tbody>
                <tr>
                  <th scope="row">Place</th>
                  <td>Nadukani</td>
                </tr>
                <tr>
                  <th scope="row">Nearby town</th>
                  <td>Taliparamba</td>
                </tr>
                <tr>
                  <th scope="row">District</th>
                  <td>Kannur</td>
                </tr>
                <tr>
                  <th scope="row">State</th>
                  <td>Kerala, India</td>
                </tr>
                <tr>
                  <th scope="row">Road corridor</th>
                  <td>Taliparamba–Alakode State Highway</td>
                </tr>
                <tr>
                  <th scope="row">Project land</th>
                  <td>Plantation Corporation land, Nadukani division</td>
                </tr>
              </tbody>
            </table>
            <p className="fine">The mapped location is approximate to the proposed project area. The official entrance location will be confirmed before directions are published.</p>
            <a className="btn mt" href="https://www.google.com/maps/search/?api=1&query=Nadukani%2C%20Taliparamba%2C%20Kannur%2C%20Kerala" target="_blank" rel="noopener">Open in Google Maps <Icon name="external" /></a>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="kicker"><Icon name="route" /> Getting here</span>
              <h2 className="h2">Reaching <em>Taliparamba</em></h2>
              <p>General travel information. Distances and directions will be added once the official entrance is confirmed.</p>
            </div>
          </div>
          <div className="tiles tiles-lg">
            <div className="tile" data-reveal>
              <Icon name="plane" />
              <strong>By air</strong>
              <span>Kannur International Airport at Mattannur is the nearest airport.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="train" />
              <strong>By rail</strong>
              <span>Kannur and Payyanur are the nearest major railway stations to Taliparamba.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="bus" />
              <strong>By road</strong>
              <span>Taliparamba lies on National Highway 66. Nadukani is along the Taliparamba–Alakode State Highway.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <img src={elephantsCrossingImg} alt="" loading="lazy" decoding="async" style={{ objectPosition: "60% 40%" }} />
        <div className="wrap banner-in" data-reveal>
          <p className="banner-kicker">Be the first to know</p>
          <h2>Opening details<br />will be posted here</h2>
          <p>Timings, tickets and booking information will be published as soon as they are officially announced.</p>
          <Link className="btn" to="/news">News & updates <Icon name="arrow" /></Link>
        </div>
      </section>
    </>
  )
}
