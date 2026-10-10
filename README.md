# Trident Dental Clinic — website (Abuja)

Next.js 14 (App Router) · Tailwind CSS · Framer Motion · React Three Fiber (3D tooth hero)

Brand colours (from the logo): primary blue #0B4DA2 · deep navy #082C5E · ice blue #00AEEF · gold #C8A95B · background #F7FAFF

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` in production (SEO + sitemap).

## Edit content
Business info, services, reviews, blog posts, FAQs, packages, gallery and media paths all live in `lib/data.ts`.

## Add photos / videos
Drop files in `public/images` and `public/videos`, then list them in `gallery` / `media` in `lib/data.ts`.
Gallery categories: Reception & Lounge · Surgery & Equipment · Smile Results.

## Booking
Every Book button uses `wa()` in `lib/data.ts` → `https://wa.me/2347040848555?text=…`.

## Routes
/ · /services · /services/[slug] · /about · /contact · /gallery · /blog · /blog/[slug] · /appointment · /privacy
