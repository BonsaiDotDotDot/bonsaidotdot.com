# Bonsaidotdot.com — App Context

🍃 Company website + app showcase. Static HTML/CSS/JS on GitHub Pages. Lists all Bonsai apps with screenshots + Play Store links.

**Repo:** `BonsaiDotDotDot/bonsaidotdot.com` | **Branch:** `main`
**Live:** https://bonsaidotdot.com | **Hosting:** GitHub Pages (auto-deploy)

---

## Tech Stack

Static HTML/CSS/JS (no build, no framework). Custom font: Inter. Ko-fi donations.

---

## Architecture

```
index.html              Landing page (logo, tagline, app grid)
components/
  nav.html              Shared navigation (loaded dynamically)
apps/
  sonicbloom/           SonicBloom showcase + screenshots
  wordpath/             WordPath showcase + screenshots
  tuttifruttini/        Tutti-Fruttini showcase + screenshots
  buyorgoodbye/         Buy or Goodbye showcase + screenshots
legal/
  privacy.html, terms.html, support.html, about.html
app-ads.txt             AdMob verification
CNAME, favicon.*, logo.png
```

---

## Key Patterns

**Deploy:** Push to `main` → GitHub Pages auto-deploys (~1 min).

**Adding app:** Create `apps/<app-id>/index.html` with screenshots + Play Store badge. Add to `components/nav.html` + app grid on `index.html`.

**No build step** — edit HTML/CSS directly.

**Screenshots:** Place in `apps/<app-id>/` (use Play Store dimensions).

---

## PM Pipeline Rules

**Mandatory:** Every change flows through the pipeline. No exceptions, even for follow-up bugs found mid-task.

**Routing:**
- `Bonsaidotdot.com: Implement issue #N` → implement directly
- `Bonsaidotdot.com: Fix [description]` → run `/generate-tasks` first, get issue number, implement
- **Critical:** If implementing issue #N and discover follow-up bug mid-task:
  - STOP current implementation
  - Create new task for follow-up bug via `/generate-tasks`
  - Fix order: original issue first, then follow-up (do NOT inline follow-up fixes)

**Commit format:**
```
fix: description - Closes #N
feat: description - Closes #N
```
