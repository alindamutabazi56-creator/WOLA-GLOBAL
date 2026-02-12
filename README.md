# WOLA Global Landing Page

Single-page Next.js landing hub for **WOLA Global**, designed to present chapters, core work, and chapter-by-chapter impact.

## Tech
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Lucide icons (already in project dependencies)

## Run locally
1. `npm run dev`
2. Open `http://localhost:3000`

## Where to edit content
- Landing page composition: `src/components/landing/home-page-client.tsx`
- Chapters, impact data, work cards, and network stats: `src/data/wola.ts`
- Root route metadata: `src/app/page.tsx`

## Reusable landing components
- `src/components/landing/navbar.tsx`
- `src/components/landing/button.tsx`
- `src/components/landing/card.tsx`
- `src/components/landing/section.tsx`
- `src/components/landing/chapter-card.tsx`
- `src/components/landing/impact-panel.tsx`
- `src/components/landing/footer.tsx`
