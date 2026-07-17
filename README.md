# Mahere Projects — website

Marketing site for **Mahere Projects Ltd**, a project management consultancy in
Dunedin, New Zealand. Built with [Astro](https://astro.build), static output,
deployed on Cloudflare Pages (free tier). Zero-maintenance: once live, the only
account the site owner runs is Microsoft 365 — there are no servers.

- **Stack:** Astro + plain CSS (custom-property tokens, no Tailwind)
- **Fonts:** DM Sans + DM Mono (Google Fonts)
- **Content:** projects live as markdown in a content collection
- **Forms:** static HTML posting to [Web3Forms](https://web3forms.com) (no backend)

---

## 1 · Local development

You need [Node.js](https://nodejs.org) 18.20+ (or 20/22) and npm.

```bash
npm install       # install dependencies (first time only)
npm run dev       # start the dev server at http://localhost:4321
npm run build     # produce the production build in dist/
npm run preview   # serve the built dist/ locally to check it
```

`npm run dev` and `npm run build` should both complete with no errors.

### Project structure

```
public/                    static assets copied verbatim to the site root
  _redirects               Cloudflare Pages redirects (old /contact-us → /contact)
  robots.txt               search-engine directives + sitemap pointer
  favicon.svg              gold "M" mark
  og-image.svg             social-share preview image
  images/projects/         project photos (currently a shared placeholder)
src/
  content/projects/*.md    one markdown file per project (see below)
  content.config.ts        the projects collection schema
  layouts/BaseLayout.astro page shell + all <head> SEO tags
  components/              Nav, Footer, ProjectCard
  pages/                   index, project-management, project-recovery,
                          contact, privacy — file name = URL path
  styles/global.css        design tokens + all site styles
astro.config.mjs           site URL, static output, sitemap integration
```

---

## 2 · Deploy to Cloudflare Pages

1. Push this repository to GitHub (see below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, and pick this repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Every push to the `main` branch now rebuilds and publishes
   automatically. Pull requests get their own preview URL.

### Add the custom domain in Pages

Once the DNS cutover below shows Cloudflare as **Active** for the zone:

- In the Pages project: **Custom domains → Set up a custom domain**, add
  `mahereprojects.nz`, then add `www.mahereprojects.nz`.
- Accept the DNS record changes Cloudflare proposes for the apex and `www`.

---

## 3 · DNS cutover checklist (1st Domains → Cloudflare)

The domain is registered at **1st Domains (NZ)** and its DNS currently points at
Squarespace. We move DNS to Cloudflare by delegating the **nameservers** — the
Squarespace site keeps serving the whole time, so there is no downtime.

1. **Add the zone to Cloudflare.** In Cloudflare, **Add a site →
   `mahereprojects.nz`**, choose the **Free** plan, and let Cloudflare scan and
   import the existing DNS records. Check the imported records look sane
   (Squarespace A/CNAME records, any MX/email records, etc.).
2. **Delegate the nameservers at 1st Domains.** Cloudflare will show two
   assigned nameservers (e.g. `xxx.ns.cloudflare.com`). Log in to 1st Domains,
   open the domain, and change the **nameserver delegation** to those two
   Cloudflare nameservers. **Do not edit individual DNS records at 1st Domains —
   change only the nameservers.** Remove any old Squarespace nameservers.
3. **Wait for Active.** Cloudflare emails you and the dashboard shows the zone
   as **Active** once delegation propagates (usually well under a day). Until
   then, and after, the Squarespace site keeps serving normally.
4. **Point the domain at Pages.** With the zone Active, add the custom domain in
   the Pages project (section 2) and accept the apex + `www` record changes
   Cloudflare proposes. This is the moment traffic starts hitting the new site.
5. **Verify and keep a fallback.** Confirm `https://mahereprojects.nz` and
   `https://www.mahereprojects.nz` both serve the new site (test the contact
   form too). Keep the Squarespace subscription running for **one week** as a
   fallback. Once you're happy, cancel Squarespace — the domain lives at 1st
   Domains and is unaffected by cancelling Squarespace.

---

## 4 · Editing content later (for a non-technical owner)

**Edit the markdown files on GitHub in the browser — saving auto-deploys the
site.** Open a file under `src/content/projects/` on github.com, click the
pencil ✏️ icon, change the text, and click **Commit changes**. Cloudflare
rebuilds and publishes within a couple of minutes. The same works for page copy
under `src/pages/`.

### Adding or changing a project

Each project is one file in `src/content/projects/`. Copy an existing file,
rename it, and edit the frontmatter (the block between the `---` lines):

```markdown
---
title: Project name, City
ref: MP/24/012           # your internal reference, shown in mono
sector: Education        # Commercial property · Public sector · Education · Utilities · Hospitality · Healthcare
year: "2024"
blurb: One-line description shown on the card.
image: /images/projects/placeholder.svg   # swap for a real photo in public/images/projects/
featured: false          # true adds the gold left border
order: 5                 # lower numbers appear first
---

Optional longer description (not currently shown on the card).
```

To use a real photo: drop the image file into `public/images/projects/` and set
`image` to `/images/projects/your-file.jpg`.

---

## 5 · Before go-live — the one required TODO

The contact form needs a **Web3Forms access key**. It is free and needs no
server:

1. Confirm the destination inbox — the build assumes **office@mahereprojects.nz**
   (a Microsoft 365 address). Confirm this address is correct first.
2. Go to [web3forms.com](https://web3forms.com), enter that email, and copy the
   access key it emails you.
3. In `src/pages/contact.astro`, replace `YOUR-WEB3FORMS-ACCESS-KEY` with the
   key (the line is marked with a `TODO` comment). Commit — the form goes live
   on the next deploy.

Until the key is set, the email and LinkedIn fallbacks on the contact page still
work.

---

## Notes

- **Design system is locked.** Tokens are defined at the top of
  `src/styles/global.css`. Gold (`--brand-*`) is identity only; teal
  (`--action-*`) is every interactive element (buttons, links, focus rings).
- **No client-side JavaScript** ships except what the browser needs for the
  no-JS mobile menu (a native `<details>` element). Images are lazy-loaded and
  the CSS is a single small cached file.
- **SEO:** per-page titles and descriptions, canonical URLs, Open Graph tags, a
  generated `sitemap-index.xml`, and `robots.txt` are all in place.
