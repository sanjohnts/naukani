import Home from './pages/Home'
import About from './pages/About'
import Wildlife from './pages/Wildlife'
import Safari from './pages/Safari'
import Attractions from './pages/Attractions'
import Conservation from './pages/Conservation'
import Gallery from './pages/Gallery'
import VisitorInfo from './pages/VisitorInfo'
import News from './pages/News'
import Contact from './pages/Contact'

// Every page of the site: its URL, component and the <head> text search engines see.
export const pages = [
  {
    path: "/",
    Component: Home,
    title: "Nadukani Zoo & Safari Park | Taliparamba, Kannur, Kerala",
    description: "Nadukani Zoo & Safari Park is a proposed wildlife, safari and biodiversity destination at Nadukani, Taliparamba, Kannur, Kerala. Project information, planned attractions and updates.",
    jsonLd: {"@context": "https://schema.org", "@type": "WebSite", "name": "Nadukani Zoo & Safari Park", "url": "https://nadukanisafaripark.com/", "description": "Project information for the proposed Nadukani Zoo & Safari Park at Taliparamba, Kannur, Kerala."},
  },
  {
    path: "/about",
    Component: About,
    title: "About the Project | Nadukani Zoo & Safari Park",
    description: "Background, vision, mission and milestones of the proposed Nadukani Zoo & Safari Park in Taliparamba, Kannur, Kerala.",
  },
  {
    path: "/wildlife",
    Component: Wildlife,
    title: "Wildlife & Biodiversity | Nadukani Zoo & Safari Park",
    description: "Wildlife categories and Western Ghats biodiversity at the proposed Nadukani Zoo & Safari Park. The official animal collection has not yet been announced.",
  },
  {
    path: "/safari",
    Component: Safari,
    title: "The Safari Experience | Nadukani Zoo & Safari Park",
    description: "The proposed safari at Nadukani: naturalistic habitats explored in specially protected vehicles. Route and ticket details to be announced.",
  },
  {
    path: "/attractions",
    Component: Attractions,
    title: "Planned Attractions | Nadukani Zoo & Safari Park",
    description: "Six planned components of Nadukani Zoo & Safari Park: wildlife safari, zoological park, botanical garden, natural history museum, biodiversity park and rainwater conservation.",
  },
  {
    path: "/conservation",
    Component: Conservation,
    title: "Nature & Conservation | Nadukani Zoo & Safari Park",
    description: "The environmental concept behind Nadukani Zoo & Safari Park: retaining the natural landscape, biodiversity education and responsible tourism.",
  },
  {
    path: "/gallery",
    Component: Gallery,
    title: "Gallery | Nadukani Zoo & Safari Park",
    description: "Nature and wildlife photographs for Nadukani Zoo & Safari Park. Official project photographs will be added when released.",
  },
  {
    path: "/visitor-info",
    Component: VisitorInfo,
    title: "Visitor Information | Nadukani Zoo & Safari Park",
    description: "Location, map and visitor information status for Nadukani Zoo & Safari Park, Taliparamba, Kannur. Tickets and timings will be announced after the official opening.",
  },
  {
    path: "/news",
    Component: News,
    title: "News & Updates | Nadukani Zoo & Safari Park",
    description: "Timeline of announcements and progress for the proposed Nadukani Zoo & Safari Park, from the 2024 Kerala Budget to the 2026 camp office.",
  },
  {
    path: "/contact",
    Component: Contact,
    title: "Contact & Enquiries | Nadukani Zoo & Safari Park",
    description: "Contact information for Nadukani Zoo & Safari Park. Official phone and email details will be listed once verified.",
  },
]
