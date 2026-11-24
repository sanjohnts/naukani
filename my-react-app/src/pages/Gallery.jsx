import { Link } from 'react-router'
import Icon from '../components/Icon'
import PhotoGallery from '../components/PhotoGallery'
import deerSunriseForestImg from '../assets/img/deer-sunrise-forest.webp'

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={deerSunriseForestImg} alt="" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Gallery</span>
          </nav>
          <span className="pill"><Icon name="camera" /> Photographs & project media</span>
          <h1>Gallery</h1>
          <p className="lead">Nature and wildlife imagery that captures the spirit of the project. Official photographs, videos and project updates will be added when released.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="callout callout-green" data-reveal>
            <Icon name="camera" />
            <p><strong>Representative images.</strong> These photographs do not show the Nadukani project site. Official photographs, videos and construction updates will appear here once they are released.</p>
          </div>
          <PhotoGallery className="mt-lg" />
        </div>
      </section>
    </>
  )
}
