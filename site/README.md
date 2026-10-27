# Portfolio site

Static site built from the Claude Design "Portfolio B" prototype. No build step.

- Run locally: `python3 -m http.server` in this folder, then open http://localhost:8000
  (it uses ES modules, so opening index.html straight from disk won't work).
- Deploy: upload this folder to any static host (GitHub Pages, Netlify, Vercel).

## Editing

All content is in `portfolio-data.js`. Lines marked `// PH` are placeholder text; replace them with real details.

- **Screenshots:** put files in `images/` and add them to the `images` map, e.g.
  `'passport-hero': 'images/passport-hero.jpg'`. Slot ids are `<id>-hero`, `<id>-research`
  and `<id>-screen-1/2/3`. Empty slots show a placeholder box. The hero image also shows as the
  hover preview on the home page list.
- **Narrator:** `narrator: { show: true, side: 'left' }`.
- **Photo:** `assets/gaurav.webp`.
