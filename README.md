# AbdElMoneim Sultan — Portfolio Website

A bilingual (English/Arabic) personal portfolio built from your CV, with a
local admin panel for editing content without touching code.

## Files

```
index.html          → the live site
admin.html           → the content editor (login required)
404.html              → custom error page
robots.txt / sitemap.xml
js/translations.js   → all EN/AR text strings
js/data.js            → experience, projects, skills, certificates (EN/AR)
js/main.js            → site behavior (language, theme, animations, charts)
js/admin.js           → admin panel logic
assets/portrait.jpg   → your photo, extracted from the uploaded CV
assets/AbdElMoneim_Sultan_CV.pdf → served by the "Download CV" button
```

## Running it

Everything is static HTML/CSS/JS — no build step, no server required.
Open `index.html` directly in a browser, or serve the folder with any
static host (GitHub Pages, Netlify, Vercel, etc). Fonts, icons, and chart
libraries load from CDNs, so an internet connection is needed for those —
if you need a fully offline copy, the CDN `<link>`/`<script>` tags in
`index.html` can be swapped for locally-downloaded copies of the same
libraries (Bootstrap, AOS, Typed.js, Chart.js, Font Awesome).

## Editing content

1. Open `admin.html` in the same browser/device as the live site.
2. Sign in with **admin / admin123** (change this immediately under
   **Account**).
3. Edit Hero/About text, Experience, Projects, Skills, and Certificates —
   each section has an English and Arabic tab.
4. Click **Save**. Reload `index.html` (or refresh the tab) to see changes.

Your edits are stored in the browser's `localStorage` and are read live
by `index.html`. They are **per-browser** — they won't automatically
appear on another device or for site visitors unless you either:

- Keep editing from the same browser you use to publish, or
- Use **Backup & Restore → Export** to download a JSON snapshot and send
  it to a developer to bake permanently into `js/data.js` /
  `js/translations.js`, or
- Import that same backup file into the admin panel on another browser
  via **Backup & Restore → Import** to sync the override state there too.

## Important note on the admin login

The admin panel's login is a **client-side convenience gate**, not real
security — anyone who opens the page's source can see how it works.
Don't rely on it to protect sensitive information. If you need genuine
access control, this project would need a real backend.

## What was intentionally left out

The original brief asked for a full enterprise CMS (blog manager,
drag-and-drop menu builder, live analytics, push notifications, PWA
install, real authentication). Those require a server and were left out
in favor of a smaller set of features that actually work end-to-end:
bilingual content editing, theme customization, and JSON backup/restore.
