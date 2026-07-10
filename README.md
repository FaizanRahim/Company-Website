# Lumen — IT Company Website (long, animated, with images)

Next.js 14 + Tailwind CSS + Framer Motion. Full-length, animated IT
company website with placeholder photography throughout.

## Run karne ka tareeqa

```bash
npm install
npm run dev
```

`http://localhost:3000` browser me kholein.

## Pages & sections

| Route        | Sections                                                                 |
|--------------|---------------------------------------------------------------------------|
| `/`          | Hero (background photo), client marquee, animated stats, 6 services, process, testimonials (avatar photos), tech stack, FAQ, CTA |
| `/services`  | Hero with supporting photo, 6 detailed services, industries marquee, comparison table, FAQ |
| `/projects`  | 9 projects with real thumbnail photos, filterable by category            |
| `/about`     | Office photo, animated stats, timeline, founder spotlight (photo + quote), values, 6-person team grid (real headshots) |
| `/pricing`   | 3 plans, monthly/yearly toggle, FAQ                                     |
| `/contact`   | Working form, office location photo, socials, FAQ                       |

## About the images

All images are **placeholder/dummy photos** pulled live from two free
placeholder services, so nothing is stored in the project:

- **picsum.photos** — hero banners, project thumbnails, office photos
- **i.pravatar.cc** — team headshots and testimonial avatars

They're wired through `next/image` (see `images.remotePatterns` in
`next.config.js`). To swap in your real photos:

1. Drop your images into the `public/` folder (e.g. `public/team/ayesha.jpg`)
2. Replace the matching `src="https://picsum.photos/..."` or
   `i.pravatar.cc` URL with `"/team/ayesha.jpg"`
3. No other code changes needed — `next/image` handles local and
   remote sources the same way

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
