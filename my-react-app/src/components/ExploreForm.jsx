import { useNavigate } from 'react-router'
import Icon from './Icon'

const TOPICS = [
  ['/attractions', 'Planned attractions'],
  ['/safari', 'Safari experience'],
  ['/wildlife', 'Wildlife'],
  ['/conservation', 'Nature & conservation'],
  ['/visitor-info', 'Visitor information'],
  ['/news', 'Project updates'],
]

// The hero's "pick a topic, then Explore" control.
export default function ExploreForm() {
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    navigate(new FormData(e.currentTarget).get('topic'))
  }

  return (
    <form className="explore" aria-label="Explore the project" onSubmit={onSubmit}>
      <label className="explore-field">
        <span className="sr-only">Choose a topic</span>
        <Icon name="grid" />
        <select name="topic">
          {TOPICS.map(([to, label]) => <option key={to} value={to}>{label}</option>)}
        </select>
      </label>
      <span className="explore-field explore-loc"><Icon name="pin" /> Nadukani, Taliparamba</span>
      <button className="btn" type="submit">Explore <Icon name="arrow" /></button>
    </form>
  )
}
