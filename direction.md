# Bonsaidotdot.com — Product Direction

**Last updated:** 2026-04-15  
**Status:** Early development

---

## Vision

A clean, simple portfolio site for all Bonsai apps. Not a marketing site — just a trustworthy home base. Each app has a page, every app points here for legal and support.

---

## Structure

### Homepage
- Mission statement
- Grid/row of all app logos, each linking to their app page
- Simple, uncluttered — the apps are the content

### Per-app page (one per app)
- App name + graphics (screenshots, icon)
- Brief description
- Download link (Google Play)
- Link to support page

### Legal & Support (shared across all apps)
- Single legal page — privacy policy covers all apps
- Single support page — contact/FAQ covers all apps
- All apps link here (Play Store requires these URLs)

---

## Design Principles

- *Simplistic* — no frameworks, no bloat. Static HTML/CSS.
- Consistent across app pages — same template, different content
- Mobile-readable — users will land here from Play Store links
- Fast — no JS dependencies if avoidable

### Ko-fi
- Link on homepage (and possibly per-app pages) to Ko-fi support page
- Unobtrusive — present but not pushed

---

## Explicit Cuts

- No blog, no news section
- No analytics dashboard or admin UI
- No per-app support pages — one shared page is enough
- No social feeds or external embeds

---

## Practical Notes

- Each new app onboarded = new app page added here + Play Store links updated
- Legal page URL format used in Play Store listings: `https://bonsaidotdot.com/legal`
- Support page URL: `https://bonsaidotdot.com/support`
