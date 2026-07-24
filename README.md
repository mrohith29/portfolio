# rohithmariyala.com

Personal site of **Rohith Mariyala** — backend & agentic-AI engineer.
Built with [Astro](https://astro.build) + [Tailwind](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

Design language: an "amber-phosphor terminal" — monospace, `whoami`-style framing,
light ("terminal on paper") and dark ("CRT") themes.

## Writing & editing content — no code needed

Content lives as Markdown in `src/content/`. To add or edit **blog posts, projects,
or experience** without touching code:

1. Go to **[app.pagescms.org](https://app.pagescms.org)** and sign in with GitHub.
2. Open the `mrohith29/portfolio` repo.
3. Edit in a form (required fields are enforced). Saving commits to the repo, and
   Vercel automatically rebuilds the live site in ~30s.

The content model is defined in [`.pages.yml`](./.pages.yml).

### Editing directly in the repo instead
- **Blog** → `src/content/blog/*.md` — newest `pubDate` shows first; set `draft: true` to hide.
- **Projects** → `src/content/projects/*.md` — set `featured: true` to show it as a case study on the home/work pages; `order` controls sorting.
- **Experience** → `src/content/experience/*.md` — copy an existing file and fill the fields; sorts by `start` (newest first).
- **Now page** → `src/pages/now.astro` — edit the `now` array and `lastUpdated`.

## Project structure

```text
public/            static assets, fonts (self-hosted JetBrains Mono), og.png, resume.pdf
scripts/og.mjs     regenerates the social-share image  →  node scripts/og.mjs
src/
├── components/    Navigation, Footer, FeaturedWork, WorkRow, ThemeIcon …
├── content/       blog · projects · experience  (Markdown collections)
├── layouts/       Layout + Markdown{Post,Works}Layout
├── pages/         index, works, experience, blog, now, 404, rss.xml
└── styles/        base.css  ← design tokens + terminal UI primitives
```

## Commands

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Dev server at `localhost:4321`               |
| `npm run build`     | Build to `./dist/` (also emits sitemap)      |
| `npm run preview`   | Preview the production build locally         |
| `node scripts/og.mjs` | Regenerate `public/og.png` social card     |

## SEO / sharing
Sitemap (`/sitemap-index.xml`), RSS (`/rss.xml`), Open Graph + Twitter cards, and a
custom OG image are all wired up. `site` is set in `astro.config.mjs`.
