// Line icons used across the site (24×24, stroked via CSS on .ic).
const ICONS = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  check: (
    <>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <path d="M12 7.6v.01" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h7.5a3 3 0 0 0 0-6h-7a3 3 0 0 1 0-6H16" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15" />
      <path d="M5 19c3-4 6-7 10-9" />
    </>
  ),
  paw: (
    <>
      <circle cx="6.5" cy="10" r="1.8" />
      <circle cx="10" cy="6" r="1.8" />
      <circle cx="14.5" cy="6" r="1.8" />
      <circle cx="18" cy="10" r="1.8" />
      <path d="M8 17.2c0-3 1.9-5.2 4.2-5.2s4.3 2.2 4.3 5.2c0 1.9-1.4 2.9-3 2.4-.9-.3-1.8-.3-2.7 0-1.5.5-2.8-.5-2.8-2.4z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </>
  ),
  education: (
    <>
      <path d="M2.5 9.5L12 4.5l9.5 5-9.5 5z" />
      <path d="M6.5 11.5v5c3.3 2.3 7.7 2.3 11 0v-5" />
      <path d="M21.5 9.5v5" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
    </>
  ),
  jeep: (
    <>
      <path d="M3 16v-4.5L5.2 7h8.3l3 4.5H20a1 1 0 0 1 1 1V16" />
      <circle cx="7" cy="16.5" r="2" />
      <circle cx="17" cy="16.5" r="2" />
      <path d="M9 16.5h6" />
      <path d="M3.5 11.5h17" />
      <path d="M10 7v4.5" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h12l-2.5 4.5L17 13H5" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  ticket: (
    <>
      <path d="M3 8.5a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v1.5a2 2 0 0 0 0 4v1.5a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2V14a2 2 0 0 0 0-4z" />
      <path d="M14 7v2" />
      <path d="M14 11v2" />
      <path d="M14 15v2" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
      <path d="M4 20.5A2.5 2.5 0 0 0 6.5 21H20v-3" />
      <path d="M8 7.5h8" />
    </>
  ),
  mountain: (
    <>
      <path d="M3 20l6.5-11 4 6.5 2.5-4L21 20z" />
      <circle cx="17" cy="6" r="1.8" />
    </>
  ),
  museum: (
    <>
      <path d="M3 9.5L12 4l9 5.5" />
      <path d="M5 10v8" />
      <path d="M9.5 10v8" />
      <path d="M14.5 10v8" />
      <path d="M19 10v8" />
      <path d="M3 20.5h18" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.8 3 2.8 15 0 18" />
      <path d="M12 3c-2.8 3-2.8 15 0 18" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3s6.5 6.6 6.5 11.3a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3z" />
      <path d="M9 15a3 3 0 0 0 3 3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.7-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.8-7.5-9.5V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16.5 14.6c2.6.1 4.5 2 4.5 4.9" />
    </>
  ),
  tree: (
    <>
      <path d="M12 21v-5" />
      <path d="M12 3l6 7.5h-3l4 5.5H5l4-5.5H6z" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h3.5l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5l1.5-2.5 5 2V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8.5 7l1.8-2.5h3.4L15.5 7" />
      <circle cx="12" cy="13.5" r="3.5" />
    </>
  ),
  map: (
    <>
      <path d="M3 6.5l6-3 6 3 6-3v14l-6 3-6-3-6 3z" />
      <path d="M9 3.5v14" />
      <path d="M15 6.5v14" />
    </>
  ),
  rupee: (
    <>
      <path d="M7 4.5h11" />
      <path d="M7 8.5h11" />
      <path d="M7 4.5h3.5a4 4 0 0 1 0 8H7l7.5 7" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4 3-7 8-7 0 4.5-3.2 7-8 7z" />
      <path d="M12 15.5c0-3-2.4-5.5-7-5.5 0 3.5 2.6 5.5 7 5.5z" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
  butterfly: (
    <>
      <path d="M12 8v11" />
      <path d="M12 10C10.5 6 4 3.5 4 8.5c0 2.7 2.6 3.7 5.5 3.5-2.6 1-4.4 3-3.4 4.8 1 1.8 4.2.6 5.9-3.3" />
      <path d="M12 10c1.5-4 8-6.5 8-1.5 0 2.7-2.6 3.7-5.5 3.5 2.6 1 4.4 3 3.4 4.8-1 1.8-4.2.6-5.9-3.3" />
      <path d="M10.5 4.5L12 7l1.5-2.5" />
    </>
  ),
  cursor: (
    <>
      <path d="M5 3.5l13 6-5.5 1.8L10.7 17z" />
      <path d="M12.6 11.4l5.4 5.4" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3.5" />
      <path d="M10 16.5v-9h3a2.6 2.6 0 0 1 0 5.2h-3" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18V6.5" />
      <path d="M3 13h18v5" />
      <path d="M21 13a3 3 0 0 0-3-3h-7v3" />
      <circle cx="7" cy="10.5" r="1.6" />
    </>
  ),
  food: (
    <>
      <path d="M7 3v18" />
      <path d="M4.5 3v5a2.5 2.5 0 0 0 5 0V3" />
      <path d="M17 21V3c-2 1-3.5 3.2-3.5 6.5V14H17" />
    </>
  ),
  plane: (
    <>
      <path d="M10.5 19.5L12 21l1.5-1.5V15l7.5 2.5v-2L13.5 11V5a1.5 1.5 0 0 0-3 0v6L3 15.5v2L10.5 15z" />
    </>
  ),
  train: (
    <>
      <rect x="6" y="3" width="12" height="13" rx="3" />
      <path d="M6 10.5h12" />
      <path d="M9 19.5l-2 2" />
      <path d="M15 19.5l2 2" />
      <path d="M9 13.3v.01" />
      <path d="M15 13.3v.01" />
    </>
  ),
  bus: (
    <>
      <rect x="4.5" y="3.5" width="15" height="14" rx="2.5" />
      <path d="M4.5 11h15" />
      <path d="M7.5 20.5v-3" />
      <path d="M16.5 20.5v-3" />
      <path d="M8 14.3v.01" />
      <path d="M16 14.3v.01" />
    </>
  ),
  bird: (
    <>
      <path d="M16 7.5a2.5 2.5 0 0 0-4.8-.9L8 13l-5 1c1.6 3.5 5 5 8.5 4.3A6.5 6.5 0 0 0 16.5 12V9.5L19 8z" />
      <path d="M14.5 7.4v.01" />
      <path d="M11 18.5l1 2.5" />
      <path d="M8.5 12.5c1.7.4 3.5-.4 4.5-2" />
    </>
  ),
  reptile: (
    <>
      <path d="M12 3.5c1.4 0 2 1.2 2 2.5v4c0 1.3.4 2.6 1 3.7l.8 1.6c.9 1.8.2 4-1.6 4.9-1.2.6-2.3 1.6-2.7 2.8" />
      <path d="M12 3.5c-1.4 0-2 1.2-2 2.5v4c0 1.3-.4 2.6-1 3.7" />
      <path d="M10 8L6.5 6.5" />
      <path d="M14 8l3.5-1.5" />
      <path d="M9.5 13l-3.5 2" />
      <path d="M14.8 13.5l3.2 2.2" />
    </>
  ),
  binoculars: (
    <>
      <circle cx="6.5" cy="15.5" r="3.5" />
      <circle cx="17.5" cy="15.5" r="3.5" />
      <path d="M6.5 12V6.5l3-1.5V12" />
      <path d="M17.5 12V6.5l-3-1.5V12" />
      <path d="M10 15h4" />
    </>
  ),
  ban: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.6 5.6l12.8 12.8" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
}

export default function Icon({ name, className = 'ic' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  )
}
