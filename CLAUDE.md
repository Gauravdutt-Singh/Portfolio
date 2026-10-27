# Portfolio

Gauravdutt Singh's product management portfolio. Static site in `site/`: plain HTML, CSS and JS modules, no build step and no dependencies.

All changes are made through Claude Code, so there is no CMS or in-page editing.

## Files

- `site/portfolio-data.js`: all content (bio, projects, chapters, narrator lines, image map). Most edits happen here.
- `site/app.js`: rendering, hash routing (`#<project-id>` opens a case study), scroll effects, narrator.
- `site/styles.css`: all styles. Colors are tokens on `:root`; each project's color comes from its `hue` (`oklch(0.78 0.12 <hue>)`).
- `site/assets/`: the profile photo. `site/images/`: project screenshots.

## Content rules

- Lines marked `// PH` are placeholder copy. When real content replaces a field, drop its `// PH` comment.
- The number of projects is not fixed. Adding or removing an entry in `projects` updates the list, the counts ("Selected work (05)", "Case study 01 / 05") and the "next project" links automatically.
- A new project needs: `id` (lowercase, hyphens, used in the URL), `name`, `hue` (0–360, pick one far from the others), `type`, `tagline`, `roleTitle`, `teamSize`, `timeline`, `problem`, `context`, `insights` (3), `roleText`, `team`, `decisions`, `built` (3), `metrics` (first one is the headline stat), `learnings`.
- The `bio` mentions the kinds of projects; keep it in step when projects change.
- Images: save to `site/images/` (compress to well under 500 KB, ~1600px wide), then map the slot id in `images`. Slot ids: `<id>-hero`, `<id>-research`, `<id>-screen-1/2/3`.

## Checking changes

Serve with `python3 -m http.server` from `site/` (ES modules don't load from `file://`). Check the home page and at least one case study at desktop and phone widths, with no console errors and no horizontal scroll.

## Workflow

Work on a branch and open a pull request into `main`; don't commit to `main` directly.
