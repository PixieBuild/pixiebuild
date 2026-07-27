<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# PixieBuild

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind v4 · shadcn/ui on Base UI · npm

Dark mode is class-based via `next-themes`, default `system`.

## Read first

Before making changes, inspect:

- the target file or component
- nearby files in the same feature
- `node_modules/next/dist/docs/` for the current Next.js version
- the local `src/components/ui/` implementation if the task touches UI

## Core rules

**Always**

- Make the smallest change that solves the task.
- Match the existing code style, even if you would write it differently.
- Touch only files that are required for the task.
- Prefer existing patterns over inventing new ones.
- Read the local source before using or changing a component.
- Run `npm run lint` before calling the task done.

**Ask first** — pause and present the options, your recommendation, and the tradeoff:

- editing anything in `src/components/ui/`
- extending a primitive that almost fits: new variant, or one-off override?
- introducing a pattern the codebase does not already use
- any decision that affects more than one feature
- adding a dependency
- deleting files
- changing `next.config.ts`, `tsconfig.json`, or `eslint.config.mjs`

**Never**

- hand-roll `<button className="...">` when a shadcn primitive exists
- recreate a shadcn primitive that already exists in `src/components/ui/`
- run `shadcn add` with `--overwrite`, `-y`, or `--yes`
- fetch raw component files manually instead of using the shadcn CLI
- create `tailwind.config.js`
- hoist a Tailwind class string into a `const` used once or twice
- add `useMemo`, `useCallback`, or `React.memo` for performance — `reactCompiler: true`
  is set in `next.config.ts` and handles memoization
- put `"use client"` in `page.tsx` or `layout.tsx`
- use `as any` or `as` to silence a type error
- commit secrets or `.env` files

## UI

Use shadcn/ui as the design system.

1. Check `src/components/ui/` before building any UI primitive. If it exists, use it.
2. Not installed? `npx shadcn@latest add <name>`. Never hand-write one.
3. Close but not exact? Override at the call site — props (`variant`, `size`, `asChild`)
   first, then `className` for layout and spacing only.
4. Still doesn't fit? Ask before changing the shared primitive.

`src/components/ui/` is ours to edit, but never unprompted — retuning `Button` restyles every
screen. When asked to, add a variant rather than changing defaults, and name the primitive you
touched in your summary. Use `npx shadcn diff <name>` to compare against upstream, never a
manual guess.

## Styling

- Use semantic tokens (`bg-background`, `text-foreground`), never raw values.
- No `#hex`, `rgb()`, `hsl()`, or `oklch()` in class names. Missing token → add it to `@theme`
  in `src/app/globals.css` first, then use it.
- Use `className` for layout and spacing; use props and variants for real component differences.

Class strings live in the JSX, not in variables. In order:

- Used once or twice → inline it. No `const`.
- Repeated across sibling markup → the repeated markup is the problem, not the class string.
  Loop over data so the class is written once.
- The same string needed in several places that one loop cannot cover → a `const` is fine.
- A component with real visual variants → `cva`, the way shadcn primitives do it.

## Components

Split by section, loop by repetition.

- One exported component per file. Keep the file focused on one UI responsibility.
- A distinct section — its own data, its own concern — gets its own file. A `Navbar` file
  that also declares `MobileMenu` and `UserMenu` is three concerns; split it.
- The same thing repeated is data, not a component. Map over an array.
- A tiny private helper may stay in the file if it is tightly coupled and used once.
- Repetition alone never justifies extraction. Extract when it has a clear name, a clear
  responsibility, or a second real caller.
- Unsure? Leave it inline.

Reference: shadcn's `dashboard-01` block — nine files, no `NavItem`; `nav-main.tsx` maps ~30
lines of JSX inline.

## Project structure

```
src/
├── app/              routes, layouts, and metadata files (icon, opengraph-image)
│   └── <route>/
│       └── _components/   UI used only by this route
├── assets/           files imported into code — SVGs become components via SVGR
├── components/       shared components
│   └── ui/           shadcn primitives — installed, not hand-written
├── lib/              utilities and business logic
└── types/            ambient .d.ts declarations
public/               files served by URL, referenced by path not import
```

- Add `src/hooks/` when the first shared hook appears; one `use-*.ts` per file.
- `lib/` stays flat until a domain earns a folder — group only when a topic has several files.
- An SVG belongs in `assets/` if code imports it, `public/` only if something fetches it by URL.
- Do not add a top-level folder under `src/` without asking.

## Naming

- Files are kebab-case: `coming-soon.tsx`, `theme-toggle.tsx`, `use-media-query.ts`.
- Components are PascalCase inside a kebab-case file — `ComingSoon` in `coming-soon.tsx`.
- Hooks are `use-*.ts`, matching the hook they export.

## Routing and client/server boundaries

- Server Components by default.
- `"use client"` only when the file needs hooks, state, browser APIs, or event handlers.
- Keep route files thin.
- Route-specific UI stays in `src/app/<route>/_components/`. Promote to `src/components/`
  only when a second route needs it.
- A client component gets its own file so `"use client"` does not pull its parent across the
  boundary. Keep client islands small and leaf-ward.

## Comments

- A comment states a constraint the code cannot. Never narrate the reasoning behind a value.
- Write for someone reading the file months from now, not for the person reviewing this change.
  No "changed to", no "this is better because", no design rationale.
- The test: if the comment were deleted, would something break or be reintroduced? If not,
  delete it.
- Worth keeping: why a value has a floor or ceiling, why a property lives in one place rather
  than another, why an obvious simplification would break something.

## Conventions

- Prefer named exports; default exports only where Next.js requires them.
- `@/` imports instead of long relative paths.
- `handle*` for event handlers.
- Avoid `any`.
- Prefer explicit code over clever code.
- Preserve existing public behaviour unless the task explicitly changes it.

## Commands

```bash
npm run dev          # dev server
npm run build        # production build
npm run lint         # eslint
npx tsc --noEmit     # typecheck (no script for this)
```

## Before finishing

- Confirm the task is done with the minimum necessary changes.
- Check that no unrelated files were modified.
- Run `npm run lint`.
- If the change touches types, also run `npx tsc --noEmit`.
