# Ana Santos — Design

Recreation of the provided screenshot: cinematic, near-black Lisbon night with cyan accents.

## Color
- `--ink` #05090b — page background (near black, teal-tinted)
- `--night` #0a1417 — raised surfaces
- `--mist` #8fa3a8 — body / muted text
- `--bone` #e6ecec — primary text
- `--cyan` #22d3e6 — single accent (primary button, hovers, small rules)
- Borders: white at 10–14% opacity

## Typography
- Display: Instrument Serif (logo, headlines, italic accents)
- Body/UI: Manrope 400/500/600
- Headlines large, tight leading; body 17–18px, line-height 1.6

## Layout
- Full-bleed hero image with left→right and bottom→top dark gradients, content in left column
- Minimal top nav: serif wordmark left, three links right
- Works: asymmetric masonry-like grid with offset columns, captions in small caps
- Generous negative space; thin 1px rules; square-ish corners (4px)

## Motion
- Staggered fade/rise on hero load; slow ken-burns on hero image
- Scroll reveals for sections (Motion `whileInView`), subtle image zoom on hover
