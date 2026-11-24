import { Link } from 'react-router'

export default function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Nadukani Zoo & Safari Park, home">
      <span className="brand-mark" aria-hidden="true">N<i>Z</i></span>
      <span className="brand-text"><strong>Nadukani</strong><small>Zoo & Safari Park</small></span>
    </Link>
  )
}
