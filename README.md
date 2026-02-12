# WOLA Global Landing Page

Single-page Next.js landing hub for **WOLA Global**, designed to present chapters, core work, and chapter-by-chapter impact.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Lucide icons (already in project dependencies)

## Run commands (from `package.json`)
- Development: `npm run dev`
- Production build: `npm run build`
- Production server: `npm run start`

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
