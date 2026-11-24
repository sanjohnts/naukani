import { useRef, useState } from 'react'
import { PHOTOS } from '../data/photos'
import Icon from './Icon'

const FILTERS = [
  ['all', 'All'],
  ['forest', 'Forest'],
  ['wildlife', 'Wildlife'],
  ['safari', 'Safari'],
]

const label = (cat) => cat[0].toUpperCase() + cat.slice(1)

// Filterable photo grid with a lightbox that steps through the photos currently shown.
export default function PhotoGallery({ className = '' }) {
  const [filter, setFilter] = useState('all')
  const [current, setCurrent] = useState(null)
  const dialogRef = useRef(null)

  const shown = PHOTOS.filter((p) => filter === 'all' || p.cat === filter)
  const photo = current === null ? null : shown[current]

  const open = (photo) => {
    setCurrent(shown.indexOf(photo))
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()
  const step = (dir) => setCurrent((i) => (i + dir + shown.length) % shown.length)

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  return (
    <>
      <div className={`filters ${className}`.trim()} role="group" aria-label="Filter photos">
        {FILTERS.map(([value, text]) => (
          <button key={value} className="filter" type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>
            {text}
          </button>
        ))}
      </div>
      <div className="gallery">
        {PHOTOS.map((p) => (
          <figure key={p.src} className="g-item" hidden={!shown.includes(p)}>
            <button type="button" aria-label={`Open image: ${p.title}`} onClick={() => open(p)}>
              <img src={p.src} alt={p.title} width={p.width} height={p.height} loading="lazy" decoding="async" />
            </button>
            <figcaption>{p.title}<span>{label(p.cat)}</span></figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Image viewer"
        onClick={(e) => e.target === e.currentTarget && close()}
        onKeyDown={onKeyDown}
        onClose={() => setCurrent(null)}
      >
        {photo && <img src={photo.src} alt={photo.title} />}
        <p>{photo?.caption}</p>
        <button className="lb-btn lb-close" type="button" aria-label="Close" onClick={close}><Icon name="close" /></button>
        <button className="lb-btn lb-prev" type="button" aria-label="Previous image" onClick={() => step(-1)}><Icon name="arrow" /></button>
        <button className="lb-btn lb-next" type="button" aria-label="Next image" onClick={() => step(1)}><Icon name="arrow" /></button>
      </dialog>
    </>
  )
}
