import { Link } from 'react-router'
import Icon from '../components/Icon'
import fernsForestFloorImg from '../assets/img/ferns-forest-floor.webp'

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={fernsForestFloorImg} alt="" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Contact</span>
          </nav>
          <span className="pill"><Icon name="mail" /> Address, phone & enquiries</span>
          <h1>Contact & <em>Enquiries</em></h1>
          <p className="lead">Official contact details for the project will be listed here once they are announced and verified.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="contact-cards">
            <div className="card contact-card" data-reveal>
              <Icon name="pin" />
              <h3>Project location</h3>
              <p>Nadukani, Taliparamba,<br />Kannur district, Kerala, India</p>
              <span className="badge badge-green">Approximate area</span>
            </div>
            <div className="card contact-card" data-reveal>
              <Icon name="phone" />
              <h3>Official phone</h3>
              <p>The official contact number has not been verified yet.</p>
              <span className="badge badge-grey">Not verified</span>
            </div>
            <div className="card contact-card" data-reveal>
              <Icon name="mail" />
              <h3>Official email</h3>
              <p>An official email address will be listed once it is announced.</p>
              <span className="badge">Awaiting announcement</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-flush-top">
        <div className="wrap split">
          <div className="card card-pad" data-reveal>
            <h2 className="card-title"><Icon name="mail" /> Enquiry form</h2>
            <div className="callout mt-sm">
              <Icon name="info" />
              <p>Enquiries will open once official contact channels are announced. Until then, please follow <Link to="/news">News & Updates</Link>.</p>
            </div>
            {/* To activate this form: remove the "disabled" attributes and set the form action to the official email handler or form service. */}
            <form className="form mt" aria-describedby="form-status" onSubmit={(e) => e.preventDefault()}>
              <fieldset disabled>
                <div className="form">
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="f-name">Full name</label>
                      <input id="f-name" name="name" type="text" autoComplete="name" />
                    </div>
                    <div className="field">
                      <label htmlFor="f-email">Email</label>
                      <input id="f-email" name="email" type="email" autoComplete="email" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="f-phone">Phone</label>
                      <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
                    </div>
                    <div className="field">
                      <label htmlFor="f-topic">Topic</label>
                      <select id="f-topic" name="topic">
                        <option>General enquiry</option>
                        <option>Visiting the park</option>
                        <option>Education & school visits</option>
                        <option>Media</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="f-msg">Message</label>
                    <textarea id="f-msg" name="message" />
                  </div>
                  <div>
                    <button className="btn" type="submit" disabled>Send enquiry <Icon name="arrow" /></button>
                  </div>
                </div>
              </fieldset>
              <p className="fine" id="form-status">This form is not active yet.</p>
            </form>
          </div>
          <div className="stack" data-reveal>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sNadukani,+Taliparamba,+Kannur,+Kerala!6i13" title="Map of Nadukani, Taliparamba, Kannur" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <div className="card card-pad">
              <h2 className="card-title"><Icon name="flag" /> Camp office</h2>
              <p className="prose mt-sm">A camp office for the proposed project was inaugurated on 8 March 2026. Its public contact details have not been published.</p>
              <a className="btn btn-light mt" href="https://www.google.com/maps/search/?api=1&query=Nadukani%2C%20Taliparamba%2C%20Kannur%2C%20Kerala" target="_blank" rel="noopener">Open in Google Maps <Icon name="external" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
