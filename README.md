# Women Leaders of Afrika (WOLA) website

Production-grade multi-page Next.js App Router website for WOLA.

## Stack
- Next.js + TypeScript + Tailwind CSS
- Framer Motion (available for premium motion patterns)
- Content model stored in editable data module (`src/content/data.ts`) and copy deck JSON (`content/copy-deck.json`)
- Server Actions for contact/newsletter with honeypot + in-memory rate limit
- Vitest component test + Playwright smoke e2e

## Quick start
1. `npm install`
2. `cp .env.example .env.local`
3. `npm run dev`
4. Open `http://localhost:3000`

## Content management
This implementation uses a code-managed CMS layer designed for non-technical editor handoff through structured fields.
- Global settings: `src/content/data.ts` → `settings`
- Chapters: `src/content/data.ts` → `chapters`
- Events: `src/content/data.ts` → `events`
- Blog posts: `src/content/data.ts` → `posts`
- Team members: `src/content/data.ts` → `people`
- Copy deck snippets: `content/copy-deck.json`

## Add a new chapter
- Add an object to `chapters` with required fields: `name`, `university`, `country`, `city`, `status`, `description`, contacts, socials, leaders, initiatives, heroImage.

## Add a new event
- Add an object to `events` with required fields: `title`, `slug`, date/time, location, description, RSVP URL, tags, and chapter reference.

## Add a new post
- Add an object to `posts` including category (`Female Spotlight`, `Society Updates`, `Thought Pieces`, `Events Recaps`) and publish date.

## Commands
- `npm run lint`
- `npm run test`
- `npm run test:e2e`
- `npm run build`
