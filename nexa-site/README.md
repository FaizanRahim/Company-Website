# Lumen — IT Company Website (long, animated, 6 pages)

Next.js 14 + Tailwind CSS + Framer Motion. Full-length, heavily
animated IT company website.

## Run karne ka tareeqa

```bash
npm install
npm run dev
```

`http://localhost:3000` browser me kholein.

## Pages & sections

| Route        | Sections                                                                 |
|--------------|---------------------------------------------------------------------------|
| `/`          | Hero, client marquee, animated stats counters, 6 services, 4-step process, testimonials, tech stack, FAQ, CTA |
| `/services`  | 6 detailed services, industries marquee, comparison table, FAQ, CTA     |
| `/projects`  | Filterable portfolio (9 projects, category tabs with animated transitions) |
| `/about`     | Story, animated stats, timeline, values, 6-person team grid, CTA        |
| `/pricing`   | 3 plans, monthly/yearly toggle, FAQ                                     |
| `/contact`   | Working form (validation + submit states), map placeholder, socials, FAQ |

## Animation features

- Scroll-triggered reveals on every section (`whileInView`)
- Animated number counters (stats sections)
- Infinite scrolling marquee (clients, industries)
- Staggered card/list entrances
- Hover lift + border-glow on cards
- Floating/drifting background orbs
- Animated FAQ accordions
- Filter transitions on the projects grid (`AnimatePresence layout`)
- Sticky glass navbar with active-route highlighting and animated mobile menu

## Contact form

Client-side validation + loading/success states are wired up. To
actually receive submissions, connect `handleSubmit` in
`app/contact/page.tsx` to Formspree, Resend, or your own API route —
see comments in that file.

## Customize

- Copy/company name: edit each page's `.tsx` directly
- Colors: `tailwind.config.ts` (`sage`, `ink`, `panel`, `mist`)
- Add a page: create `app/your-page/page.tsx`, then add it to the
  `links` array in `components/Navbar.tsx`
