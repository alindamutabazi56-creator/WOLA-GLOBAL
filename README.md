# WOLA Global Landing Page

Single-page Next.js landing experience for **WOLA Global**, designed as a premium hub connecting chapters worldwide.

## Tech
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Lucide icons

## Run locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

## Edit core content
- Page layout and sections: `src/app/page.tsx`
- Chapter directory data: `chapters` array in `src/app/page.tsx`
- Impact-by-chapter data: `impactByChapter` array in `src/app/page.tsx`
- Reusable landing components:
  - `src/components/landing/navbar.tsx`
  - `src/components/landing/button.tsx`
  - `src/components/landing/card.tsx`
  - `src/components/landing/section.tsx`
  - `src/components/landing/chapter-card.tsx`
  - `src/components/landing/impact-panel.tsx`
  - `src/components/landing/footer.tsx`

## Checks
- Lint: `npm run lint`
- Unit tests: `npm test`
- Production build: `npm run build`
