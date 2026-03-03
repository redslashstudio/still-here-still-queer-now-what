# CLAUDE.md — Still Here! Still Queer! Now What?

## Project Purpose
Demo website for Dr Paul Taylor-Pitt's forthcoming book *Still Here! Still Queer! Now What?*
Built to demonstrate what the site could be: a pre-publication audience-building platform 
with strong editorial identity, email capture, and a blog designed to grow readership before 
the book lands in Autumn 2026.

This is a static HTML/CSS/JS site (no framework), designed to be clear to a non-developer 
author and deployable via GitHub Pages.

## Tone of Voice — Complete

The tone-of-voice reference document has been produced at `/docs/tone-of-voice.md`,
compiled from the full 326-page book proof and a podcast transcript. It covers voice
characteristics, emotional register, sentence rhythm, recurring themes, language choices,
exemplar lines, and practical guidance for writing site copy in Paul's voice.

All copy and content decisions should reference this document.

## Author & Voice

Dr Paul Taylor-Pitt is a coach, mentor, and development practitioner. His voice is warm and
direct — he speaks *to* the reader, not about them. He's intellectually grounded but never
academic, and draws on psychology, philosophy, and queer cultural history without being heavy.
The book is celebratory in tone — this is an invitation, not a grief document. He uses "we"
and "us" naturally, positioning himself as part of the community he's writing for.

Reference tone document: `/docs/tone-of-voice.md`

## Target Reader
Mid-life LGBTQ+ people (roughly 40–65) who:
- Have survived, but feel uncertain about what thriving looks like at this stage
- May feel that most queer culture is aimed at younger people
- Are looking for permission and practical tools, not just validation

## Site Architecture

### Pages
1. **Home** — Hero (left-aligned, pink) → The Project (centred, three-part arc with hand-drawn icons) → The Voices (dark, carousel cycling single quotes with crossfade) → The Book (transparent cover PNG, pink CTA) → Endorsements (three quotes in a row, no card styling) → The Conversation So Far (three evenly-aligned journal cards) → Email capture (pink band). Concrete first, substance builds.
2. **About Paul** — Asymmetric two-column layout (`.about-hero`): text left, sticky portrait right at desktop; portrait above text on mobile. "How this book happened" narrative, credentials woven naturally
3. **The Book** — Two-column intro (`.book-intro`): text left, cover placeholder right. Emotional hook (dedication), reader-centred part descriptions, "Voices from the book" quotes, endorsements
4. **The Voices** (`/blog/`) — Unified editorial hub with four content types (see below). Renamed from "Journal" to connect to the book's 51 interviewee voices.
5. **Podcast** — Curated "Start here" episodes, browse by theme, link to The Voices
6. **Events / Tour** — Speaking engagements and live dates (placeholder until dates confirmed)
7. **Contact** — Press, rights, coaching, social links

### The Voices Content Types
The Voices is one section with visually distinct content types, differentiated by coloured category labels:

| Type | CSS class | What it is |
|------|-----------|------------|
| **Voice** | `category-label--voice` | One interviewee quote + Paul's reflection + closing question (~400 words) |
| **Reflection** | `category-label--reflection` | Paul's longer-form essays — thematic, cultural, personal (~800–1200 words) |
| **Conversation** | `category-label--conversation` | A podcast moment edited for reading, with listen CTA (~500–700 words) |
| **Reading** | `category-label--reading` | Curated lists — books, podcasts, resources (variable) |

### Key Components
- **Email capture** (homepage, The Voices, book, events): "A fortnightly letter about being queer, being middle-aged, and being done with small thoughts"
- **Endorsement display**: Clean row layout — pink decorative quote mark, quote in Fraunces, name, credential/role. No card styling (no background, shadow, or padding)
- **Post template**: Category label + date, title, body in `.text-container`, author bio strip, "More from The Voices" cards, email capture

## Content Strategy

**Principle: "Give away the questions, sell the answers."**

Content that CAN be shared freely:
- Interviewee quotes (with name and age)
- Themes and questions the book explores
- Cultural commentary (philosophy, history, queer culture)
- Paul's personal stories and reflections
- Podcast conversation highlights

Content that MUST be protected (never on the website):
- The Queer Wheel of Mid-Life (framework)
- The Queer Wholeness Method (framework)
- The Manifesto structure and exercises
- Any guided coaching exercises from the book

## Design Principles
- Typography-led — the writing is the product; let it breathe
- Warm but not saccharine; queer without being exclusively rainbow
- Mobile-first (target reader likely on phone)
- Accessible — high contrast, readable body copy, logical heading structure
- **Palette — Sand & Placard Pink**: warm sand background (`#f5f0e8`), hot pink primary (`#d6305e`), dark text (`#1a1818`), muted (`#7a6f5f`), white surface (`#ffffff`)
- **Typography**: Fraunces (headlines, pull-quotes — variable font with SOFT and WONK axes) + DM Sans (body, nav, UI) via Google Fonts. Fraunces is tuned per context using `font-variation-settings`: sharp/heavy/wonk-on for heroes and provocations, soft/light/wonk-off for pull-quotes and intimate text.
- **Texture & rhythm**: Paper grain overlay on body (SVG feTurbulence), dark footer and dark section variants for light/dark rhythm, pull-quotes that break containment at desktop widths, closing-question boxes with placard rotation
- **Visual surprise**: Interrupt pull-quotes (`.pull-quote--interrupt`) break out of text container at oversized Fraunces type for key pivoting moments. Drop sentences (`.drop-sentence`) render short punchy lines at larger scale. Homepage voices carousel cycles single quotes with crossfade and large pink decorative quote mark. About page uses asymmetric two-column grid with sticky portrait.
- **Animation**: Warm, confident, unhurried. Hero entrance (`hero-arrive` keyframes, two-stage fade-in). Scroll reveals (`.reveal` class + IntersectionObserver, 600ms ease, 24px translateY, one-shot). Staggered children (`.reveal-stagger`, 150ms intervals). Full `prefers-reduced-motion: reduce` support — all motion disabled, everything visible immediately.
- **Sticky navigation**: Header is `position: sticky`. On homepage: transparent pink over hero, transitions to sand with shadow via `.is-scrolled` class (JS watches hero bottom edge). Interior pages: sand header throughout. Transition is 400ms ease.

## Homepage Hero
The hero is stripped to two lines with no punctuation — a billboard, not a product announcement:
- **h1:** "Come home to your whole self"
- **`.hero-turn`:** "To the person you were before *they* told you to be someone else"
- No book reference, no CTA button, no decorative elements
- Left-aligned at all breakpoints (`min-height: 60vh`, flexbox centred vertically)
- Two-stage entrance animation: h1 fades in first, turn line follows 400ms later
- The book introduction and CTA live in subsequent sections, not in the hero

## Homepage Structure
The homepage leads with an emotional hook, pivots quickly to substance, then builds toward action:

1. **Hero** — "Come home to your whole self." Pink band, left-aligned, two-stage entrance animation. 60vh.
2. **The Project** (`.homepage-project`) — "THE PROJECT" label in pink, description copy centred in `.text-container`, then `.homepage-arc` three-column grid: hand-drawn speech bubble icons (Still Here! / Still Queer! / Now What?) centred above headings and descriptions for the book's three-part arc. Sand background.
3. **The Voices** (`.homepage-voices-grid`, `.section--dark`) — "51 PEOPLE. 51 LIVES. THINGS SAID OUT LOUD THAT YOU'VE BEEN THINKING QUIETLY." single label line. `.voices-carousel` cycling 6 quotes one at a time with 600ms crossfade, large pink decorative quote mark, dot navigation, auto-advance every 6s. Quotes: Darren → Craig → Christianne → Jeremy → Keith → Dave. Dark background.
4. **The Book** (`.homepage-book`) — "THE BOOK" label, title, lead, two description paragraphs, publication meta, pink "More about the book" CTA. Transparent book cover PNG (3D mockup with built-in shadow) sits on sand with no container styling. Sand background.
5. **Endorsements** — "WHAT PEOPLE ARE SAYING" label. Three endorsements in a row: pink decorative quote mark, quote in Fraunces, name, credential/role. No card styling. Sand.
6. **The Conversation So Far** (`.homepage-journal`) — Three journal teaser cards, evenly aligned (no stagger). Category labels pluralised: Reflections, Voices, Conversations. Sand.
7. **Email Capture** — Pink band, newsletter signup.
8. **Footer** — Dark.

**Dark/light rhythm:** PINK → SAND → DARK → SAND → SAND → SAND → PINK → DARK

## Existing Assets
- **Author portrait**: `/assets/images/Dr-Paul-Taylor-Pitt-Portrait.jpeg` — used on the About page in the asymmetric two-column layout
- **Author avatar**: `/assets/images/PTP-avatar.jpeg` — cropped square version used in author-bio strips on all journal posts
- **Arc icons**: `/assets/Icons/still-here-icon.png`, `still-queer-icon.png`, `now-what-icon.png` — hand-drawn speech bubble icons (800x800 transparent PNGs) used in the homepage three-part arc grid
- **Endorsements**: Joseph Galliano-Doig MBE (Queer Britain), Layla McCay (*Breaking The
  Rainbow Ceiling*), Damian Barr (*The Two Roberts*)
- **Podcast**: *Still Here! Still Queer! Now What?* — live on Apple and Spotify
- **Literary Agent**: Abi Fellows, DHH Literary Agency
- **ISBN**: 9781837961481
- **Book cover**: `/assets/images/book-cover.png` — Transparent PNG, 3D mockup with built-in shadow. Used on homepage in `.book-cover-placeholder` (no container styling needed). Book page still uses text placeholder pending swap.

## Reference Documents

| Document | Path | Purpose |
|----------|------|---------|
| Tone of Voice | `/docs/tone-of-voice.md` | How Paul writes — voice, rhythm, register, language choices |
| Book Digest | `/docs/book-digest.md` | What the book covers — chapter summaries, themes, frameworks, quotable lines |
| Interviewee Reference | `/docs/interviewee-reference.md` | All 51 interviewee voices with quotes and chapter placements |
| Build Log | `/docs/build-log.md` | Running record of decisions, progress, and changes during the build |
| Design Analysis | `/docs/design-analysis.md` | Diagnostic review of the site's visual design — gaps identified, priorities, and improvement plan |
| Brief | `/docs/brief.md` | Original project brief |

## File Structure
```
/index.html
/about.html
/book.html
/blog/index.html              ← The Voices index
/blog/a-lost-generation.html  ← Voice post (Gareth, 46)
/blog/the-philosophers-who-hated-us.html  ← Reflection post
/blog/the-crush-you-didnt-know.html       ← Conversation post (Charlie)
/podcast.html
/events.html
/contact.html
/css/styles.css
/js/main.js
/docs/tone-of-voice.md
/docs/book-digest.md
/docs/interviewee-reference.md
/docs/build-log.md
/docs/design-analysis.md
/docs/brief.md
/assets/images/Dr-Paul-Taylor-Pitt-Portrait.jpeg  ← Author portrait (about page)
/assets/images/PTP-avatar.jpeg                    ← Author avatar (journal bio strips)
/assets/images/book-cover.png                     ← Book cover (transparent 3D mockup PNG)
/assets/Icons/still-here-icon.png                 ← Arc icon: Understanding
/assets/Icons/still-queer-icon.png                ← Arc icon: Reconnecting
/assets/Icons/now-what-icon.png                   ← Arc icon: Deciding
/assets/fonts/
```

## Path Convention
All HTML paths are **relative**, not absolute. This allows the site to be viewed via `file://`
protocol (opening HTML files directly from Finder) as well as served from any subdirectory.

- Root-level files: `href="css/styles.css"`, `href="about.html"`, `href="blog/"`
- Blog-level files: `href="../css/styles.css"`, `href="../about.html"`, `href="../index.html"`

## What Success Looks Like
A site that Paul could show his new publisher and say: "This is the platform I've already
built." One that demonstrates the book has an audience, a voice, and momentum — not just
a manuscript.
