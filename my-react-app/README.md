# Nadukani Zoo & Safari Park — website

React 19 + Vite + React Router. Every page is pre-rendered to plain HTML at build time, so it
loads fast, works on any static host and is fully visible to search engines.

## Commands

```sh
npm install        # once
npm run dev        # local dev server with hot reload
npm run build      # production build into dist/ (one HTML file per page + 404.html)
npm run preview    # serve dist/ locally
npm run lint
```

Building for a sub-folder (GitHub Pages): `BASE_PATH=/naukani/ npm run build`.
For a domain root (e.g. nadukanisafaripark.com) leave `BASE_PATH` unset.

## Where things are

| What | File |
| --- | --- |
| Page content | `src/pages/*.jsx` (one per page) |
| Page titles, descriptions, URLs | `src/routes.js` |
| Site address used for canonical/social links | `SITE_URL` in `src/seo.js` |
| Menu links | `NAV` in `src/components/Header.jsx` |
| Footer | `src/components/Footer.jsx` |
| Gallery photos | `src/data/photos.js` |
| Icons | `src/components/Icon.jsx` (`<Icon name="leaf" />`) |
| Styles | `src/styles/style.css` |
| Images | `src/assets/img/` |

To add a page: create `src/pages/NewPage.jsx`, add it to `src/routes.js`, and (optionally) to
`NAV` and `public/sitemap.xml`.

Old static-site links such as `/about.html` or `/wildlife.html#birds` forward to the new
addresses automatically.
