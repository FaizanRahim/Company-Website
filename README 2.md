# NEXA Digital Agency — Animated Landing Page

Next.js 14 (App Router) + Tailwind CSS + Framer Motion recreation of the reference design (dark rounded hero card, glass navbar, glossy floating orbs, animated headline).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Stack / libraries used

- **next** — framework (App Router)
- **react / react-dom**
- **tailwindcss / postcss / autoprefixer** — styling
- **framer-motion** — entrance animations, floating orbs, hover/tap micro-interactions
- **lucide-react** — icons (LinkedIn, Facebook, Instagram, arrows)

## Structure

```
app/
  layout.tsx     -> root layout
  page.tsx        -> renders <Hero />
  globals.css     -> tailwind + custom glass/orb styles
components/
  Hero.tsx        -> the whole animated landing section
tailwind.config.ts -> custom color tokens (mint/ink/sand) + keyframes
```

## Notes

- The photographic background/orb from the reference is recreated with CSS gradients + a "glossy sphere" utility class (`.orb`) since no external images are bundled — swap in your own photography inside `Hero.tsx` if you have brand assets.
- Nav pill, headline lines, orbs, and the CTA button all animate in on load with staggered `framer-motion` variants; the orbs keep floating continuously.
