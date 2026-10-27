# Portfolio

Gauravdutt Singh's product management portfolio. Static site in `site/`: plain HTML, CSS and JS modules, no build step and no dependencies.

All changes are made through Claude Code, so there is no CMS or in-page editing.

## Files

- `site/portfolio-data.js`: all content (bio, projects, chapters, narrator lines, image map). Most edits happen here.
- `site/app.js`: rendering, hash routing (`#<project-id>` opens a case study), scroll effects, narrator.
- `site/styles.css`: all styles. Colors are tokens on `:root`; each project's color comes from its `hue` (`oklch(0.78 0.12 <hue>)`).
- `site/assets/`: the profile photo. `site/images/`: project screenshots.

## Content rules

- Never invent facts, numbers or quotes. If something is missing, ask.
- The number of projects is not fixed. Adding or removing an entry in `projects` updates the list, the counts ("Selected work (05)", "Case study 01 / 05") and the "next project" links automatically.
- A new project needs: `id` (lowercase, hyphens, used in the URL), `name`, `hue` (0–360, pick one far from the others), `type`, `tagline`, `roleTitle`, `teamSize`, `timeline`, `problem`, `context`, `insights` (3), `roleText`, `team`, `decisions`, `built` (3), `metrics` (first one is the headline stat), `learnings`.
- The `bio` mentions the kinds of projects; keep it in step when projects change.
- Optional per-project fields: `result` (cover "Result" line), `labels` / `says` (override a chapter's name or narrator line by chapter key), `questionLabel`, `outcomeNote`, `aside` ("Behind the scenes" note). Metrics are `{ v, s, pre, l }` (counts up) or `{ text, l }` (shown as is). `built` and `learnings` items are `{ t, d }`.
- Case study copy comes from the case-study notes Gaurav provides; keep his facts and numbers exactly, and only tighten wording.
- Images: save to `site/images/` (compress to well under 500 KB, ~1600px wide), then map the slot id in `images` (a path, or `{ src, focus }` where `focus` is a CSS object-position that keeps the important part in the crop; boxes are 2:1 for hero/research, 3:4 for screens, and the hero also shows as a 4:3 hover preview on the home page). Slot ids: `<id>-hero`, `<id>-research`, `<id>-screen-1/2/3`.

## Checking changes

Serve with `python3 -m http.server` from `site/` (ES modules don't load from `file://`). Check the home page and at least one case study at desktop and phone widths, with no console errors and no horizontal scroll.

## Workflow

Work on a branch and open a pull request into `main`; don't commit to `main` directly.

## Hosting

GitHub Pages. `.github/workflows/deploy.yml` publishes `site/` on every push to `main`, so merging a pull request updates the live site within a minute or two.
