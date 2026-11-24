import { Link } from 'react-router'
import Icon from '../components/Icon'
import forestCanopyLightImg from '../assets/img/forest-canopy-light.webp'
import forestStreamImg from '../assets/img/forest-stream.webp'
import rainforestCanopyImg from '../assets/img/rainforest-canopy.webp'

export default function Conservation() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={forestCanopyLightImg} alt="" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Nature & Conservation</span>
          </nav>
          <span className="pill"><Icon name="leaf" /> Environmental concept</span>
          <h1>Nature & <em>Conservation</em></h1>
          <p className="lead">Retaining the existing natural landscape, developing a natural forest environment and helping people understand why biodiversity matters.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split split-center">
          <div data-reveal>
            <span className="kicker"><Icon name="leaf" /> Environmental concept</span>
            <h2 className="h2">Nature at the <em>centre</em></h2>
            <div className="prose mt">
              <p>The Nadukani project has been described as retaining the existing natural landscape and developing a natural forest environment, rather than replacing it.</p>
              <p>That idea shapes how this website approaches conservation: celebrating native plants and wildlife, explaining why habitats matter, and encouraging every visitor to experience nature responsibly.</p>
            </div>
          </div>
          <figure className="card card-dark quote-card" data-reveal>
            <blockquote>Retaining the existing natural landscape and developing a natural forest environment.</blockquote>
            <figcaption>
              <cite>How the project's environmental approach has been described in public reporting</cite>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="kicker"><Icon name="sprout" /> Themes</span>
              <h2 className="h2">What conservation <em>means here</em></h2>
              <p>The themes at the heart of this website's educational content.</p>
            </div>
          </div>
          <div className="tiles tiles-lg">
            <div className="tile" data-reveal>
              <Icon name="globe" />
              <strong>Wildlife conservation awareness</strong>
              <span>Understanding the threats animals face and how people can help protect them.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="book" />
              <strong>Biodiversity education</strong>
              <span>Learning how species, habitats and ecosystems depend on one another.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="paw" />
              <strong>Natural habitat exhibits</strong>
              <span>Animal spaces designed around naturalistic environments.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="tree" />
              <strong>Native plant life</strong>
              <span>Protecting and appreciating the plants of Kerala and the Western Ghats.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="education" />
              <strong>Education for students</strong>
              <span>Nature learning for schools, colleges and young visitors.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="leaf" />
              <strong>Responsible wildlife tourism</strong>
              <span>Visiting in ways that respect animals, people and the landscape.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="drop" />
              <strong>Rainwater conservation</strong>
              <span>Rainwater harvesting and water management, part of earlier project descriptions.</span>
            </div>
          </div>
          <div className="callout mt-lg" data-reveal>
            <Icon name="info" />
            <p><strong>Plans, not programmes.</strong> These are the project's stated plans and the themes this website focuses on. Conservation and education programmes will be listed here only once they are officially launched.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split split-center">
          <div className="photo photo-wide" data-reveal>
            <img src={forestStreamImg} alt="A forest stream flowing between mossy rocks" loading="lazy" decoding="async" />
            <span className="img-note">Representative image</span>
          </div>
          <div data-reveal>
            <span className="kicker"><Icon name="drop" /> Why it matters</span>
            <h2 className="h2">Forests, water <em>& life</em></h2>
            <div className="prose mt">
              <p>Forests hold soil and water, cool the land around them and shelter countless species. In a monsoon landscape like Kerala's, capturing rainwater and protecting green cover go hand in hand.</p>
            </div>
            <ul className="ticks">
              <li><Icon name="check" /> Healthy forests protect soil and water</li>
              <li><Icon name="check" /> Native plants support native wildlife</li>
              <li><Icon name="check" /> Every visitor can learn to tread lightly</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="banner">
        <img src={rainforestCanopyImg} alt="" loading="lazy" decoding="async" style={{ objectPosition: "center" }} />
        <div className="wrap banner-in" data-reveal>
          <p className="banner-kicker">Learn with nature</p>
          <h2>Nature education<br />for every age</h2>
          <p>Explore the museum, botanical garden and biodiversity park planned for Nadukani.</p>
          <Link className="btn" to="/attractions">Planned attractions <Icon name="arrow" /></Link>
        </div>
      </section>
    </>
  )
}
