# rishabhpahwa.com

Personal portfolio for **Rishabh Pahwa** — a bold, animated, dark-first site built with
Next.js and exported as a fully static site.

## Stack

- **Next.js 16** (App Router) — static export (`output: "export"` → `out/`)
- **TypeScript**
- **Tailwind CSS v4** (CSS-based theme in `app/globals.css`)
- **Motion** (Framer Motion) — scroll reveals, animated hero, magnetic buttons
- **MDX** blog via `next-mdx-remote` + `gray-matter`
- **lucide-react** for icons (brand glyphs are inline SVGs in `components/ui/brand-icons.tsx`)

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to ./out
npm run serve        # preview the built ./out locally
```

## Editing content

All content is data-driven — no need to touch components for routine updates:

| What | Where |
| --- | --- |
| Name, role, tagline, bio, email, socials, resume path | `data/site.ts` |
| Projects | `data/projects.ts` |
| Work / education timeline | `data/experience.ts` |
| Skills (grouped) | `data/skills.ts` |
| Blog posts | `content/blog/*.mdx` (frontmatter: `title`, `date`, `excerpt`, `tags`) |
| Colors / gradient / fonts | `app/globals.css` (CSS variables) |

### Add a blog post

Drop a new `.mdx` file in `content/blog/`. It's picked up automatically and pre-rendered.

```mdx
---
title: "My Post Title"
date: "2026-06-15"
excerpt: "One-line summary for the blog index."
tags: ["Engineering"]
---

Write **MDX** here.
```

## Before going live — TODO

- [ ] Replace `public/resume.pdf` with your real resume.
- [ ] Confirm email + social handles in `data/site.ts` (GitHub handle is a placeholder).
- [ ] Verify dates/companies in `data/experience.ts`.
- [ ] (Optional) Add a real profile photo / project screenshots and wire them in.

## Deploy

The build produces a static `out/` directory — host it anywhere static.

### Cloudflare Pages (recommended)

1. Push this repo to GitHub.
2. Cloudflare Pages → Create project → connect the repo.
3. Build command: `npm run build` · Build output directory: `out`.
4. Add custom domain `rishabhpahwa.com` in the Pages project (Cloudflare manages DNS).

### GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`:

1. Repo → Settings → Pages → Source: **GitHub Actions**.
2. Push to `main` — the workflow builds and deploys `out/` automatically.
3. `public/CNAME` (`rishabhpahwa.com`) and `public/.nojekyll` are already in place for the
   custom domain. Point the domain's DNS at GitHub Pages
   (`A`/`AAAA` to GitHub's IPs, or a `CNAME` to `<user>.github.io`).

> The custom domain has no `basePath`, so it works at the site root on either host.
