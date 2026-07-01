# Ember & Oak — Restaurant Website

A modern, mobile-first restaurant landing page built with React (functional
components + hooks), Tailwind CSS v4, and Framer Motion.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion for scroll/entrance animations

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

Other scripts:

```bash
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Project Structure

```
src/
  components/
    layout/     # Navbar, Footer
    sections/   # Hero, About, MenuPreview, SpecialOffers, Gallery,
                # Testimonials, Reservation, Contact
    ui/         # Button, Container, SectionHeading, Media (image w/ fallback)
  data/         # menu.js, gallery.js, testimonials.js, offers.js
```

## Notes

- Dish, gallery, and avatar photos are referenced via Unsplash URLs as
  placeholders — swap the `image`/`avatar` fields in `src/data/*.js` for
  real photography before launch.
- The `Media` component gracefully falls back to a branded placeholder if
  an image URL fails to load, so the layout never breaks even without
  network access.
- The map in the Contact section is a stylized placeholder (no API key
  required) — replace with a real embed/API when you have real coordinates.
