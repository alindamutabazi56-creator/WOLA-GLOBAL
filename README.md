# WOLA Global Website (Next.js + TypeScript)

Production-ready multi-page website for Women Leaders of Afrika (WOLA), built with App Router, Tailwind CSS, Framer Motion-ready components, and a CMS-compatible content model.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS design tokens
- Framer Motion
- Zod validation + anti-spam + in-memory rate limiting
- Vitest unit tests + Playwright e2e smoke test
- Sanity schema definitions + local seeded content fallback

## Quick start
1. Copy `.env.example` to `.env.local`
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`
4. Build: `npm run build`

## Editing content (non-technical)
For immediate editing, update `src/data/content.ts` and `src/data/copy-deck.json`.

For production CMS workflow, connect Sanity:
1. Create a Sanity project and dataset.
2. Set `SANITY_*` env vars.
3. Use schemas in `sanity/schemas`.
4. Wire client queries in `src/lib/cms.ts` (currently using seeded fallback).

## Seeded data included
- Chapters: 3
- Events: 4
- Posts: 6 (including 2 Female Spotlight)
- Team members: 4

## Adding a new chapter/event/post
- Add content object in `src/data/content.ts`
- Ensure `slug` is unique
- Add related references (`chapterSlug`, `authorId`, etc.)

## Forms
- Contact: `/contact`
- Newsletter: homepage footer section
- Start chapter application: `/chapters`

All forms include honeypot fields and per-IP in-memory rate limiting.

## Accessibility and SEO
- Semantic headings and landmarks
- Focus-visible ring styles
- OpenGraph/Twitter metadata helper (`src/lib/seo.ts`)
- JSON-LD for organisation, events, and articles
