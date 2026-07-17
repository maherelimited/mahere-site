# Mahere Projects — Site Build Brief (for Claude Code)

Build a complete static website for Mahere Projects Ltd, a project management consultancy in Dunedin, New Zealand, replacing mahereprojects.nz (currently Squarespace). Deploy target: Cloudflare Pages (free tier); the domain is registered at 1st Domains and its DNS will be delegated to Cloudflare (steps in README deliverable). Zero-maintenance hosting is a hard requirement: after handover the site owner runs only Microsoft 365, no servers.

## Stack
- Astro (latest), static output, no client JS unless essential
- Plain CSS with custom properties (tokens below) — no Tailwind
- Fonts: DM Sans (400/500/600/700) + DM Mono (400/500) via Google Fonts
- Content collections for projects (markdown + frontmatter)
- Deploy: GitHub repo → Cloudflare Pages (build command `npm run build`, output `dist`)

## Design system (locked — do not deviate)
The site is a visual sibling of the Rysc product (rysc.ai). Same foundation, different signature colour.

Tokens:
--page: #F7F6F2        (warm parchment page background)
--card: #FFFFFF
--ink: #1A1A18          (primary text)
--ink-soft: #444441     (body text)
--ink-mute: #888780     (metadata, eyebrows)
--ink-light: #D3D1C7
--border: rgba(0,0,0,0.08)
--border-strong: rgba(0,0,0,0.12)

Brand (identity only — NEVER on buttons/links/hovers):
--brand: #E5CF34        (Mahere gold)
--brand-deep: #B8A51E
--brand-wash: #FBF6D8
--brand-edge: #E5D78F
--brand-ink: #323232

Action (all interactive elements — buttons, links, focus rings):
--action: #1D9E75
--action-hover: #0F6E56
--action-wash: #E1F5EE
--action-edge: #9FE1CB
--action-text: #085041

Gold usage rules (strict): logo mark in nav, 4px left border on featured cards,
one headline keyword highlight per page, small eyebrow rules. Maximum ~4
appearances per page. Gold is never a button, link, hover, or icon colour.

Teal usage: primary buttons (filled teal, white text), inline links (teal with
teal-edge underline), input focus rings, nav CTA button.

Nav: dark chrome bar (#1A1A18), white links, gold square logo mark with "M",
wordmark "Mahere Projects" (Projects in muted weight), active link in gold,
teal "Start a project →" CTA button on the right.

Type: DM Sans everywhere; DM Mono only for metadata/eyebrow labels
(11px, uppercase, 0.1em letter-spacing). Display headings 600 weight,
-0.03em tracking. Sentence case for all headings. Generous whitespace.
Border-radius: 6px buttons, 12px cards.

## Pages (4 + footer)
Nav: Home · Project Management · Project Recovery · Contact
Privacy policy: footer link only (simple page, standard boilerplate, no data resale).

IMPORTANT — content must be principal-agnostic: no individual names, bios,
photos of people, or claims tied to a specific person's CV anywhere.

### Home (/)
1. Hero — eyebrow: "Mahere /ˈma-heri/ — a plan; to make preparations in advance."
   H1: "Sharper project management." (gold highlight on "Sharper")
   Lead: "Mahere plans, manages and delivers construction projects for the
   commercial and public sectors — and recovers the ones that have
   lost their way. Based in Dunedin, working New Zealand-wide."
   Buttons: [Start a project →] (teal) [See our work] (ghost)
2. Who we are — short block: "Mahere is a project management consultancy with
   decades of senior delivery experience in New Zealand and internationally,
   across commercial construction, healthcare, education,
   utilities and hospitality. Successful projects hinge on a solid plan and
   clear agreements on scope, duration, roles and budget. We work closely with
   clients, building confidence through meticulous planning and transparent
   communication — and we bring a wide network of construction-sector
   specialists to a project when it needs them."
3. Sector strip (bordered band): Commercial property · Public sector ·
   Education · Utilities · Hospitality · Healthcare
4. Selected projects — grid of project cards from the content collection
   (show all four, no separate projects page
   needed at launch). Card: image placeholder block, mono ref (e.g. MP/21/004),
   sector + year, title, one-line description.
5. How we work — numbered strip (no icons/circles):
   1 Initiate — agree what success looks like; appoint specialists and contractors.
   2 Plan — time, cost, scope, risk, quality, health and safety.
   3 Control — monitor and report budget, progress, risk and project health.
   4 Close — stage review, compliance check, lessons learned, knowledge transfer.
6. Recovery hook — featured card (gold left border): "Projects don't always go
   to plan. When one drifts on time, budget, quality or scope, Mahere brings a
   structured five-step recovery method to turn it around." → link to /project-recovery
7. CTA band: "Start with a conversation. Tell us about the project — we'll
   reply within one working day." [Contact →]

### Project Management (/project-management)
Intro: "Mahere works with clients from initiation through execution, monitoring
and closure. Services by project phase:"
Four phase blocks (numbered, each a card):
1 Concept & design — Design brief and scope definition · project control groups
  and stakeholder plans · budgets and funding reports · consultant procurement ·
  constructability reviews · value engineering · Green Star buildings.
2 Documentation & tendering — Tender documentation and evaluation · contract
  risk assessment · statutory consents · contract conditions review.
3 Construction — Contract administration · health & safety management ·
  CPM scheduling · cost and budget management · earned
  value · change order review · claims assistance · QA and document control ·
  progress reporting.
4 Commissioning & closure — Project start-up and commissioning ·
  guarantees, warranties and as-builts · code compliance certificates · defects
  management · lessons-learned review · contract closure.
Tools note: "Contract administration and document control through Procore;
collaboration, dashboards and reporting through Smartsheet."

### Project Recovery (/project-recovery)
H1: "Helping you turn a troubled project around."
Intro: "Distressed projects carry a high cost. Most run on lean resources, so
client intervention drains business-as-usual staff — raising stress and risking
losses through compromised service and quality. Mahere uses a five-step method
to recover projects that have lost their way."
Five numbered steps (self-contained headings):
1 — Assess the facts. Identify the key project difficulties.
2 — Plan the rescue. Address root causes; target the shortest controlled path
    to reduced completion risk.
3 — Execute the plan. Experienced project managers and subject-matter experts
    monitor and control the work against revised completion deliverables
    approved by the Principal.
4 — Manage the recovery. Risk analysis and reporting enable proactive
    correction and confidence the revised programme is being met.
5 — Close out. Lessons learned, business-case re-validation, and a customised
    improvement plan for your team's next project.
CTA: "If your project is drifting, an assessment will tell you exactly where it
stands." [Contact →]

### Contact (/contact)
H1: "Start with a conversation."
"Tell us about the project. We reply within one working day."
No physical address or PO box anywhere on the site — contact is form, email
and LinkedIn only. Company line: "Mahere Projects Ltd · Dunedin, New Zealand"
LinkedIn link (label, not raw URL): https://www.linkedin.com/company/mahere-limited
Contact form: static HTML form posting to Web3Forms (free, no backend) —
fields: name, organisation, project type, message. Use a placeholder access
key with a clear TODO comment; I'll create the Web3Forms key against the
Mahere inbox (office@mahereprojects.nz — CONFIRM ADDRESS BEFORE BUILD) and
paste it in. Include a mailto link as fallback beside the form.
Line under contact action: "Mahere will not on-sell or share your contact details."

## Projects content collection
src/content/projects/*.md with frontmatter: title, ref, sector, year, blurb, image, featured.
Seed with these four (image: use a neutral placeholder path; real photos come later):
1. Rototuna School, Hamilton — Education · Contract management and mediation.
2. Heritage demolition, Dunedin — Contract and communications management.
3. New Doha International Airport, Qatar — PMO, design, tender, procurement,
   quality, commissioning and handover.
4. Sidra Women's Hospital, Qatar — Construction delivery and project controls
   through cladding, fit-out and commissioning.

## SEO
- Title pattern: "{Page} — Mahere Projects" (home: "Mahere Projects — Sharper
  Project Management, Dunedin NZ")
- Meta description per page; home: "Project planning and construction
  management consultancy in Dunedin, New Zealand. Commercial and
  public sector delivery, and recovery of troubled projects."
- Open Graph tags, canonical URLs for mahereprojects.nz, sitemap, robots.txt
- 301-safe: keep URL paths /project-management, /project-recovery; old
  /contact-us should redirect to /contact (Cloudflare Pages `_redirects` file
  in /public)

## Deliverables
1. Working Astro project, `npm run dev` clean, `npm run build` clean
2. Git repo initialised with sensible .gitignore, ready to push to GitHub
3. README with: local dev steps; connecting the repo to Cloudflare Pages
   (build `npm run build`, output `dist`); adding mahereprojects.nz as the
   custom domain in Pages; the full DNS cutover checklist for this specific
   setup — domain registered at 1st Domains (NZ), DNS currently pointing to
   Squarespace: (a) add mahereprojects.nz to Cloudflare free plan, let it
   import existing records, (b) at 1st Domains change the NAME SERVER
   DELEGATION (not individual DNS records) to the two Cloudflare nameservers,
   (c) wait for Cloudflare to show Active — Squarespace site stays live
   throughout, (d) on launch, add the custom domain in Cloudflare Pages and
   accept the record changes it proposes for apex + www, (e) verify the new
   site serves, keep Squarespace for one week as fallback, then cancel the
   Squarespace subscription (domain at 1st Domains is unaffected); and the
   one-line "how to edit content later" guide for a non-technical owner
   (edit markdown on GitHub web → auto-deploys)
4. Lighthouse-minded: no render-blocking beyond fonts, images lazy-loaded,
   total page weight small

Build the whole thing, then walk me through what you made.
