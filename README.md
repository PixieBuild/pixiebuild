# PixieBuild

The website for PixieBuild — a web studio building landing pages, company
websites and custom web applications.

Live at [pixiebuild.com](https://www.pixiebuild.com).

## Stack

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind v4 ·
shadcn/ui on Base UI · npm

Dark mode is class-based through `next-themes`, defaulting to `system`.

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Then open [localhost:3000](http://localhost:3000).

The contact form posts to `/api/contact` and sends through Resend, so it needs
the three variables in `.env.example` filled in. Everything else runs without
them.

## Commands

```bash
npm run dev          # dev server
npm run build        # production build
npm run lint         # eslint
npx tsc --noEmit     # typecheck — there is no script for this
```

## Structure

```
src/
├── app/              routes, layouts, and metadata files
│   └── <route>/
│       └── _components/   UI used only by this route
├── assets/           files imported into code — SVGs become components via SVGR
├── components/       shared components
│   └── ui/           shadcn primitives
└── lib/              utilities and business logic
public/               files served by URL
```

## Design language

`/styleguide` is the reference for colour, type, spacing, radius, shadow and
motion. It reads its tokens straight out of `globals.css`, so it cannot drift
from what the site actually uses. It is `noindex`, and worth reading before
writing any UI.

## Conventions

[`AGENTS.md`](AGENTS.md) holds them — component layout, styling rules, naming,
and what to ask about before changing. It applies to people as much as to
agents.
