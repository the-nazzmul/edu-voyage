# EduVoyage

Marketing site for **EduVoyage**, a Dhaka-based study abroad consultancy. The experience is a single scroll-driven page: hero, story and stats, services, process timeline, destinations, social proof, FAQ, and contact—with a fixed navbar, smooth in-page navigation, and responsive layout.

**Live site:** [edu-voyage-bd.vercel.app](https://edu-voyage-bd.vercel.app/)

![Hero preview of the EduVoyage website](public/edu-voyage-screenshot.png)

## Highlights

- **Next.js (App Router)** with React and TypeScript  
- **Tailwind CSS v4** for styling and design tokens  
- **SEO**: metadata (Open Graph & Twitter cards), `meta-image.jpg` for social previews, `robots.txt`, `sitemap.xml`, and JSON-LD (`EducationalOrganization`)  
- **Accessible, mobile-first** navigation with scroll-based active states  

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Environment

For correct absolute URLs in production (Open Graph, canonical links, sitemap, and structured data), set:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Full origin of the deployed site (no trailing slash), e.g. `https://edu-voyage-bd.vercel.app` |

On [Vercel](https://vercel.com), `VERCEL_URL` is used automatically when this variable is unset; defining `NEXT_PUBLIC_SITE_URL` to your canonical URL (such as the [production deployment](https://edu-voyage-bd.vercel.app/)) is still recommended for stable Open Graph and sitemap links.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | ESLint |
| `npm run stitch-reference` | Helper script for design reference assets |

## Project layout

```
src/
  app/           # App Router: layout, page, globals, robots, sitemap
  components/
    eduvoyage/   # Section components, header, footer, icons
  lib/           # Shared utilities (e.g. site URL for SEO)
public/          # Static assets: logos, hero imagery, meta-image.jpg
```

## Assets

- **`public/meta-image.jpg`** — Default social sharing image (also referenced in metadata).  
- **`public/edu-voyage-screenshot.png`** — README hero preview.  

Replace copy, contact details, and map embed coordinates in the relevant section components to match your live business information.

## License

Private / all rights reserved unless otherwise specified by the project owner.
