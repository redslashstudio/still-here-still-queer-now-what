# Design Analysis
## *Still Here! Still Queer! Now What?* — Site Review & Improvement Plan

**Date:** 2026-03-02
**Context:** After the initial build (scaffold, content population, boldness pass), the site felt structurally sound and editorially strong but visually flat. This document captures the diagnostic analysis and outlines what needs to change.

---

## The Core Problem

The content is doing all the emotional heavy lifting. The design is a well-mannered container rather than an active participant in the communication.

The site's visual temperature doesn't match its emotional temperature. The writing is warm, defiant, intellectually sharp, and occasionally profane. The design is polite and editorial. A visitor should *feel* something from the design before they read a single word — and right now, they don't.

---

## What's Working

These elements hold up and should be preserved:

- **Content strategy** — "Give away the questions, sell the answers" creates a natural flywheel. Each journal post surfaces a theme, the reader recognises themselves, the book promises tools, the newsletter keeps the conversation going.
- **Journal architecture** — One section, four content types (Voice, Reflection, Conversation, Reading) with coloured category labels. Provides variety without fragmentation.
- **Writing quality** — The journal posts are production-quality and convincingly in Paul's voice. The tone-of-voice extraction process worked.
- **Page structure** — Homepage flow (hero → voice → provocation → book → journal → endorsements → email) is sound. Interior pages are clean and navigable.
- **Palette concept** — Sand & Placard Pink is the right idea. The pink carries protest-placard energy from the book cover; the sand grounds it in warmth.
- **Content protection** — Clear boundary between what's shareable (themes, questions, quotes, cultural commentary) and what's protected (frameworks, exercises, coaching tools).

---

## Five Gaps Identified

### 1. Typography lacks personality

**Diagnosis:** DM Serif Display is the Google Fonts default "I want something literary" choice. It's pleasant but has no distinctive character — you'll find it on food blogs, lifestyle magazines, and a thousand book sites. It communicates "literary" without communicating *what kind* of literary. For a book whose voice ranges from tender to defiant within a single paragraph, the typeface needs to do the same.

**What's needed:** A display face with genuine personality. Something that could work on a protest placard *and* at the top of a love letter. A typeface that participates in the communication rather than simply containing it.

**Resolution:** Fraunces (variable font with SOFT and WONK axes) — see build log entry for full rationale. The variable axes allow the typeface to shift register per context: sharp and heavy for heroes, soft and warm for pull-quotes, matching the book's own tonal range.

**Status:** Resolved.

---

### 2. Everything is a clean box

**Diagnosis:** Every card, section, and element is a precise rectangle with precise edges. The only organic element on the entire site is a 120px wavy SVG in the hero. Paul's voice is full of em-dash pivots, parenthetical asides, imperfection. The book features a hand-drawn Queer Wheel illustration. The design has none of that human quality — it reads as machine-made, template-generated, impersonal.

**What's needed:** Visual texture and irregularity. Not decoration for its own sake, but signals that a person made this. Possibilities:
- Extend the hand-drawn SVG vocabulary (dividers, section markers, decorative elements inspired by the Queer Wheel's organic quality)
- Introduce subtle texture in backgrounds (paper grain, noise)
- Break the grid in key moments — pull-quotes that aren't contained, type that bleeds, asymmetric layouts
- Consider whether the Queer Wheel illustration itself could appear (open question for Paul — the illustration without the book's guidance may not give away the method)

**Status:** Resolved. The following changes address this gap:
- **Paper grain texture** on the body background (SVG `feTurbulence` noise layer) — the entire site now feels tactile rather than flat digital
- **Journal cards** — 1px polite borders removed, replaced by subtle shadow lift and bolder 5px category top-bars
- **Author bio** — mechanical border-top/bottom lines removed
- **Closing question boxes** — slight rotation (`-0.75deg`) and drop shadow give protest-placard physicality
- **Pull-quotes and voice-quotes** break out of their text container on desktop (negative left margin) so the border-left extends beyond the body text column

Note: Hand-drawn SVG dividers between sections were tried and removed — they read as decoration rather than texture.

---

### 3. The sand background is warm but safe

**Diagnosis:** The palette concept is right, but the execution lives entirely in the "respectable editorial" zone. This is a book with "queer" in the title and "fuck" in the text. The warmth is good, but there's no friction anywhere. The site feels like it's been designed for a book club, not a movement.

**What's needed:** More contrast in mood. The dark provocation section on the homepage is the only moment where the design has any edge — and it's the strongest section, which is telling. Consider:
- Whether the sand needs to be warmer, cooler, or paired with a surface colour that creates more tension
- More use of the dark palette as a counterpoint (not just one section)
- Whether an accent colour could add another dimension (without going full rainbow)
- Bolder use of pink — not just as an accent but as a surface in more places

**Status:** Resolved. The following changes address this gap:
- **Dark footer** on every page — `var(--color-dark)` background with light text, replacing the sand-on-sand footer with thin border. Every page now ends with weight and contrast.
- **Dark "Voices from the book" section** on book.html — the six interviewee quotes now sit in a full-bleed dark gallery, creating dramatic light/dark rhythm on the book page
- **Reusable `.section--dark` class** added for future dark sections
- The dark/light rhythm across pages now matches the homepage's existing provocation section rather than being an isolated moment

---

### 4. No visual surprise

**Diagnosis:** The layout is predictable on every page. Centre-left, contained, controlled. Hero → section → section → cards → CTA. There's nothing asymmetric, nothing that makes you pause, nothing that breaks the rhythm the way Paul's writing constantly does.

**What's needed:** Moments of visual disruption that match the book's rhetorical devices:
- **The em-dash pivot** — a section that starts one way and turns. Could be a layout that shifts mid-scroll, or a quote that breaks out of its container.
- **The parenthetical aside** — secondary content that's visually treated as a margin note or aside rather than a full-width block.
- **Scale shifts** — a word or phrase at an unexpectedly large size amid running text, the way Paul drops a short punchy sentence after a long flowing one.
- **Oversized type moments** — a pull-quote that takes up 80% of the viewport, not 40%.

**Status:** Resolved. The following changes address this gap:
- **Interrupt pull-quotes** (`.pull-quote--interrupt`) — key pivoting moments ("What a Kant.", "And somewhere in that progress, we got skipped.") break out of the text container to span full width at oversized Fraunces type, creating dramatic pauses mid-article
- **Drop sentences** (`.drop-sentence`) — short punchy lines ("The answer, it turns out, is: nothing good.", "We are right here. And we have a few things to say.") render at larger scale in Fraunces, creating the typographic equivalent of Paul's em-dash pivots
- **Homepage journal card stagger** — the three-card grid offsets the middle card vertically on desktop, breaking the flat grid rhythm
- **About page asymmetric layout** — two-column grid at desktop (text + portrait), the first non-centred layout on the site, with sticky portrait positioning

---

### 5. No photography or imagery

**Diagnosis:** A book about 51 real people telling real stories, and the site is 100% text and flat colour. No portrait of Paul, no imagery that evokes the community, no visual warmth beyond colour. The author-bio avatar is a grey circle placeholder.

**What's needed:**
- A good portrait of Paul (warm, direct, not a corporate headshot — ideally something that reflects his personality)
- Possibly imagery for journal posts (though this needs care — stock photography would undermine authenticity)
- Consider whether interviewee photos are available or appropriate (consent/privacy considerations)
- Texture or illustrative elements as an alternative to photography

**Status:** Partially resolved. Image-ready layouts and designed placeholders are in place; awaiting actual photography from Paul:
- **Author bio avatar** — grey circle placeholder replaced with pink circle showing Paul's initials "PT" in Fraunces; ready for `<img>` swap
- **About page portrait** — large portrait-ratio placeholder (pink-to-sand gradient with "PTP" initials) positioned in an asymmetric two-column layout; becomes a real photo with a single `<img>` tag
- **Book page cover** — cover placeholder alongside the book intro text, showing title and "Autumn 2026"; ready for a real cover image
- **Homepage "51" watermark** — decorative oversized numeral behind the voice quote section, communicating the scale of the research visually without needing photography
- When Paul provides a portrait and/or book cover, each placeholder is designed for a one-line swap to a real image

---

## Priority Order

1. **Typography** — highest impact, single-variable change. **Done.**
2. **Visual texture / organic elements + palette contrast** (gaps 2 & 3) — addressed together: paper grain, hand-drawn SVG dividers, card restyling, closing-question placard rotation, pull-quote breakout, dark footer, dark voices section. **Done.**
3. **Visual surprise / layout disruption** (gap 4) — interrupt pull-quotes, drop sentences, card stagger, asymmetric about page layout. **Done.**
4. **Photography / imagery readiness** (gap 5) — image-ready layouts with designed placeholders (author portrait, book cover, "51" watermark). **Awaiting assets from Paul.** Placeholder-to-photo swaps are one-line changes.

---

## Relationship to Other Documents

- **Build log** (`/docs/build-log.md`) — records what was actually done and when. This document records the thinking.
- **Tone of voice** (`/docs/tone-of-voice.md`) — the editorial voice this design should match. Every design decision should be checkable against: "does this look like it sounds?"
- **Brief** (`/docs/brief.md`) — the original project scope. This analysis extends the brief's design section with more specific direction.
