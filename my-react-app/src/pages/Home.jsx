import { Link } from 'react-router'
import ExploreForm from '../components/ExploreForm'
import Icon from '../components/Icon'
import deerSunriseForestImg from '../assets/img/deer-sunrise-forest.webp'
import elephantHerdImg from '../assets/img/elephant-herd.webp'
import elephantsCrossingImg from '../assets/img/elephants-crossing.webp'
import fernsForestFloorImg from '../assets/img/ferns-forest-floor.webp'
import forestCanopyLightImg from '../assets/img/forest-canopy-light.webp'
import forestStreamImg from '../assets/img/forest-stream.webp'
import jeepForestTrackImg from '../assets/img/jeep-forest-track.webp'
import mistyForestImg from '../assets/img/misty-forest.png'
import mistyValleyImg from '../assets/img/misty-valley.webp'
import rainforestCanopyImg from '../assets/img/rainforest-canopy.webp'
import safariJeepSunlitImg from '../assets/img/safari-jeep-sunlit.webp'
import spottedDeerImg from '../assets/img/spotted-deer.webp'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <img src={forestCanopyLightImg} alt="" />
        </div>
        <div className="wrap hero-in">
          <div className="hero-copy">
            <span className="pill"><Icon name="leaf" /> Discover the future of wildlife tourism</span>
            <h1>Experience the Wild. <span>Discover Nature.</span></h1>
            <p className="lead">Welcome to Nadukani Zoo & Safari Park, a proposed wildlife and biodiversity destination in Taliparamba, Kannur, Kerala, where wildlife, nature, education and conservation come together in a natural environment.</p>
            <ExploreForm />
            <ul className="hero-stats">
              <li>
                <Icon name="map" />
                <strong>252.8</strong>
                <span>Acres project area</span>
              </li>
              <li>
                <Icon name="rupee" />
                <strong>₹300 Cr</strong>
                <span>Initial estimate</span>
              </li>
              <li>
                <Icon name="grid" />
                <strong>6</strong>
                <span>Planned components</span>
              </li>
              <li>
                <Icon name="flag" />
                <strong>2024</strong>
                <span>Kerala Budget announcement</span>
              </li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="hero-orb">
              <img src={deerSunriseForestImg} alt="Spotted deer grazing in a misty, sunlit forest (representative image)" fetchPriority="high" />
            </div>
            <aside className="status-card" aria-label="Project status">
              <img src={jeepForestTrackImg} alt="" />
              <div>
                <p className="status-kicker"><span className="dot" /> Project status</p>
                <h3>Planning & development</h3>
                <p className="status-meta">Latest: camp office inaugurated, 8 March 2026</p>
                <p className="status-foot">Opening date: <b>Not announced</b></p>
                <Link className="btn btn-sm" to="/news">View timeline <Icon name="arrow" /></Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="section" id="about">
        <div className="wrap">
          <div className="callout" data-reveal>
            <Icon name="info" />
            <div className="callout-row">
              <p><strong>Proposed project.</strong> Nadukani Zoo & Safari Park is in the planning and development stage. Tickets, timings and bookings are not yet available.</p>
              <Link className="link" to="/visitor-info">Visitor information <Icon name="arrow" /></Link>
            </div>
          </div>
          <div className="split split-center mt-lg">
            <div data-reveal>
              <span className="kicker"><Icon name="leaf" /> About the project</span>
              <h2 className="h2">A wildlife destination <em>rooted in nature</em></h2>
              <div className="prose mt">
                <p>Nadukani Zoo & Safari Park is an ambitious proposed tourism project planned in the beautiful surroundings of Nadukani, Taliparamba. The project aims to create an integrated wildlife experience with a zoo, safari, botanical garden, natural history museum and biodiversity park.</p>
                <p>The vision is to promote wildlife awareness, nature education and responsible tourism while developing the region as a major tourism destination in North Kerala.</p>
              </div>
              <div className="btn-row mt">
                <Link className="btn" to="/about">Read the full story <Icon name="arrow" /></Link>
                {" "}
                <Link className="link" to="/news">Project timeline <Icon name="arrow" /></Link>
              </div>
            </div>
            <div className="facts" data-reveal>
              <div className="fact">
                <Icon name="pin" />
                <div>
                  <small>Location</small>
                  <strong>Nadukani, Taliparamba</strong>
                  <em>Kannur district, Kerala</em>
                </div>
              </div>
              <div className="fact">
                <Icon name="map" />
                <div>
                  <small>Land area</small>
                  <strong>~252.8 acres</strong>
                  <em>Later project reporting</em>
                </div>
              </div>
              <div className="fact">
                <Icon name="rupee" />
                <div>
                  <small>Proposed investment</small>
                  <strong>~₹300 crore</strong>
                  <em>Initial proposal estimate</em>
                </div>
              </div>
              <div className="fact">
                <Icon name="museum" />
                <div>
                  <small>Project authority</small>
                  <strong>Government of Kerala</strong>
                  <em>Involving Museums & Zoos authorities</em>
                </div>
              </div>
              <div className="fact">
                <Icon name="grid" />
                <div>
                  <small>Project type</small>
                  <strong>Zoo, safari & biodiversity park</strong>
                </div>
              </div>
              <div className="fact">
                <Icon name="flag" />
                <div>
                  <small>Current status</small>
                  <strong>Proposed</strong>
                  <em>Planning & development</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-flush-top">
        <div className="wrap bento">
          <article className="card card-pad" data-reveal>
            <header className="card-head">
              <h2><Icon name="paw" /> Explore Wildlife</h2>
              <Link className="link" to="/wildlife">View all <Icon name="arrow" /></Link>
            </header>
            <div className="species-grid">
              <Link className="species" to="/wildlife#mammals">
                <div className="species-media">
                  <img src={elephantHerdImg} alt="Elephant herd crossing a forest track (representative image)" loading="lazy" decoding="async" />
                </div>
                <div className="species-body">
                  <h3>Mammals</h3>
                  <p>Large & small mammals</p>
                  <div className="species-foot">
                    <span className="tag tag-amber">List awaited</span>
                    <span className="plus">
                      <Icon name="plus" />
                    </span>
                  </div>
                </div>
              </Link>
              {" "}
              <Link className="species" to="/wildlife#herbivores">
                <div className="species-media">
                  <img src={spottedDeerImg} alt="Spotted deer in a green forest clearing (representative image)" loading="lazy" decoding="async" style={{ objectPosition: "45% 60%" }} />
                </div>
                <div className="species-body">
                  <h3>Herbivores</h3>
                  <p>Grazers & browsers</p>
                  <div className="species-foot">
                    <span className="tag tag-amber">List awaited</span>
                    <span className="plus">
                      <Icon name="plus" />
                    </span>
                  </div>
                </div>
              </Link>
              {" "}
              <Link className="species" to="/wildlife#western-ghats">
                <div className="species-media">
                  <img src={fernsForestFloorImg} alt="Ferns and moss on a forest floor" loading="lazy" decoding="async" />
                </div>
                <div className="species-body">
                  <h3>Native Flora</h3>
                  <p>Western Ghats plants</p>
                  <div className="species-foot">
                    <span className="tag">Native focus</span>
                    <span className="plus">
                      <Icon name="plus" />
                    </span>
                  </div>
                </div>
              </Link>
              {" "}
              <Link className="species" to="/wildlife#birds">
                <div className="species-media">
                  <img src={rainforestCanopyImg} alt="Looking up into a rainforest canopy" loading="lazy" decoding="async" />
                </div>
                <div className="species-body">
                  <h3>Birds</h3>
                  <p>Forest & canopy life</p>
                  <div className="species-foot">
                    <span className="tag tag-amber">List awaited</span>
                    <span className="plus">
                      <Icon name="plus" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <p className="fine">Representative images. The official animal collection for Nadukani has not yet been announced.</p>
          </article>
          <article className="card card-dark mission-card" data-reveal>
            <div className="mission-media" aria-hidden="true">
              <img src={mistyForestImg} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="mission-copy">
              <h2>The Vision</h2>
              <p>To create a nature-oriented destination that connects people with wildlife and encourages the protection of biodiversity.</p>
              <ul className="checks">
                <li><Icon name="paw" /> Encourage wildlife awareness</li>
                <li><Icon name="education" /> Promote environmental education</li>
                <li><Icon name="leaf" /> Support responsible tourism</li>
                <li><Icon name="mountain" /> Showcase the region's natural richness</li>
              </ul>
              <Link className="btn" to="/about#vision">Learn more <Icon name="arrow" /></Link>
            </div>
          </article>
          <article className="card card-dark media-card" data-reveal>
            <img src={safariJeepSunlitImg} alt="" loading="lazy" decoding="async" style={{ objectPosition: "40% 60%" }} />
            <div className="media-copy">
              <h2>The Safari Experience</h2>
              <p className="sub">Naturalistic habitats, protected vehicles</p>
              <p>A planned safari in which visitors would travel through naturalistic animal habitats in specially protected vehicles.</p>
              <Link className="btn" to="/safari">Explore the concept <Icon name="arrow" /></Link>
            </div>
          </article>
          <article className="card card-pad" data-reveal>
            <header className="card-head">
              <h2><Icon name="grid" /> Planned Attractions</h2>
              <Link className="link" to="/attractions">View all <Icon name="arrow" /></Link>
            </header>
            <div className="tiles">
              <Link className="tile" to="/attractions#safari">
                <Icon name="jeep" />
                <strong>Wildlife Safari</strong>
                <span>Protected-vehicle tours</span>
              </Link>
              {" "}
              <Link className="tile" to="/attractions#zoo">
                <Icon name="paw" />
                <strong>Zoological Park</strong>
                <span>Naturalistic exhibits</span>
              </Link>
              {" "}
              <Link className="tile" to="/attractions#botanical">
                <Icon name="tree" />
                <strong>Botanical Garden</strong>
                <span>Plant diversity</span>
              </Link>
              {" "}
              <Link className="tile" to="/attractions#museum">
                <Icon name="museum" />
                <strong>History Museum</strong>
                <span>Natural history</span>
              </Link>
              {" "}
              <Link className="tile" to="/attractions#biodiversity">
                <Icon name="butterfly" />
                <strong>Biodiversity Park</strong>
                <span>Green awareness</span>
              </Link>
              {" "}
              <Link className="tile" to="/attractions#rainwater">
                <Icon name="drop" />
                <strong>Rainwater</strong>
                <span>Water conservation</span>
              </Link>
            </div>
          </article>
          <article className="card card-pad" data-reveal>
            <header className="card-head">
              <h2><Icon name="calendar" /> Recent Updates</h2>
              <Link className="link" to="/news">View all <Icon name="arrow" /></Link>
            </header>
            <div className="updates">
              <Link className="update" to="/news#mar-2026">
                <img src={forestStreamImg} alt="" loading="lazy" decoding="async" />
                <div>
                  <h3>Camp office inaugurated</h3>
                  <p>A camp office for the proposed zoo-safari project was inaugurated.</p>
                  <time dateTime="2026-03-08">8 Mar 2026</time>
                </div>
              </Link>
              {" "}
              <Link className="update" to="/news#feb-2026">
                <img src={jeepForestTrackImg} alt="" loading="lazy" decoding="async" />
                <div>
                  <h3>Technical survey tender</h3>
                  <p>Tender activity for a technical survey of the park was reported.</p>
                  <time dateTime="2026-02">Feb–Mar 2026</time>
                </div>
              </Link>
              {" "}
              <Link className="update" to="/news#oct-2025">
                <img src={forestCanopyLightImg} alt="" loading="lazy" decoding="async" />
                <div>
                  <h3>Expert committee for DPR</h3>
                  <p>A five-member committee was formed to prepare the Detailed Project Report.</p>
                  <time dateTime="2025-10">Oct 2025</time>
                </div>
              </Link>
            </div>
          </article>
          <article className="card card-dark media-card" data-reveal>
            <img src={elephantsCrossingImg} alt="" loading="lazy" decoding="async" style={{ objectPosition: "60% 50%" }} />
            <div className="media-copy">
              <h2>Planning a Visit?</h2>
              <p>Visitor facilities and ticket information will be announced after the official opening of the park.</p>
              <div className="chips">
                <span className="chip"><Icon name="clock" /> Timings: not announced</span>
                <span className="chip"><Icon name="ticket" /> Tickets: not announced</span>
              </div>
              <Link className="btn" to="/visitor-info">Visitor information <Icon name="arrow" /></Link>
            </div>
          </article>
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
      <section className="banner">
        <img src={mistyValleyImg} alt="" loading="lazy" decoding="async" style={{ objectPosition: "center" }} />
        <div className="wrap banner-in" data-reveal>
          <p className="banner-kicker">Nature first</p>
          <h2>A new wild destination<br />for North Kerala</h2>
          <p>Planned at Nadukani along the Taliparamba–Alakode State Highway corridor in Kannur district.</p>
          <Link className="btn" to="/visitor-info#location">See the location <Icon name="arrow" /></Link>
        </div>
      </section>
    </>
  )
}
