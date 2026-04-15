# Bonsaidotdot.com — App Context

🍃 Company website and app showcase. Static HTML/CSS/JS site hosted on GitHub Pages. Lists all Bonsai apps with screenshots, descriptions, and Play Store links.

**Repo:** `BonsaiDotDotDot/bonsaidotdot.com` (branch: `main`)
**Live URL:** https://bonsaidotdot.com
**Hosting:** GitHub Pages (auto-deploys on push to `main`)

---

## Tech Stack

- Static HTML/CSS/JS — no build step, no framework
- Custom font: Inter (via system/fallback)
- GitHub Pages for hosting (CNAME → `bonsaidotdot.com`)
- Ko-fi integration for donations

---

## Architecture

```
index.html                  ← Landing page (logo, tagline, app grid)
components/
  nav.html                  ← Shared navigation component (loaded dynamically)
apps/
  sonicbloom/               ← SonicBloom showcase page + screenshots
  wordpath/                 ← WordPath showcase page + screenshots
  tuttifruttini/            ← Tutti-Fruttini showcase page + screenshots
  buyorgoodbye/             ← Buy or Goodbye showcase page + screenshots
legal/
  privacy.html              ← Privacy policy
  terms.html                ← Terms of service
  support.html              ← Support page
  about.html                ← About page
app-ads.txt                 ← AdMob verification
CNAME                       ← GitHub Pages custom domain
favicon.ico / favicon.png
logo.png
```

---

## Key Patterns

**Deploy:** Push to `main` → GitHub Pages auto-deploys. No CI needed. Changes are live in ~1 minute.

**Adding a new app:** Create `apps/<app-id>/index.html` with screenshots, description, and Play Store badge. Add entry to `components/nav.html` dropdown and to the app grid on `index.html`.

**No build step** — edit HTML/CSS directly. No npm, no bundler, no framework.

**Screenshots:** Place in `apps/<app-id>/` alongside the page. Use Play Store screenshot dimensions where possible.

---

## Build & Deploy

Push to `main` — GitHub Pages handles the rest. No local build needed.
