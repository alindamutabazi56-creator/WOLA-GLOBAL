# WOLA Global Website

Production-grade Next.js website for Women Leaders of Afrika (WOLA), built as a premium, content-driven multi-page platform.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS + design tokens
- Framer Motion
- Sanity-ready schemas + seeded local content
- Server actions for contact/newsletter forms
- Vitest + Playwright smoke testing

## Setup
1. Install dependencies: `npm install`
2. Copy envs: `cp .env.example .env.local`
3. Run dev server: `npm run dev`
4. Open `http://localhost:3000`

## CMS workflow (Sanity)
1. Add Sanity credentials to `.env.local`.
2. Use schemas in `src/sanity/schemas`.
3. Connect or embed Sanity Studio (placeholder route at `/studio`).
4. Use `src/lib/seed.ts` as initial seed source for chapters, events, posts, people, and global settings.

## Content model overview
- `Chapter`
- `Event`
- `Post`
- `Person`
- `Global settings`

## Seeded starter content
- 3 chapters
- 4 events
- 6 blog posts (including 2 Female Spotlight)
- Team profiles and global settings

## Adding new content
- Add chapter/event/post entries in Sanity (recommended) or extend `src/lib/seed.ts`.
- New chapter route: `/chapters/[slug]`
- New event route: `/events/[slug]`
- New blog route: `/blog/[slug]`

## Testing
- Unit/component tests: `npm test`
- E2E smoke test: `npm run test:e2e`

## Deployment
- Vercel-ready defaults.
- Ensure environment variables from `.env.example` are set in deployment settings.
