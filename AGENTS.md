<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: rishabhpahwa.com portfolio

Bold, animated, dark-first personal portfolio. **Static export** (`output: "export"`) —
no server runtime, so no API routes / server actions / dynamic rendering. Build → `out/`.

## Conventions

- **Content is data-driven.** Edit `data/site.ts`, `data/projects.ts`, `data/experience.ts`,
  `data/skills.ts` — not the section components. Blog posts are MDX in `content/blog/`.
- **Theme/design tokens** live as CSS variables in `app/globals.css` (Tailwind v4 `@theme`).
  Dark-first via a `.dark` class set by an inline no-FOUC script in `app/layout.tsx`.
- **Animation:** the `motion` package (`motion/react`). Reusable wrappers in `components/motion/`
  (`Reveal`, `StaggerContainer`). Always gate motion on `useReducedMotion()`.
- **Icons:** `lucide-react` for UI glyphs. lucide removed brand icons — GitHub/LinkedIn/X
  are inline SVGs in `components/ui/brand-icons.tsx`.
- **Static-export gotchas:** images use `unoptimized`; route `params` are awaited Promises;
  `generateStaticParams` must enumerate all dynamic routes (`dynamicParams = false`).

## Verify

`npm run build` (must export to `out/` with no server-only features) then `npm run serve`.

