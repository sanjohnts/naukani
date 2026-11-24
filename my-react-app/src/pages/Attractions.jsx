import { Link } from 'react-router'
import Icon from '../components/Icon'
import fernsForestFloorImg from '../assets/img/ferns-forest-floor.webp'
import forestStreamImg from '../assets/img/forest-stream.webp'
import rainforestCanopyImg from '../assets/img/rainforest-canopy.webp'
import safariJeepSunlitImg from '../assets/img/safari-jeep-sunlit.webp'
import spottedDeerImg from '../assets/img/spotted-deer.webp'

export default function Attractions() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={rainforestCanopyImg} alt="" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Attractions</span>
          </nav>
          <span className="pill"><Icon name="grid" /> Six planned components</span>
          <h1>Planned <em>Attractions</em></h1>
          <p className="lead">An integrated wildlife experience: safari, zoo, botanical garden, natural history museum, biodiversity park and rainwater conservation.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="callout callout-green" data-reveal>
            <Icon name="info" />
            <p><strong>Project concepts.</strong> These attractions are reported in public sources as planned components of the project. They are not completed facilities.</p>
          </div>
          <div className="features mt-lg">
            <article className="feature" id="safari" data-reveal>
              <div className="feature-media">
                <img src={safariJeepSunlitImg} alt="Safari jeep driving through a sunlit forest" loading="lazy" decoding="async" style={{ objectPosition: "center 60%" }} />
                <span className="img-note">Representative image</span>
              </div>
              <div>
                <div className="feature-top">
                  <span className="feature-num">01</span>
                  <span className="badge badge-green">Planned</span>
                </div>
                <h2>Wildlife Safari</h2>
                <div className="prose">
                  <p>A safari experience where visitors would travel through naturalistic animal habitats in specially protected vehicles.</p>
                </div>
                <ul className="ticks">
                  <li><Icon name="check" /> Naturalistic habitat zones</li>
                  <li><Icon name="check" /> Specially protected vehicles</li>
                  <li><Icon name="check" /> Route and tickets to be announced</li>
                </ul>
              </div>
            </article>
            <article className="feature" id="zoo" data-reveal>
              <div className="feature-media">
                <img src={spottedDeerImg} alt="Spotted deer in a forest clearing" loading="lazy" decoding="async" style={{ objectPosition: "50% 65%" }} />
                <span className="img-note">Representative image</span>
              </div>
              <div>
                <div className="feature-top">
                  <span className="feature-num">02</span>
                  <span className="badge badge-green">Planned</span>
                </div>
                <h2>Zoological Park</h2>
                <div className="prose">
                  <p>A planned space for visitors to observe different animals in naturalistic environments.</p>
                </div>
                <ul className="ticks">
                  <li><Icon name="check" /> Animals in naturalistic environments</li>
                  <li><Icon name="check" /> Sourcing from Thiruvananthapuram and Thrissur zoos and inter-zoo exchanges was mentioned in a 2025 report</li>
                  <li><Icon name="check" /> Official species list awaited</li>
                </ul>
              </div>
            </article>
            <article className="feature" id="botanical" data-reveal>
              <div className="feature-media">
                <img src={rainforestCanopyImg} alt="Palms and trees in a lush rainforest canopy" loading="lazy" decoding="async" style={{ objectPosition: "center" }} />
                <span className="img-note">Representative image</span>
              </div>
              <div>
                <div className="feature-top">
                  <span className="feature-num">03</span>
                  <span className="badge badge-green">Planned</span>
                </div>
                <h2>Botanical Garden</h2>
                <div className="prose">
                  <p>A planned botanical area showcasing plant diversity and greenery.</p>
                </div>
                <ul className="ticks">
                  <li><Icon name="check" /> Plant diversity and greenery</li>
                  <li><Icon name="check" /> Appreciation of native plant life</li>
                  <li><Icon name="check" /> Green spaces for learning and relaxing</li>
                </ul>
              </div>
            </article>
            <article className="feature" id="museum" data-reveal>
              <div className="feature-media art-panel">
                <Icon name="museum" />
                <span>Concept</span>
              </div>
              <div>
                <div className="feature-top">
                  <span className="feature-num">04</span>
                  <span className="badge badge-green">Planned</span>
                </div>
                <h2>Natural History Museum</h2>
                <div className="prose">
                  <p>An educational space to explore wildlife, biodiversity and natural history.</p>
                </div>
                <ul className="ticks">
                  <li><Icon name="check" /> Wildlife and biodiversity</li>
                  <li><Icon name="check" /> Natural history of the region</li>
                  <li><Icon name="check" /> Learning for students and families</li>
                </ul>
              </div>
            </article>
            <article className="feature" id="biodiversity" data-reveal>
              <div className="feature-media">
                <img src={fernsForestFloorImg} alt="Ferns and mossy rocks on a forest path" loading="lazy" decoding="async" style={{ objectPosition: "center" }} />
                <span className="img-note">Representative image</span>
              </div>
              <div>
                <div className="feature-top">
                  <span className="feature-num">05</span>
                  <span className="badge badge-green">Planned</span>
                </div>
                <h2>Biodiversity Park</h2>
                <div className="prose">
                  <p>A proposed green space focused on biodiversity and environmental awareness.</p>
                </div>
                <ul className="ticks">
                  <li><Icon name="check" /> Biodiversity and habitats</li>
                  <li><Icon name="check" /> Environmental awareness</li>
                  <li><Icon name="check" /> Native Western Ghats focus</li>
                </ul>
              </div>
            </article>
            <article className="feature" id="rainwater" data-reveal>
              <div className="feature-media">
                <img src={forestStreamImg} alt="A clear stream flowing over mossy rocks in a forest" loading="lazy" decoding="async" style={{ objectPosition: "center" }} />
                <span className="img-note">Representative image</span>
              </div>
              <div>
                <div className="feature-top">
                  <span className="feature-num">06</span>
                  <span className="badge badge-green">Planned</span>
                </div>
                <h2>Rainwater Conservation</h2>
                <div className="prose">
                  <p>Rainwater harvesting and water-management facilities have been included in earlier project descriptions.</p>
                </div>
                <ul className="ticks">
                  <li><Icon name="check" /> Rainwater harvesting</li>
                  <li><Icon name="check" /> Water management</li>
                  <li><Icon name="check" /> Part of the project's environmental approach</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="values" aria-label="Project values">
        <div className="wrap values-in">
          <div className="value">
            <Icon name="globe" />
            <div>
              <strong>Wildlife Awareness</strong>
              <span>For every visitor</span>
            </div>
          </div>
          <div className="value">
            <Icon name="education" />
            <div>
              <strong>Nature Education</strong>
              <span>Students & families</span>
            </div>
          </div>
          <div className="value">
            <Icon name="leaf" />
            <div>
              <strong>Responsible Tourism</strong>
              <span>Rooted in the landscape</span>
            </div>
          </div>
          <div className="value">
            <Icon name="paw" />
            <div>
              <strong>Native Biodiversity</strong>
              <span>Western Ghats richness</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
