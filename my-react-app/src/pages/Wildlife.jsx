import { Link } from 'react-router'
import Icon from '../components/Icon'
import elephantHerdImg from '../assets/img/elephant-herd.webp'
import fernsForestFloorImg from '../assets/img/ferns-forest-floor.webp'
import greatHornbillImg from '../assets/img/great-hornbill.webp'
import mistyForestImg from '../assets/img/misty-forest.png'
import monitorLizardImg from '../assets/img/monitor-lizard.webp'
import spottedDeerImg from '../assets/img/spotted-deer.webp'
import tigerForestImg from '../assets/img/tiger-forest.webp'

export default function Wildlife() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={spottedDeerImg} alt="" style={{ objectPosition: "center 65%" }} />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Wildlife</span>
          </nav>
          <span className="pill"><Icon name="paw" /> Animals, birds & native biodiversity</span>
          <h1>Wildlife & <em>Biodiversity</em></h1>
          <p className="lead">A planned home for wildlife in naturalistic environments, with the native biodiversity of the Western Ghats at its heart.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="callout" data-reveal>
            <Icon name="info" />
            <p><strong>Animal collection not yet announced.</strong> The exact species list for Nadukani has not been confirmed. A 2025 report mentioned plans to source animals from the Thiruvananthapuram and Thrissur zoos and through exchanges with other zoos in India. Species will be listed here only after an official animal collection list is released.</p>
          </div>
          <div className="section-head mt-lg" data-reveal>
            <div>
              <span className="kicker"><Icon name="paw" /> What to expect</span>
              <h2 className="h2">Wildlife <em>categories</em></h2>
              <p>Wildlife information for the park will be organised into these broad groups. Confirmed species will be profiled under each one.</p>
            </div>
          </div>
          <div className="cat-grid">
            <article className="card cat" id="mammals" data-reveal>
              <div className="cat-media">
                <img src={elephantHerdImg} alt="Elephant herd crossing a forest track" loading="lazy" decoding="async" style={{ objectPosition: "center" }} />
                <span className="img-note">Representative image</span>
              </div>
              <div className="cat-body">
                <h3>Mammals</h3>
                <p>From large herbivores to small forest mammals: the animals most visitors come to see. Confirmed species will be profiled here.</p>
                <span className="tag tag-amber">Species list awaited</span>
              </div>
            </article>
            <article className="card cat" id="birds" data-reveal>
              <div className="cat-media">
                <img src={greatHornbillImg} alt="Great hornbill perched on a mossy branch in a rainforest canopy" loading="lazy" decoding="async" />
                <span className="img-note">Representative image</span>
              </div>
              <div className="cat-body">
                <h3>Birds</h3>
                <p>Kerala's forests are rich in birdlife. Bird exhibits and species details will be added once the collection is announced.</p>
                <span className="tag tag-amber">Species list awaited</span>
              </div>
            </article>
            <article className="card cat" id="reptiles" data-reveal>
              <div className="cat-media">
                <img src={monitorLizardImg} alt="Monitor lizard resting on a mossy log beside a forest stream" loading="lazy" decoding="async" />
                <span className="img-note">Representative image</span>
              </div>
              <div className="cat-body">
                <h3>Reptiles</h3>
                <p>Reptiles play a vital role in forest ecosystems. Any reptile exhibits will be listed here when officially confirmed.</p>
                <span className="tag tag-amber">Species list awaited</span>
              </div>
            </article>
            <article className="card cat" id="herbivores" data-reveal>
              <div className="cat-media">
                <img src={spottedDeerImg} alt="Spotted deer in a forest clearing" loading="lazy" decoding="async" style={{ objectPosition: "45% 60%" }} />
                <span className="img-note">Representative image</span>
              </div>
              <div className="cat-body">
                <h3>Herbivores</h3>
                <p>Grazing and browsing animals of grasslands and forest edges, well suited to large, naturalistic habitats.</p>
                <span className="tag tag-amber">Species list awaited</span>
              </div>
            </article>
            <article className="card cat" id="carnivores" data-reveal>
              <div className="cat-media">
                <img src={tigerForestImg} alt="Bengal tiger walking through a sunlit teak forest" loading="lazy" decoding="async" />
                <span className="img-note">Representative image</span>
              </div>
              <div className="cat-body">
                <h3>Carnivores</h3>
                <p>Predators are often the highlight of a safari. No carnivore species has been officially confirmed for Nadukani yet.</p>
                <span className="tag tag-amber">Species list awaited</span>
              </div>
            </article>
            <article className="card cat" id="western-ghats" data-reveal>
              <div className="cat-media">
                <img src={fernsForestFloorImg} alt="Ferns and moss on a forest floor" loading="lazy" decoding="async" style={{ objectPosition: "center" }} />
                <span className="img-note">Representative image</span>
              </div>
              <div className="cat-body">
                <h3>Native Western Ghats biodiversity</h3>
                <p>The plants, insects, birds and animals native to the Western Ghats, one of the richest biodiversity regions on Earth.</p>
                <span className="tag">Native focus</span>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section section-flush-top">
        <div className="wrap split split-center">
          <div className="photo photo-tall" data-reveal>
            <img src={mistyForestImg} alt="Mist rising over dense green forest" loading="lazy" decoding="async" />
            <span className="img-note">Representative image</span>
          </div>
          <div data-reveal>
            <span className="kicker"><Icon name="mountain" /> Western Ghats</span>
            <h2 className="h2">A biodiversity <em>hotspot</em> on the doorstep</h2>
            <div className="prose mt">
              <p>Kannur district stretches from the Arabian Sea coast to the slopes of the Western Ghats, a mountain range recognised as one of the world's biodiversity hotspots and inscribed as a UNESCO World Heritage Site in 2012.</p>
              <p>The Ghats are home to a remarkable number of plants and animals found nowhere else on Earth. Showcasing and explaining this native biodiversity is a natural focus for a wildlife destination in North Kerala.</p>
            </div>
            <ul className="ticks">
              <li><Icon name="check" /> Evergreen and moist deciduous forests</li>
              <li><Icon name="check" /> Endemic plants, amphibians, birds and insects</li>
              <li><Icon name="check" /> Rivers and streams that begin in the hills</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="kicker"><Icon name="shield" /> Good practice</span>
              <h2 className="h2">Responsible <em>wildlife viewing</em></h2>
              <p>General guidance followed at zoos and safari parks everywhere. Official park rules will be published by the park authority.</p>
            </div>
          </div>
          <div className="tiles tiles-lg">
            <div className="tile" data-reveal>
              <Icon name="binoculars" />
              <strong>Watch quietly</strong>
              <span>Low voices and slow movements help animals stay relaxed and visible.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="ban" />
              <strong>Never feed animals</strong>
              <span>Outside food can make animals ill and change their natural behaviour.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="shield" />
              <strong>Respect barriers</strong>
              <span>Barriers and distances exist to protect both animals and visitors.</span>
            </div>
            <div className="tile" data-reveal>
              <Icon name="leaf" />
              <strong>Leave no trace</strong>
              <span>Take your litter with you and keep plastic out of natural habitats.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
