# Claude Context – Landing Page (Astro)

## Goal

Build a **simple, high-conversion static landing page** for a B2B SaaS MVP.

This page is **not marketing at scale** and **not SEO-driven**.
Its purpose is to:
- Clearly explain the problem
- Show the product exists
- Convince the *right* user to start a conversation or try the tool

Target outcome:
A visitor should understand the value in **under 30 seconds** and know exactly what to do next.

---

## Target Audience

Primary:
- IT Managers / IT Leads
- Small to mid-sized companies (5–200 employees)
- Teams managing multiple SaaS tools, contracts, and renewals

They are:
- Busy
- Skeptical of buzzwords
- Tired of spreadsheets and bloated ITAM tools

Avoid language aimed at:
- Enterprises
- Procurement-heavy organizations
- Non-technical founders

---

## Core Problem to Communicate

Users struggle with:
- SaaS contracts scattered across inboxes and spreadsheets
- Missing or surprise renewals
- No clear owner per vendor
- Poor visibility into active contracts

They want:
- One place to track vendors and contracts
- Clear renewal dates
- Minimal setup
- No enterprise bloat

---

## Key Messaging Principles

- Be **boring, clear, and specific**
- Avoid buzzwords (AI, next-gen, revolutionary, etc.)
- Do not oversell features
- Focus on outcomes, not implementation details

Good:
> “Track SaaS contracts and renewal dates in one place.”

Bad:
> “An AI-powered contract intelligence platform.”

---

## Page Structure (Required)

### 1. Hero Section (Above the Fold)

Must include:
- One clear headline (what + for whom)
- One short subheading (pain it removes)
- One primary CTA

Example tone (not necessarily final copy):
- Headline: Track SaaS contracts and renewals without spreadsheets
- Subheading: Built for small IT teams who want visibility without enterprise ITAM complexity
- CTA: Request early access / Join the beta

---

### 2. Problem → Outcome Section

Show understanding of the user's reality.

Problems (bullets):
- Renewal dates spread across emails and Excel
- No clear owner per vendor
- Missed renewals and wasted licenses

Outcomes (bullets):
- One place for all contracts
- Clear ownership
- Renewal reminders before it’s too late

Keep concise.

---

### 3. Product Proof

Show that the product exists.

- 1–3 screenshots or mockups
- Focus on:
  - Vendor list
  - Contract upload
  - Renewal date visibility

No need for full feature tours.

---

### 4. Who It’s For / Not For

Explicitly qualify users.

For example:
- For IT managers at small/mid-sized companies
- Not for enterprises with complex ITAM or procurement workflows

This builds trust and filters bad leads.

---

### 5. Call to Action (Single)

Only one primary CTA on the page.

Preferred:
- “Request early access”
- “Join the beta”
- “Try it with your first vendors”

CTA should lead to:
- Email capture
- Simple form
- Or direct contact

No pricing tables at this stage.

---

## Design & Styling Guidelines

- Clean, neutral, professional
- Use shadcn/ui style conventions (even if not using shadcn directly)
- Avoid loud colors or heavy branding
- Prioritize readability over aesthetics

Layout:
- Plenty of whitespace
- Clear visual hierarchy
- Mobile-friendly

---

## Technical Constraints

- Static Astro page only
- No backend logic required
- No authentication
- No analytics beyond basic (optional)
- Fast load time

Keep implementation simple and maintainable.

---

## What NOT to Build

- No blog
- No SEO optimization
- No complex animations
- No feature comparison tables
- No roadmap or future promises

This page should feel honest and focused.

---

## Tone Summary

If the page were a person, it should feel:
- Calm
- Practical
- Trustworthy
- Slightly opinionated
- Not salesy

The goal is clarity, not hype.
