# Cuadrik — cuadrik.lat

Institutional site for **Cuadrik**, the fourth pillar of Galaxy Meta: the company
that builds and operates autonomous creative agencies. One agentic engine, many
specialized brands.

This is a static site (HTML / CSS / JS), implemented from a Claude Design handoff
bundle. The home page (`index.html`) is the primary "Thesis" page.

## Features

- Bilingual EN/ES toggle (English by default), persisted in `localStorage`
- Sticky nav with mobile menu
- Reveal-on-scroll animations via `IntersectionObserver`
- Warm off-white / deep-ink aesthetic with a single teal-ink accent

## Structure

```
index.html        Home (Thesis)
assets/site.css   Shared styles
assets/site.js    Language toggle, mobile nav, reveal, contact form
```

## Local preview

Any static server works, e.g.:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

Hosted on **Vercel** as a zero-config static site, connected to GitHub via
Vercel's native Git integration (no GitHub Actions). Production domain:
[cuadrik.lat](https://cuadrik.lat).
