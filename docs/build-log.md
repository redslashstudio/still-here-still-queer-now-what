# Build Log
## *Still Here! Still Queer! Now What?* — Site Build

This log tracks decisions, reflections and patterns as the site is built. It serves two purposes: documenting this project, and extracting a repeatable process for future author/book platform builds.

---

## Log

### 2026-03-01 — Tone-of-Voice Extraction

**What we did:** Read the full 326-page book proof and a podcast transcript. Produced `/docs/tone-of-voice.md` covering voice characteristics, emotional register, sentence rhythm, recurring themes, language choices, exemplar lines, and site copy guidance.

**Tools/dependencies installed:** `poppler` (brew), `python-docx` (pip) for PDF and docx extraction.

**Approach:** Structured reading passes across the proof — front matter, chapter samples from each part, final chapters — rather than reading cover to cover. Podcast transcript gave a spoken-voice comparison. This worked well: ~45 minutes to produce a usable reference document from a full-length manuscript.

**Decision:** Tone-of-voice extraction happens before any design or code. This anchors every subsequent decision in the author's actual voice rather than assumptions.

### 2026-03-01 — Book Digest & Interviewee Reference

**What we did:** Compiled two new reference documents from the full proof text:
- `/docs/book-digest.md` — chapter-by-chapter summaries, key themes, all coaching frameworks/tools, a quotable lines bank, Paul's book and podcast picks, book club questions (usable as blog prompts), and support resources.
- `/docs/interviewee-reference.md` — all 51 interviewee voices catalogued with name, age, chapter/section placement, and key quote phrase.

**Approach:** Parallel reading passes across all three parts of the book, then synthesis into a single searchable digest. Interviewees were located by grepping the attribution pattern (`– Name, age`) across the full proof, then reading context around each to capture quotes and chapter placement.

**Decision:** Interviewees were split into a standalone file rather than kept inline in the digest. This keeps the digest lean and gives the interviewee data its own structure — useful for potential site features (quote carousels, voice highlights, community-building content). Updated `CLAUDE.md` with a Reference Documents table pointing to all five docs.

**What we learned:** The book has a very consistent structure — every chapter opens with an interviewee quote, and the nine Queer Wheel segments each have a dedicated voice. The 51 interviewees span ages 40–60, with majority mid-40s to early 50s. Two names appear twice as different people (James 41/48, Mike 48/52). The book club questions double well as blog prompts.

### 2026-03-01 — Design Direction & Site Scaffold

**What we did:** Established the full design direction and scaffolded all seven pages.

**Typography:** DM Serif Display (headlines, pull-quotes, endorsements) + DM Sans (body, nav, UI). Both from Google Fonts, same design family. Chosen from four rendered pairings — user preferred the literary-but-approachable character of DM Serif over geometric sans options (Space Grotesk, Clash Display, Syne).

**Colour palette:** "Sand & Placard Pink" — warm sand background (#f5f0e8) with the book cover's hot pink (#d6305e) as primary. Dark text (#1a1818), muted (#7a6f5f), white surface (#ffffff). The pink carries protest-placard energy from the cover; the sand grounds it in warmth and readability. Pink hero band on homepage mirrors the cover's visual identity.

**Design approach:** Bold and expressive — the design makes a statement alongside the writing. Pink hero sections, strong pull-quotes in primary colour, generous whitespace, clear typographic hierarchy.

**Files created:**
- `/css/styles.css` — Full design system with CSS custom properties (palette, type scale at 1.25 ratio, 8px spacing scale, component patterns)
- `/js/main.js` — Mobile nav toggle, email form placeholder, aria-current nav
- `/index.html` — Homepage: hero, pull-quote, book intro, endorsements, email capture
- `/about.html` — Author bio page
- `/book.html` — Book description with three-part structure, endorsements, details
- `/blog/index.html` — Blog index (placeholder)
- `/podcast.html` — Podcast page with Apple/Spotify links
- `/events.html` — Events placeholder
- `/contact.html` — Press, speaking, coaching contacts
- `/demos/type-pairings.html` — Type comparison demo (kept for reference)
- `/demos/colour-palettes.html` — Palette comparison demo (kept for reference)

**Decision:** Design direction and scaffold were done in a single session rather than separated. The rendered demos (type pairings, colour palettes) allowed fast visual decision-making. Collapsing steps 4–7 of the process into one pass worked well because the design system was simple enough to define alongside the scaffold.

**Decision:** Book cover existed (Trigger Publishing version) — hot pink with white protest placard. Used this to anchor the palette even though the new publisher may change the cover. The pink is distinctive enough to become the site's identity independent of the final cover.

### 2026-03-02 — Content Strategy & Journal Build

**What we did:** Transformed the site from a structural scaffold into a content-rich demo. Developed a content strategy, created a unified editorial section ("Journal"), wrote three production-quality journal posts, and reworked every page with real content.

**The problem:** The site was structurally sound but empty. Every page either described the book abstractly or said "coming soon." There was nothing to engage a visitor, no reason to subscribe, and no demonstration that the site could function as an audience-building platform.

**Content strategy — "Give away the questions, sell the answers":**
Reviewed the full book digest, interviewee reference, and a podcast transcript to identify what content could be shared freely vs. what must be protected. The principle: share themes, cultural commentary, interviewee quotes, personal stories, and provocation — but never reveal the book's coaching frameworks (Queer Wheel of Mid-Life, Queer Wholeness Method, Manifesto structure) or guided exercises. The site should make people *want* the book, not replace it.

**Journal architecture — one section, four content types:**
The initial brief suggested multiple content streams (voices, reflections, podcast highlights, reading lists) which risked feeling like "two or three different blogs." Solved this by creating one unified Journal section with four visually-distinct content types, differentiated by coloured category labels:

| Type | Label colour | What it is |
|------|-------------|------------|
| Voice | Blue | One interviewee quote + Paul's reflection + a closing question (~400 words) |
| Reflection | Pink/primary | Paul's longer-form essays — thematic, cultural, personal (~800–1200 words) |
| Conversation | Green | A podcast moment edited for reading, with listen CTA (~500–700 words) |
| Reading | Amber | Curated lists — books, podcasts, resources (variable) |

**Demo content — 3 journal posts written in Paul's voice:**
All written at production quality using the tone-of-voice reference, drawing from the book digest and podcast transcript. Paul should be able to read these and think "yes, this is what my site should feel like."

1. `/blog/a-lost-generation.html` — **Voice** featuring Gareth, 46. On the invisibility of mid-life queer people, Section 28, being skipped by culture. Closes with: "What would it take for you to feel seen?"
2. `/blog/the-philosophers-who-hated-us.html` — **Reflection**. Witty tour through Western philosophers and their homophobia (Aristotle → Aquinas → Locke → Kant → "What a Kant"), pivoting to Butler, Stockton, Halberstam. Shows Paul's intellectual range without touching coaching frameworks.
3. `/blog/the-crush-you-didnt-know.html` — **Conversation** drawn from Charlie Palmer podcast transcript. The universal queer experience of the early crush before you had the words. Michael J. Fox poster, the primary school jock. Links to full podcast episode.

**Page-by-page changes:**

- **Homepage** (`index.html`) — Major rework. New sections: hero → interviewee voice (Duncan, 51: "I never told my dad…") → dark-background provocation question ("When did you first come out to yourself?") → book description → 3 journal cards → endorsements (condensed to 2, with link to book page) → reframed newsletter CTA.
- **Journal index** (`blog/index.html`) — Populated. Featured post (large card) at top, 2-column grid below. Each card has category label, title, excerpt, date. Email capture at bottom.
- **Book page** (`book.html`) — Reworked. Leads with dedication, describes three parts as what happens to the *reader*, "Voices from the book" grid with 6 interviewee quotes, endorsements kept, ISBN/details pushed discreet.
- **Podcast page** (`podcast.html`) — Populated. "Start here" with 5 curated episode hooks, "Browse by theme" with 4 groups (Identity, Coming out, Belonging, Ageing), "From conversation to page" section linking to journal.
- **About page** (`about.html`) — Enriched. Opens warmer, "How this book happened" section, the Sharons, credentials woven naturally rather than listed.
- **Events & Contact** — Blog→Journal rename in nav/footer only.

**CSS additions (~300 lines):**
New components added to `/css/styles.css`: `.category-label` (with colour variants per type), `.journal-card` / `.journal-card--featured`, `.post-grid` / `.post-grid--trio`, `.voice-quote`, `.closing-question`, `.listen-cta`, `.author-bio`, `.homepage-voice`, `.homepage-question` (dark bg), `.homepage-journal`, `.podcast-episode`, `.podcast-theme-group`, `.book-voices` / `.book-voice-item`, `.book-details`, `.post-header`, `.post-body`, `.more-posts`.

**Newsletter reframe:** Changed from transactional ("Be the first to know when the book lands") to relational ("A fortnightly letter about being queer, being middle-aged, and being done with small thoughts") across all pages with email capture.

**Path fix for file:// viewing:** All paths converted from absolute (`/css/styles.css`) to relative (`css/styles.css` at root, `../css/styles.css` in `/blog/`). Required because the user opens HTML files directly from Finder, where `file://` protocol resolves `/` to the filesystem root. This is a convention to maintain going forward.

**Decision:** Blog→Journal rename. "Blog" felt generic and undermined the editorial quality. "Journal" better reflects the mix of voices, reflections, and conversations — and signals that the content is considered, not just frequent.

**Decision:** Content written at production quality, not placeholder. The demo's purpose is to show Paul what the site *becomes* when populated. Wireframe-quality lorem ipsum would fail to demonstrate the editorial vision. Paul needs to read the posts and react to the writing, not just the layout.

**What we learned:** The "give away the questions, sell the answers" strategy creates a natural flywheel: each journal post poses a question or surfaces a theme → the reader recognises themselves → the book promises the tools to do something about it → the newsletter keeps the conversation going between posts. The content types provide enough variety to sustain a fortnightly publishing rhythm without repetition.

### 2026-03-01 — Design Refinement: Hero & Navigation

**What we did:** Refined the homepage header and hero to match the quality of the palette demo.

**Problem:** The initial scaffold had the navigation sitting on a sand-coloured bar above the pink hero — two distinct visual blocks. The palette demo had integrated the nav *inside* the pink band, which felt more cohesive and confident. The user correctly identified this gap.

**Changes:**
- Added `.page-home` class to the homepage `<body>` to scope homepage-only styles
- Header on homepage now has pink background, merging visually with the hero
- Nav links: uppercase, smaller (`--text-xs`), `letter-spacing: 0.08em`, white at 65% opacity (full white on hover)
- Site title: white on pink
- Hero padding increased: more generous vertical space, `min-height: 70vh` at desktop, `align-items: flex-end` to push content down into the space
- Interior pages unaffected — they keep the sand header

**What we learned:** The rendered demos set a quality bar that the scaffold needs to match. Demos are useful not just for client decision-making but as a visual target during build. In future, the scaffold step should reference the chosen demo directly rather than rebuilding from CSS alone.

### 2026-03-02 — Design Audit: Visual Boldness Pass

**What we did:** A full design audit of the site focused on visual boldness and personality — looking at where the design was holding back, hedging, or not matching the emotional temperature of the content. Resulted in significant CSS changes and a complete rethink of the homepage hero.

**The problem:** The content was warm, defiant, personal — but the design was polite and editorial. The site's visual temperature didn't match its emotional temperature. Colour was used timidly, type could work harder, and several sections felt like decisions had been made and then pulled back.

**CSS changes — turning up the heat:**
- **Hero:** `min-height: 100vh` at desktop (was 70vh), `align-items: flex-end` to push content into the lower third, h1 font-size bumped to `clamp(3.75rem, 9vw, 6rem)` with `letter-spacing: -0.02em` for tighter display setting
- **Homepage voice quote:** Added `border-left: 4px solid var(--color-primary)`, `padding-left: var(--space-6)`, bumped font-size to `clamp(var(--text-lg), 3vw, var(--text-2xl))`
- **Homepage question:** Full-viewport provocation — `min-height: 60vh` (80vh at 768px+), font-size bumped to `clamp(var(--text-2xl), 5vw, var(--text-4xl))`
- **Email capture:** White background → pink (`var(--color-primary)`), white text, dark button. Now a visual event rather than a polite afterthought
- **Journal cards:** Added `border-top: 3px solid` with category-coloured borders using `:has()` selector — pink for Reflection, amber for Voice, green for Conversation
- **Closing question boxes:** Pink background, white text (was sand with pink text)
- **Endorsements:** Larger type, decorative pink `"` quote marks via `::before` pseudo-element
- **Book voice items:** Border changed from grey (`var(--color-border)`) to pink (`var(--color-primary)`)

**Hero content rethink — from billboard to invitation:**
The original hero used the book title as the h1 headline. This created two problems: (1) the same words appeared in both the nav and the hero in close proximity, and (2) it read like a billboard rather than an invitation. Through iteration, landed on the line *"Come home to your whole self."* from Chapter 7 of the book — a direct emotional hook that speaks to the reader rather than announcing the product. The book title was demoted to context text below.

**Navigation typography fix:** The nav `.site-title` was set in DM Serif Display (the display font), which competed visually with the hero headline. Changed to `var(--font-body)` with uppercase, bold, letter-spacing — now part of the navigation system rather than a second display moment. This gives the hero h1 sole command of the first viewport.

**Hand-drawn SVG mark:** Added a small, organic, wavy SVG line between the hero headline and context text. Inspired by the hand-drawn quality of the Queer Wheel illustration from the book. Semi-transparent white, 160px wide — breaks the typographic precision in exactly one place to introduce a handmade quality. CSS: `display: block; margin: var(--space-5) 0; width: 160px; height: auto`.

**Homepage question `.meta` bug fix:** The supporting text under the provocation question ("One of the questions I asked…") was inheriting the huge display font from `.homepage-question p` due to specificity. Fixed by adding explicit `font-size: var(--text-md)` and `font-family: var(--font-body)` to `.homepage-question .meta`.

**Queer Wheel illustration discussion:** User dropped the Queer Wheel illustration (hand-drawn ink style with organic shapes) into `/assets/images/`. Open question about whether this could appear on the site — user argues that without the book's guidance, seeing the illustration doesn't give away the method. Flagged as a decision for Paul. The illustration's visual character *has* influenced the site through the hand-drawn SVG mark.

**What we learned:** The gap between "good editorial design" and "design that matches the energy of this book" is mostly about conviction. The palette, type, and structure were already right — but they were being used at 60% volume. The changes here are almost entirely CSS: bigger type, bolder colour use, more generous space. No new components, no new layout patterns. Just turning up what was already there. The hero content change was the biggest single improvement — a site about an emotionally honest book should lead with emotional honesty, not a title card.

### 2026-03-02 — Typeface Change: DM Serif Display → Fraunces

**What we did:** Replaced DM Serif Display with Fraunces (Google Fonts, variable font) as the display typeface across the entire site. Updated all HTML pages and the CSS design system. Also restructured the hero headline into a two-part format.

**The problem:** After building out the content and doing a boldness pass, the site still felt like it was missing punch. A diagnostic review identified five gaps: the typography lacked personality, everything was a clean box with no organic quality, the sand background was warm but safe, there was no visual surprise, and no photography/imagery. Typography was identified as the single biggest lever — the design equivalent of "turning up the volume."

**Why DM Serif Display wasn't working:** DM Serif Display is pleasant and literary but has no distinctive character. It's the most common "nice serif" on Google Fonts — you'll find it on food blogs, lifestyle sites, and a thousand book landing pages. It communicates "I want to look literary" but doesn't communicate *what kind* of literary. For a book whose voice is warm, defiant, intellectually sharp, and occasionally profane, the typeface was the visual equivalent of Paul's "hetero-normified" phase — nice, acceptable, doesn't make anyone uncomfortable.

**Why Fraunces:** Tested three candidates (Fraunces, Instrument Serif, Zodiak) against DM Serif Display using a full-context demo page showing each in the actual site palette (pink hero, sand sections, dark provocation band). Fraunces won clearly for several reasons:

- **Variable axes** — weight (100–900), optical size, softness (SOFT), and a "wonk" axis (WONK) that introduces slightly eccentric letterforms. This gives enormous range from a single font file: sharp and authoritative for heroes, soft and warm for pull-quotes.
- **Human character** — the wonk axis produces subtly leaning stems and organic ball terminals that feel hand-made rather than machine-drawn. This directly addresses the "everything is a clean box" problem at the typographic level.
- **Warm without being soft** — at heavy weights with low softness, Fraunces has genuine placard energy. At lighter weights with higher softness, it becomes intimate. This mirrors the book's tonal range: defiant and tender in the same breath.
- **Arts & Crafts lineage** — its design roots in early 20th-century organic lettering traditions give it historical weight without feeling retro.

**What we rejected:**
- **Instrument Serif** — condensed, confident, very editorial. But only available in Regular and Italic (no weight variation), which limits it to strictly display use. The fashion-magazine associations felt too glossy for the project's warmth.
- **Zodiak** (Fontshare) — thick bracketed serifs, monumental and sturdy. Good at heavy weights but lacked the organic warmth of Fraunces. Its personality comes from structure rather than character.

**CSS implementation — variable font settings per context:**

| Context | Weight | SOFT | WONK | Rationale |
|---------|--------|------|------|-----------|
| Hero h1 | 800 | 15 | 1 | Maximum impact. Sharp, authoritative, wonk on for character. |
| Hero turn (secondary line) | 400 | 50 | 0 | Softer, lighter — the intimate follow-up to the big statement. |
| h1/h2/h3 (general) | 600 | 20 | 1 | Confident default. Wonk on for personality. |
| Pull-quotes / blockquotes | 400 | 50 | 0 | Soft, readable at mid-sizes. Wonk off for longer runs of text. |
| Voice quotes | 500 | 40 | 0 | Slightly more weight than pull-quotes — these are statements. |
| Journal card titles | 500 | 30 | 0 | Mid-weight, moderate softness. Readable at card scale. |
| Endorsement quotes | 400 | 40 | 0 | Warm, not competing with the endorser's words. |
| Provocation question | 700 | 10 | 1 | Sharp and direct on dark background. Wonk on for defiance. |
| Closing question | 600 | 20 | 0 | Punchy but not as large as hero/provocation. |
| Email heading | 600 | 30 | 0 | Friendly, not aggressive. |
| Book voice items | 400 | 50 | 0 | Quiet, intimate — these are other people's words. |

**Hero headline restructured:** The long single headline ("Come home to the person you were before they told you to be someone else") felt cramped at display size, even in Fraunces. Split into two parts:
- **h1:** "Come home to your whole self." — big, punchy, emotional hook
- **`.hero-turn`:** "To the person you were before they told you to be someone else." — lighter weight, smaller, slightly transparent white. The defiant turn arrives second, like a placard's subheading.

This structure reads the way a good poster reads: the hook stops you, the turn lands the meaning.

**Files changed:**
- `/css/styles.css` — `--font-display` token updated, `font-variation-settings` added to all display-font components, new `.hero-turn` class
- All 10 HTML pages — Google Fonts `<link>` updated from DM Serif Display to Fraunces (full variable font with SOFT and WONK axes)
- `/index.html` — hero restructured with new `.hero-turn` secondary line
- `/demos/display-type-test.html` — new comparison demo showing all three candidates + current baseline in full site context

**What we learned:** The "stuck" feeling was a typography problem, not a content problem. The analysis, the writing, the structure, the palette — all held up. But the typeface was a generic container that didn't participate in the communication. Swapping one variable (the display font) and tuning its axes per context transformed the site's personality more than the entire boldness pass did. The lesson: when a design feels flat despite good content and a good palette, look at the typeface first.

### 2026-03-02 — Gaps 2 & 3: Texture, Organic Quality, and Palette Edge

**What we did:** Addressed two related design-analysis gaps together — Gap 2 ("Everything is a clean box") and Gap 3 ("The sand background is warm but safe"). These are about making the site feel like a person made it, not a template engine.

**The problem:** Every element on the site was a precise rectangle. The only organic element was a wavy SVG in the hero. The sand-and-pink palette was warm but had no friction — only the dark homepage-question section had any real edge. The site read as a well-made template, not a defiant, warm, human thing.

**What we implemented (7 changes, CSS-led):**

1. **Paper grain texture** — SVG `feTurbulence` noise layered over the body via `::before` pseudo-element. `position: fixed`, `pointer-events: none`, low opacity. Transforms every page from flat digital to tactile paper without touching the palette. All page content layered above with `body > * { position: relative; z-index: 1; }`.

2. **Dark footer** — Every page now ends in `var(--color-dark)` with light text, replacing the pale sand footer that blended into the body. Creates a rhythm: pages begin in colour and end in darkness. Links, labels, colophon all re-coloured for contrast.

3. **Journal cards restyled** — Removed the timid 1px border. Cards now have no border, a bolder 5px category-coloured top bar, and a subtle `box-shadow` for lift. Hover increases the shadow rather than translating the card. Less boxed-in, more confident.

4. **Closing question placard** — Added `transform: rotate(-0.75deg)` and a hard `box-shadow` to `.closing-question`. Breaks the grid at a key emotional moment. The pink box now feels stuck to the page like a protest placard rather than typeset into it.

5. **Dark "Voices from the book" section** (`book.html`) — Wrapped the six interviewee quotes in a `.section--dark` variant: dark background, white/light text, pink left borders. Creates a dramatic gallery effect and gives the book page the same dark/light rhythm as the homepage.

6. **Pull-quote breakout** — At `min-width: 768px`, `blockquote`, `.voice-quote`, and `.homepage-voice blockquote` extend beyond their text container with negative left margin. The pink border-left escapes the column, creating visual surprise at emotional moments.

7. **Author bio / endorsement border cleanup** — Removed mechanical `border-top` and `border-bottom` from `.author-bio`. First endorsement no longer has a top border; only `.endorsement + .endorsement` gets one.

**What we tried and rejected — hand-drawn SVG dividers:**
Created two SVG variations (wavy line + loose brushstroke) and placed 16 dividers across all 9 HTML pages to replace `border-top: 1px solid` lines between sections. Added CSS for positioning and responsive sizing. Result: they looked forced and decorative rather than organic. User verdict: "they really do not work at all." Removed all dividers and CSS within the same session. Lesson: organic quality comes from texture, rhythm, and spatial choices — not from literally drawing wobbly lines.

**Hero refinement (iterative, 4 rounds):**

The hero went through significant changes during this session:

1. **Stripped to two lines** — Removed the wavy SVG mark, the book reference paragraph ("A book about finding your way back…"), and the "Be the first to know" CTA button. The hero is now just the headline and the turn line. The book introduction lives in subsequent sections.

2. **Fixed 100vh dead space** — The previous `min-height: 100vh` with `align-items: flex-end` at desktop was pushing content to the very bottom of the viewport, creating an enormous empty space above the headline. Changed to `min-height: 80vh` — still a billboard, no longer a void.

3. **Centred the copy** — Changed from `align-items: flex-end` (left-aligned at bottom) to `align-items: center; text-align: center` with auto margins on `.hero-turn`. The hero now reads as a centred statement on desktop.

4. **Removed full stops** — Both lines lost their periods. The hero reads as a statement, not a sentence. "Come home to your whole self" / "To the person you were before they told you to be someone else"

**Final hero state:**
```html
<section class="hero">
  <div class="container">
    <h1>Come home to your whole self</h1>
    <p class="hero-turn">To the person you were before they told you to be someone else</p>
  </div>
</section>
```

**CSS patterns established:**
- `.section--dark` — reusable dark variant for any section (dark bg, light text, adjusted label/meta/link colours)
- Paper grain as a site-wide texture layer, not per-element
- `body > *` z-index pattern for layering content above fixed overlays

**Files changed:** `css/styles.css` (bulk of changes), all 10 HTML pages (SVG dividers added then removed), `index.html` (hero stripped and centred), `book.html` (voices section → `.section--dark`), `docs/design-analysis.md` (gaps 2+3 marked resolved, priority order updated).

**What we learned:** The organic quality the site needed didn't come from decorative elements (the SVG dividers failed). It came from subtle, pervasive changes: paper grain everywhere, dark/light rhythm, spatial choices that break the grid at emotional moments (pull-quote breakout, placard rotation). The hero refinement followed the same principle — stripping away elements (SVG, book blurb, CTA, punctuation) made it more powerful, not less. Confidence is about what you leave out.

### 2026-03-03 — Gaps 4 & 5: Visual Surprise and Photography Readiness

**What we did:** Addressed the final two design-analysis gaps in a single session. Gap 4 ("No visual surprise") introduced layout disruption and scale shifts. Gap 5 ("No photography or imagery") created image-ready layouts with designed placeholders, then swapped in real photographs when Paul provided them.

**The problem:** The layout was predictable on every page — centre-left, contained, controlled. Hero → section → section → cards → CTA. Nothing asymmetric, nothing that breaks the rhythm the way Paul's writing constantly does. Meanwhile, a book about 51 real people was 100% text and flat colour with no portrait, no imagery, no visual warmth beyond colour.

**Gap 4 — Visual Surprise (4 changes):**

1. **Interrupt pull-quotes** (`.pull-quote--interrupt`) — Key pivoting moments extracted from body paragraphs and given their own full-width typographic moment. Oversized Fraunces at `clamp(2rem, 5vw, 3.75rem)`, centred, no border, generous vertical margin. Applied to "What a Kant." (philosophers post) and "And somewhere in that progress, we got skipped." (lost generation post). At desktop, breaks beyond `.text-container` via negative margins (`-6rem` left/right).

2. **Drop sentences** (`.drop-sentence`) — Short punchy lines rendered at `var(--text-xl)` in Fraunces weight 600, creating the typographic equivalent of Paul's em-dash pivots. Applied to "The answer, it turns out, is: nothing good." (philosophers) and "We are right here. And we have a few things to say." (lost generation).

3. **Homepage journal card stagger** — On desktop (`min-width: 960px`), `.post-grid--trio` offsets the middle card with `transform: translateY(1.5rem)`, breaking the flat three-card grid. CSS-only change, no HTML needed.

4. **About page asymmetric layout** (`.about-hero`) — First non-centred layout on the site. CSS Grid at desktop: text column + 18rem portrait column with `gap: var(--space-9)`. Portrait is `position: sticky` so it follows the scroll. On mobile, portrait sits above text (DOM order: portrait first, text gets `order: -1` at desktop).

**Gap 5 — Photography Readiness (4 changes, then photo integration):**

1. **Author bio avatar upgrade** — Grey circle placeholder replaced with styled pink circle showing "PT" initials in Fraunces, with `overflow: hidden` ready for `<img>` swap. Applied across all three journal posts.

2. **About page portrait placeholder** (`.about-portrait`) — Large portrait-ratio container (`aspect-ratio: 3/4`) with pink-to-sand gradient and "PTP" initials. Positioned in the new `.about-hero` grid layout. Designed for a single `<img>` tag swap.

3. **Book page cover placeholder** (`.book-cover-placeholder`) — New `.book-intro` two-column layout at desktop (text + 14rem cover column). Placeholder shows book title and "Autumn 2026" in Fraunces on a white surface with subtle shadow.

4. **Homepage "51" watermark** (`.voice-count`) — Massive Fraunces numeral (`clamp(8rem, 20vw, 14rem)`, weight 800, opacity 0.06) positioned absolutely behind the voice quote section. Communicates the scale of the research visually with `aria-hidden="true"`.

**Photo integration (same session):**

Paul provided two photographs:
- `Dr-Paul-Taylor-Pitt-Portrait.jpeg` — Full portrait for the about page. Swapped directly into the `.about-portrait` container, replacing the gradient placeholder.
- `PTP-avatar.jpeg` — Cropped square version for bio strips. Swapped into all three journal post author-bio avatars, replacing the "PT" initial circles.

Both swaps were one-line changes (`<img>` tag replacing text content), confirming the placeholder design strategy worked as intended.

**CSS architecture note — pull-quote breakout technique:**

Initially used `calc(-50vw + 50%)` for the interrupt pull-quote desktop breakout (a common technique for viewport-width elements inside narrower containers). This doesn't work here because `.text-container` is not horizontally centred in the viewport — it sits left-aligned within `.container`. The viewport-relative maths produced incorrect offsets. Fixed by using simple `-6rem` negative margins instead, which extends the interrupt comfortably beyond `.text-container` without needing viewport-relative calculation. This is simpler and more robust for left-aligned nested containers.

**CSS architecture note — DOM order for responsive portrait:**

The about page portrait needed to appear above text on mobile but beside text (on the right) at desktop. Solved by placing the portrait first in DOM (natural mobile order) and using `order: -1` on `.about-hero .text-container` at the 768px breakpoint to visually swap the two columns. This avoids duplicating the image or using absolute positioning.

**Files changed:**
- `css/styles.css` — New classes: `.pull-quote--interrupt`, `.drop-sentence`, card stagger rule, `.about-hero`, `.about-portrait`, `.book-intro`, `.book-cover-placeholder`, `.voice-count`, `.author-bio-avatar` upgrade
- `index.html` — Added `.voice-count` element
- `about.html` — Restructured into `.about-hero` with real portrait photo
- `book.html` — Restructured into `.book-intro` with cover placeholder
- `blog/a-lost-generation.html` — Interrupt pull-quote, drop sentence, avatar photo
- `blog/the-philosophers-who-hated-us.html` — Interrupt pull-quote, drop sentence, avatar photo
- `blog/the-crush-you-didnt-know.html` — Avatar photo
- `docs/design-analysis.md` — Gaps 4 and 5 updated, priority order updated
- `CLAUDE.md` — Updated with new design patterns, image assets, page descriptions

**What we learned:** The placeholder-to-photo swap strategy was validated — designing image-ready containers with styled fallbacks meant the actual photo integration was trivial. Both photos went in as one-line changes. For future projects, this approach is worth standardising: design the layout and styling first with intentional placeholders, so that asset delivery doesn't block design work.

The interrupt pull-quote is the most significant new pattern. It gives Paul's writing a visual equivalent of his rhetorical style — the short, devastating line that lands after a long flowing passage. "What a Kant." sitting alone at 3.75rem across the page communicates something that the same words buried in a paragraph never could. This is the design doing the work of the writing.

### 2026-03-03 — Homepage Narrative Restructure & Animation System

**What we did:** Complete rethink of the homepage from a product page into a cinematic scroll narrative. Added an animation system (scroll reveals, hero entrance, sticky nav). Multiple rounds of copy and structure iteration driven by live browser review.

**The problem:** After the hero — "Come home to your whole self" — the page pivoted immediately into the book. Duncan's quote, the provocation question, "What is this book?" It was a product page wearing an emotional hero as a hat. The visitor never got to understand what *Still Here! Still Queer! Now What?* actually is as a broader project before being sold a book. Meanwhile, nothing on the page moved — no scroll reveals, no transitions, no entrance animations. The hero appeared fully formed, which undercut the emotional weight of "coming home."

**The narrative redesign — story, not product:**

The homepage was restructured as a cinematic scroll sequence, each section designed to feel like turning the page of a book:

| Section | Class | Content | Design |
|---------|-------|---------|--------|
| **Hero** | `.hero` | "Come back to your whole self / To the person you were before *they* told you to be someone else" | Pink band, centred at desktop, two-stage fade-in animation |
| **Recognition** | `.homepage-recognition` | "You survived... But somewhere between the first time you came out and now, parts of you went quiet. *Not gone — just waiting.*" | Centred, Fraunces display font, 80vh min-height, intimate second-person address |
| **Invitation** | `.homepage-invitation` | "This is for the waiting parts." | Dark background, hero-scale Fraunces type, full-viewport beat |
| **Story** | `.homepage-story` | The project contextualised — one question, fifty-one people, podcast → book → "a place for the conversation to keep going" | Centred intro in muted Fraunces, question at display scale, then body copy shifting to "we" voice |
| **Voices** | `.homepage-voices` | Four quotes: Nick 45, Craig 51, Robin 46, Grant 55 | Each in its own `.voice-block` with "51" watermark, soft dividers between |
| **Book** | `.section` | Repositioned as one part of the project, not the headline act | Standard section with outline CTA |
| **Journal** | `.homepage-journal` | "The conversation so far" — three journal cards | Staggered grid, reveal animations |
| **Endorsements + Email** | `.section` / `.email-capture` | Unchanged from previous build | Added `.reveal` classes |

**Copy decisions:**

- **Hero wording changed:** "Come home" → "Come back" — more direct, more personal. The `<em>they</em>` emphasis on the turn line adds a pointed edge.
- **Voice register:** Second-person "you" for the intimate recognition, shifting to "we" from the story section onwards. This mirrors the book's voice — Paul starts by speaking *to* you, then draws you *in* with him.
- **"Not gone — just waiting"** was originally the drop-sentence at the end of the Recognition section. Through iteration, it was separated into its own dark-background beat — "This is for the waiting parts." — giving it the emotional weight of a full page turn.
- **Quote arc:** Nick → Craig → Robin → Grant (permission → hiding → celebration → defiance). Chosen to be warmer than the original single Duncan quote — no grief, an arc that builds to Grant's "Love yourself, bitch."
- **"The conversation so far"** replaced "From the journal" as the label above the journal cards — positions the content as ongoing, not archival.

**Animation system (new):**

Three layers of motion added via CSS and JS:

1. **Hero entrance** — `@keyframes hero-arrive`: fade-up on page load (800ms ease). The turn line is delayed 400ms via `.hero-entrance--delayed`, creating a two-beat arrival. The hook lands first, then the meaning follows.

2. **Scroll reveals** — `.reveal` class + IntersectionObserver in `main.js`. Elements start at `opacity: 0; transform: translateY(24px)` and transition to visible when 15% enters the viewport. One-shot (unobserved after reveal). `.reveal-stagger` staggers children at 150ms intervals (used on journal card grid).

3. **Reduced motion** — Full `prefers-reduced-motion: reduce` support. CSS disables all animations and transforms; JS detects the preference and shows everything immediately without observing.

**Sticky navigation (new):**

The header is now `position: sticky; top: 0` with a scroll-driven state change:

- **On hero:** Transparent background, white text/links (homepage only — interior pages use sand/dark)
- **Scrolled past hero:** Sand background with subtle `box-shadow`, dark text. JS toggles `.is-scrolled` class by watching the hero's `getBoundingClientRect().bottom`.
- **Homepage overrides:** `.page-home .site-header` starts pink. `.page-home .site-header.is-scrolled` transitions to sand. Required careful CSS specificity — the scrolled state needs to beat the `.page-home` base styles.

**Iterative refinements during the session:**

The session involved 4+ rounds of live browser review and adjustment:

1. **Hero overflow fix** — Initial `clamp(3.75rem, 9vw, 6rem)` h1 was too large on narrow viewports. Reduced to `clamp(2.25rem, 6vw, 5rem)` and added `overflow-wrap: break-word`.
2. **Provocation visibility** — The `.reveal` class on the dark-background question made white text invisible until the observer triggered, looking broken. Removed `.reveal` from that element.
3. **Section spacing** — Recognition and Story sections were running together. Added `min-height: 80vh` to Recognition, increased padding on Story, reduced padding between the intro/question/post-provocation to make them flow as one beat.
4. **Pre-provocation styling** — "Started with one question..." initially in DM Sans body copy. Moved to centred Fraunces in muted colour to extend the intimate register before the dark band hits.
5. **Sticky nav specificity** — `.page-home .site-header` was overriding `.site-header.is-scrolled` due to equal specificity. Fixed by adding `.page-home` prefix to the scrolled state rules.
6. **Cache-busting** — The local WEBrick server caches aggressively. Required `?v=2` query params on CSS/JS links during development (removed after verification).

**Design principle established — the page-turning metaphor:**

Charlie's key insight: scrolling should feel like turning the pages of a book. Each section should occupy most of the viewport and replace the previous one, not stack tightly. This means:
- `min-height: 60vh–80vh` on key emotional beats (Recognition, Invitation)
- Generous padding rather than tight stacking
- Sections should "melt into each other" — soft dividers, no hard borders
- The dark Invitation band between sand sections creates a natural page break

**Motion principle established — warm, confident, unhurried:**

"Static" in this project means static deployment (HTML/CSS/JS, no server), not static design. Motion should feel intentional and quiet — gentle reveals, not bouncy effects. The animation system respects this:
- Slow transitions (600ms ease for reveals, 800ms for hero)
- Small transform distances (24px translateY, not dramatic swoops)
- One-shot reveals (no re-hiding on scroll up)
- Reduced motion fully supported

**Files changed:**
- `index.html` — Complete homepage restructure (new sections, new copy, reveal classes throughout)
- `css/styles.css` — ~200 new lines: `.homepage-recognition`, `.homepage-invitation`, `.homepage-story` (with `-intro`, `-question` sub-classes), `.homepage-voices`, `.voice-block`, sticky header states, animation system
- `js/main.js` — ~40 new lines: sticky header scroll listener, IntersectionObserver for scroll reveals, reduced-motion detection

**What's still in progress:**
- Section 5 (voices) onwards needs a final review pass — the session hit context limits before completing
- Mobile responsiveness of the new sections hasn't been explicitly tested
- Interior pages don't yet have the animation system (no `.reveal` classes)
- The old `.homepage-question` and `.homepage-project` CSS classes are orphaned — can be cleaned up

**What we learned:** The biggest improvement to the homepage wasn't a design change — it was a narrative change. The site went from "here's a book" to "here's something you'll recognise about yourself." The design (animation, spacing, dark/light rhythm) serves the narrative, not the other way around. The "page-turning" metaphor is a useful organising principle: it gives the scroll a pace and a structure that maps to how the book itself reads. Each section earns the next one.

The iterative process — build → review in browser → adjust → review again — was essential. Several decisions that seemed right in code (`.reveal` on dark backgrounds, tight section spacing) only revealed their problems when viewed in context. A live preview loop is non-negotiable for this kind of work.

### 2026-03-03 — Homepage Sections 4–8 Restructure & Journal → The Voices Rename

**What we did:** Restructured homepage sections 4–8, replacing the Story/Voices/Book/Journal sequence with a new Declaration → Project Intro → Voices → Book → The Voices teasers structure. Renamed "Journal" to "The Voices" across all 10 HTML pages. Updated CLAUDE.md to reflect the new architecture.

**The problem:** The cinematic scroll from the first three sections (Hero → Recognition → Invitation) died at section 4. The Story section used a "one question asked of fifty-one people" framing that wasn't true to the book's actual origin (checked against book-digest.md — the project started with Paul's own mid-life reckoning, not a single question). From section 4 onwards: sand-on-sand monotony, the focus shifted from "you" to third-party showcase, and the page read as informational rather than emotional. The four voice-quote blocks were visually identical and repetitive.

**The honest assessment that triggered this:** Charlie scrolled the full page in-browser and gave a section-by-section diagnostic. Key finding: "The cinematic quality dies here. You've gone from a book being turned to a brochure being read." The best paragraph on the page — "Because middle-aged queers deserve to be in the foreground..." — was buried inside a section that was doing too much.

**Structural changes:**

| Section | Old | New | Why |
|---------|-----|-----|-----|
| **4 — Declaration** | Part of Story section | Own full-viewport sand section, centred Fraunces weight 600 with WONK 1 | Elevates the emotional peak. Shifts register from "you" to "we" |
| **5 — Project Intro** | Story section (inaccurate "one question" framing) | Dark section: what SHSQNW draws on, three-part arc, three formats | Pivots to substance. Describes what the project does for the reader without naming protected frameworks |
| **6 — Voices** | 4 identical blocks with per-block "51" watermarks | 3 quotes, varied scale (first largest), single "51" watermark, new label | Breaks visual monotony. "Things said out loud that you've been thinking quietly" is stronger than "51 people. 51 lives." |
| **7 — Book** | Plain section, felt like a product card | White surface card with shadow, warmer copy, outline CTA | Visual distinction. Feels designed, not dumped |
| **8 — The Voices teasers** | "The conversation so far" journal cards | Same cards, rebranded section | Minimal change — these already worked |

**Key copy decisions:**

- **Three-part arc** — "Understanding where you are. / Reconnecting with who you really are. / And deciding — on your own terms — what happens next." Maps to the book's three parts (Still Here / Still Queer / Now What) without naming the Queer Wheel, Queer Wholeness Method, or Manifesto. Stays in second person.
- **Project framing** — "draws on psychology, philosophy, and fifty-one conversations with queer people aged forty to sixty — not to tell you what's wrong, but to help you remember what was always right." Concrete but warm.
- **Formats line** — "A podcast. A book. And this — a place for the conversation to keep going." Introduces the three formats naturally at the end.
- **Voices label** — "Things said out loud that you've been thinking quietly" replaced "51 people. 51 lives. Things said out loud that you've been thinking quietly." The "51 people" framing was stepping away from the reader; the new label keeps the reader as subject.

**Dark/light rhythm restored:**
```
PINK (hero) → SAND (recognition) → DARK (invitation) → SAND (declaration) → DARK (project intro) → SAND (voices + book + teasers) → PINK (email) → DARK (footer)
```

**Journal → The Voices rename:**

Changed across all 10 HTML pages: nav, mobile nav, footer, blog index page title/heading, blog post "More from..." cross-links, podcast body text reference. CSS class names intentionally NOT renamed (`.journal-card`, `.homepage-journal` stay) — the classes are structural, the label is editorial. File paths unchanged (`/blog/` directory stays).

**CSS changes:**
- Added `.homepage-declaration` — `min-height: 60vh`, centred, Fraunces weight 600, `font-variation-settings: 'SOFT' 15, 'WONK' 1`
- Added `.homepage-project-intro` — dark background, three sub-classes for framing (muted body), arc (display Fraunces), and formats (muted body)
- Reworked `.homepage-voices` — `.homepage-voices-inner` wrapper with single "51" watermark, first quote at larger scale via `:first-child` selector, subsequent quotes smaller
- Added `.homepage-book` and `.homepage-book-card` — white surface, subtle shadow, generous padding
- Removed orphaned `.homepage-project` and `.homepage-story` classes from previous structure

**Files changed:**
- `index.html` — Sections 4–8 restructured, nav/footer rename
- `css/styles.css` — New section classes, voice rework, book card, orphan cleanup
- `about.html`, `book.html`, `podcast.html`, `events.html`, `contact.html` — Nav/footer rename
- `blog/index.html` — Nav/footer rename, page title/heading
- `blog/a-lost-generation.html`, `blog/the-philosophers-who-hated-us.html`, `blog/the-crush-you-didnt-know.html` — Nav/footer rename, "More from" cross-links
- `CLAUDE.md` — Updated site architecture, homepage narrative structure, file structure comments

**What went wrong — the honest reckoning:**

Charlie's closing observation: "I actually realise we've gone completely off-piste over the last few sessions. The homepage is now a very abstract, unclear destination." The restructure improved the emotional register and dark/light rhythm, but the page still lacks concrete substance. It reads as poetry rather than a destination someone would navigate. The emotional scroll is well-crafted but may have pushed too far from utility — a visitor still doesn't clearly understand what they'll find here or what action to take.

**What we unlocked despite this:**

The Declaration paragraph and the three-part arc are strong editorial assets. The dark/light rhythm works. The Voices rename is the right name. The varied-scale voice quotes are better than the identical blocks. These pieces may need to live in a different structure, but they're worth keeping.

**What we learned:**

1. **Emotional scroll can become its own trap.** The cinematic page-turning metaphor that worked brilliantly for sections 1–3 became a problem when extended through the entire page. At some point, a visitor needs to land somewhere concrete — links, actions, content they can engage with. A homepage that's entirely emotional is a mood board, not a destination.

2. **"Give away the questions, sell the answers" needs a visible front door.** The content strategy principle is sound, but the homepage doesn't yet show what the "questions" look like in practice. The Voices teasers at the bottom are the closest thing to real content, but they're buried below five viewport-height emotional sections.

3. **Iterative design conversations can drift.** Multiple rounds of "what if we..." thinking produced good individual components (Declaration, Project Intro) but the overall page lost coherence. A periodic "zoom out and assess the whole" step is needed in the process.

4. **The rename was clean and right.** "The Voices" is a better section name than "Journal" — more distinctive, connects to the book's strongest asset (the 51 interviews), and gives the editorial section a name that no one else has. The implementation was mechanical and should have been done earlier.

### 2026-03-03 — Homepage Restructure: From Abstract Scroll to Concrete Destination

**What we did:** Stripped the homepage back from a cinematic emotional scroll to a concrete, navigable page. Removed three abstract sections (Recognition, Invitation, old Declaration position), added a structured Project section with hand-drawn icons, replaced the varied-scale voice blocks with a book-page-style dark grid, and restyled the Declaration as a typographic rhythm rather than a single block of text.

**The problem:** The previous sessions had produced a homepage that read as poetry rather than a destination. Five viewport-height emotional sections sat between the hero and any concrete content. A visitor scrolling past "Come home to your whole self" encountered "You survived...", "This is for the waiting parts", "Because middle-aged queers...", and a dark project description before reaching anything they could click on or engage with. Charlie's diagnosis: "We've gone completely off-piste. The homepage is now a very abstract, unclear destination."

**The fix — substance first, emotion earned:**

| # | Section | What changed |
|---|---------|-------------|
| 1 | **Hero** | Unchanged. "Come home to your whole self" |
| 2 | **The Project** | NEW. "THE PROJECT" section label (`.label`, like About page), description copy, three-column `.homepage-arc` grid with hand-drawn icons and descriptions for Understanding / Reconnecting / Deciding. Sand background. Replaces the abstract Recognition, Invitation, and dark Project Intro. |
| 3 | **The Voices** | RESTYLED. Dark `.section--dark` with `.book-voices` 2-column grid (reusing the book page pattern). "51 PEOPLE. 51 LIVES." label + "Things said out loud that you've been thinking quietly" heading. 6 quotes (Darren, Craig, Christianne, Jeremy, Keith, Dave — all different from the book page). Replaces the varied-scale voice blocks. |
| 4 | **The Conversation So Far** | Unchanged. Three journal teaser cards. |
| 5 | **Declaration** | MOVED + RESTYLED. Now sits after the journal cards, not before the project section. Broken into three typographic beats: lead line at large Fraunces (`.homepage-declaration-lead`), muted negations (`.homepage-declaration-negation`), affirmation with pink adjective list (`.homepage-declaration-list`). Much more readable than the single block. |
| 6–9 | **Book → Endorsements → Email → Footer** | Unchanged. |

**Sections removed:**
- `.homepage-recognition` ("You survived... parts of you went quiet") — HTML removed, CSS kept for now
- `.homepage-invitation` ("This is for the waiting parts.") — HTML removed, CSS kept for now
- Old `.homepage-voices` (varied-scale quote blocks with "51" watermark per block) — HTML removed, CSS removed

**Hand-drawn icons added:**
Three 800x800 transparent PNG speech bubble icons provided by the author: `still-here-icon.png`, `still-queer-icon.png`, `now-what-icon.png` in `/assets/Icons/`. Each maps to one part of the book's arc (Still Here = Understanding, Still Queer = Reconnecting, Now What = Deciding). Displayed at `12rem` square, centred over their text columns in the `.homepage-arc` grid.

**CSS changes:**
- New: `.homepage-project`, `.homepage-project-copy`, `.homepage-arc` (3-col grid at 768px+), `.homepage-arc-item` (centred text), `.homepage-arc-image` (12rem square, centred)
- New: `.homepage-voices-grid` (scoped label spacing), `.homepage-voices-heading` (warm Fraunces, max-width 32rem)
- New: `.homepage-declaration` (centred), `.homepage-declaration-lines` (42rem max-width), `.homepage-declaration-lead` / `-negation` / `-affirmation` / `-list` (three distinct typographic registers)
- Reused: `.section--dark`, `.book-voices`, `.book-voice-item`, `.label`, `.text-container`
- Removed: `.homepage-voices` varied-scale block CSS, `.voice-block`, `.voice-count`

**Dark/light rhythm:** PINK → SAND → DARK → SAND → SAND → SAND → SAND → PINK → DARK

**Quote selection rationale:**
Chose 6 quotes that avoid repeating the book page's quotes (Nicholas, Peter, Eva, James, Grant, Garvin) and the old homepage quotes (Nick, Robin, Grant). The arc runs: questioning (Darren) → humour/honesty (Craig) → identity/masks (Christianne) → quiet power (Jeremy) → defiance (Keith) → arrival (Dave).

**Files changed:**
- `index.html` — Sections 2–5 restructured, icons added
- `css/styles.css` — New homepage section classes, removed old voices CSS
- `CLAUDE.md` — Updated homepage description, narrative structure, assets, file structure

**What we learned:**

1. **The best editorial assets survived the restructure.** The Declaration copy, the three-part arc descriptions, and the voice quotes all carried over. What changed was their *position* and *context* — they work harder when placed after concrete content rather than after abstract emotional sections.

2. **Substance before emotion is the right order.** The hero provides the emotional hook. The very next thing a visitor sees is what this project actually *is*. The Declaration now lands as a climax after the visitor has seen the project, the voices, and the content — earning the emotion rather than front-loading it.

3. **Reusing existing CSS patterns works.** The dark voices grid reuses `.section--dark`, `.book-voices`, and `.book-voice-item` from the book page — no new component design needed. This confirmed the design system is working: patterns designed for one page transfer cleanly to another.

4. **Hand-drawn icons solved the "everything is a clean box" problem** more effectively than the SVG dividers that failed in an earlier session. The difference: the icons are *content* (they map to the book's three parts), not decoration. Organic elements work when they carry meaning.

### 2026-03-03 — Homepage Refinement (Three Iterative Rounds)

**What we did:** Three rounds of design feedback and implementation, refining the homepage from a solid structure into something that feels polished and intentional. Each round built on the previous.

**Round 1 — Layout and section adjustments:**
- Hero: left-aligned at desktop (was centred), reduced from 80vh to 60vh — more confident, less empty
- The Project: centre-aligned text and arc cards, increased card gap from `space-6` to `space-9`
- The Voices: changed h2 heading to label style for consistency, reduced from 6 quotes to 4
- Declaration: moved after voices (before journal), unified to all pink/same size
- Book section: expanded with more descriptive copy and cover placeholder
- Endorsements: restructured as three horizontal cards with Layla McCay added

**Round 2 — Stripping back and strengthening:**
- "THE PROJECT" label coloured pink for visual identity
- Merged the two label lines in voices section into one continuous label
- Made voice quotes more impactful (bigger text, full white, thicker border)
- Removed declaration section entirely — it wasn't earning its place, and the book section works better immediately after voices
- Moved book section up after voices
- Book cover PNG dropped into `/assets/images/book-cover.png` (transparent, 3D mockup)
- Endorsements stripped of card styling — displayed cleanly in a row with no backgrounds/shadows

**Round 3 — Carousel and final polish:**
- Removed white box around book cover PNG — transparent PNG now sits directly on sand
- "More about the book" button changed from outline to pink (`btn--primary`)
- Built a voices carousel: quotes cycle one at a time with 600ms fade transitions, large pink decorative opening quote mark (`::before` pseudo-element, 5rem Fraunces), dot navigation, auto-advance every 6 seconds. Carousel pauses on dot click, then resumes. Six quotes: Darren → Craig → Christianne → Jeremy → Keith → Dave
- Endorsements moved above journal cards (now sits immediately under book)
- Journal cards aligned evenly (removed the `translateY(1.5rem)` stagger on second card)
- Category labels pluralised: Reflections, Voices, Conversations

**Homepage section order (at end of this session — see 2026-03-03 Nav/Naming/Transitions entry for latest):**
1. Hero (pink) — left-aligned, 60vh
2. The Project (sand) — centred, three-part arc
3. The Voices (dark) — carousel with single-quote crossfade
4. The Book (sand) — transparent cover PNG, pink CTA
5. Endorsements (sand) — three quotes in a row, no card styling
6. The Conversation So Far (sand) — three evenly-aligned journal cards
7. Email Capture (pink band)
8. Footer (dark)

**Dark/light rhythm:** PINK → SAND → DARK → SAND → SAND → SAND → PINK → DARK

**New components built:**
- `.voices-carousel` — Centred container with `max-width: 42rem`, houses the carousel inner, dots, and "Read more" link
- `.voices-carousel-inner` — Relative-positioned flex container (`min-height: 18rem`) holding absolutely-positioned slides
- `.voices-carousel-slide` — Absolute-positioned, `opacity: 0` by default, transitions to `opacity: 1` with `.is-active`
- `.voices-carousel-quote` — Fraunces display font, `clamp(text-lg, 3vw, text-2xl)`, white, `SOFT 40 WONK 0`
- `.voices-carousel-quote::before` — Large pink opening quote mark (`\201C`, 5rem)
- `.voices-carousel-dots` / `.voices-carousel-dot` — Flex row of 8px circles, white at 30% opacity, pink when active
- JS carousel logic in `main.js`: `goToSlide()`, `nextSlide()`, `startAutoplay()` / `stopAutoplay()` with `setInterval(6000ms)`

**CSS removed or changed:**
- `.book-cover-placeholder` stripped to minimal: `width: 100%; max-width: 14rem; margin-bottom: var(--space-7);` — no background, border, shadow, padding, or aspect-ratio
- `.endorsement-card` reduced to just `display: flex; flex-direction: column` — no surface/shadow/padding
- `.journal-card:nth-child(2)` stagger rule removed
- Declaration HTML removed from `index.html` (CSS still exists but is unused)

**Files changed:**
- `index.html` — Major restructure: section reordering, carousel HTML, declaration removed, endorsement/journal card markup simplified
- `css/styles.css` — New carousel component styles (~80 lines), stripped book-cover-placeholder, stripped endorsement-card, removed journal stagger
- `js/main.js` — Carousel logic added (goToSlide, nextSlide, autoplay with dot navigation)

**What we learned:**

1. **Three rounds is a natural rhythm.** Round 1 gets the bones right (layout, order). Round 2 strips back the unnecessary (declaration, card styling). Round 3 adds the one piece of delight that earns its complexity (carousel). Trying to do all three in one pass would have been slower — each round's decisions informed the next.

2. **Removing is often more impactful than adding.** The declaration section sounded great in isolation but wasn't earning its place between strong content sections. Removing it and moving the book up made the page flow faster and hit harder. Similarly, stripping card styling from endorsements made them feel classier.

3. **A single carousel quote is more impactful than a grid of six.** The grid made quotes compete for attention. The carousel gives each voice its full moment — one person, one statement, one breath. The pink quote mark frames it like a stage.

4. **Transparent PNGs need transparent containers.** The book cover PNG had a built-in 3D shadow, so the placeholder box (with its own background, border, and shadow) was fighting the image. Stripping the container to just width/margin let the PNG do its own work.

### 2026-03-03 — Navigation, Naming, Section Transitions & Carousel Rework

**What we did:** A broad pass across the entire site addressing navigation identity, naming consistency, section transitions, and carousel presentation. Work happened in two rounds — initial implementation followed by user feedback that reversed some decisions and refined others.

**Round 1 — Initial changes (all 10 HTML files + CSS):**
- Removed site-title ("STILL HERE! STILL QUEER") from nav across all pages — user felt it duplicated HOME
- Renamed "The Voices" to "Journal" in all nav bars, mobile navs, and footers across all 10 HTML files
- Changed homepage section labels: "The Project" → "About", "The Conversation So Far" → "Journal"
- Restructured voices carousel from 3 slides of paired quotes to 6 individual single-quote slides with new markup (`.voices-single-quote`, `.voices-single-quote-text`, `.voices-single-quote-meta`)
- Removed ISBN from book section, changed CTA button to `btn--outline-pink`
- Made interior page nav bars pink (added `body:not(.page-home)` CSS block)
- Updated book.html: removed "For Dan. My Nerf herder." from dedication, added actual `book-cover.png` image replacing text placeholder
- Enlarged book cover grid column from 14rem to 24rem

**Round 2 — User feedback and corrections:**
User reviewed and flagged several issues:
1. *"Not sure it was right to remove site-title"* — reinstated with full title "Still Here! Still Queer! Now What?" at same weight/size as nav links (`text-xs`, `font-weight: 500`, uppercase, muted colour)
2. *"Pink nav on other pages doesn't quite work"* — reverted interior nav to sand (removed entire `body:not(.page-home)` CSS block)
3. *"About" not right for the section title* — user chose "No label" from options; label removed entirely
4. *"Voices section doesn't quite work — too sparse"* — scaled up carousel quotes significantly: text from `text-2xl` to `clamp(text-2xl, 4.5vw, text-3xl)`, speech mark from 5rem to 6rem, more padding
5. *"Book button should be black outline/text"* — changed from `btn--outline-pink` to `btn--outline` (black border/text, white fill on hover)
6. *"Section breaks too harsh / clinical"* — user chose "Curved wave" from options; added CSS wave dividers using `clip-path: ellipse(55% 100%)` pseudo-elements between hero→sand, sand→dark, dark→sand, and before footer

**Carousel visibility fix:**
During visual verification, noticed inactive carousel slides were bleeding through as ghost text behind the active quote. Root cause: slides only used `opacity: 0` which still reserves render space. Fix: added `visibility: hidden` to base `.voices-carousel-slide` and `visibility: visible` to `.voices-carousel-slide.is-active`.

**Known issue — carousel JS/CSS mismatch (needs investigation):**
After applying the visibility fix, a JS diagnostic revealed a mismatch: slide 5 had the `.is-active` class but computed `opacity: 0` / `visibility: hidden`, while slide 2 (no `.is-active` class) showed `opacity: 1` / `visibility: visible`. This suggests either a CSS specificity conflict from residual old paired-carousel rules, or a stale style cache. The carousel auto-advances and appears to work visually on some slides but the underlying state is inconsistent. **Next session should investigate and fix this — check for competing CSS rules on `.voices-carousel-slide` and verify the JS `goToSlide()` logic matches the new single-quote markup.**

**CSS changes summary:**
- Site-title: `text-xs`, `font-weight: 500`, `letter-spacing: 0.08em`, uppercase, `color: var(--color-muted)` — same visual weight as nav links
- Homepage hero site-title: white; scrolled state: muted
- Footer site-title: white, `font-weight: 700`
- New `.btn--outline-pink` created (not currently used — book button uses `.btn--outline`)
- Single-quote carousel: `.voices-single-quote` with 6rem pink speech mark, `text-3xl` Fraunces quotes, `SOFT 40 WONK 0`
- Wave dividers: `::before`/`::after` pseudo-elements with `clip-path: ellipse`, 60px height (80px at 768px+)
- Endorsement name/title alignment: `padding-left: var(--space-8)` to align with quote text
- Book cover grid column: 24rem
- Carousel slides: `visibility: hidden`/`visible` added

**Files changed:**
- `index.html` — Site-title reinstated, labels changed, carousel restructured to 6 single-quote slides, book button class changed, journal label updated
- `about.html`, `book.html`, `podcast.html`, `events.html`, `contact.html` — Site-title reinstated, nav/footer "The Voices" → "Journal"
- `blog/index.html` — Site-title reinstated, title/label changed to "Journal"
- `blog/a-lost-generation.html`, `blog/the-philosophers-who-hated-us.html`, `blog/the-crush-you-didnt-know.html` — Site-title reinstated, nav/footer updated, "More from The Voices" → "More from the Journal"
- `podcast.html` — Body text "The Voices" → "the Journal"
- `book.html` — Dedication trimmed, actual cover image added
- `css/styles.css` — Site-title styles, wave dividers, single-quote carousel, visibility fix, endorsement alignment, book cover sizing, interior pink nav added then removed

**Homepage section order (updated):**
1. Hero (pink) — left-aligned, 60vh, wave divider at bottom
2. The Project (sand) — no label, centred, three-part arc with hand-drawn icons
3. The Voices (dark) — "THE VOICES" label, single-quote carousel with 6rem speech mark, wave dividers top and bottom
4. The Book (sand) — "THE BOOK" label, transparent cover PNG (24rem column), black outline CTA
5. Endorsements (sand) — "WHAT PEOPLE ARE SAYING" label, three quotes, no card styling
6. Journal (sand) — "JOURNAL" label, three evenly-aligned cards
7. Email Capture (pink band)
8. Footer (dark) — wave divider at top

**What we learned:**

1. **User feedback loops are essential — initial instincts aren't always right.** Removing the site-title felt like simplification but lost the book's identity from the nav. Pink interior navs felt like brand consistency but actually competed with content. Both were corrected quickly because the user could see them in context.

2. **Naming decisions ripple.** Changing "The Voices" to "Journal" touched 10 HTML files across nav, mobile nav, footer, body text, and "More from..." links. A simple rename is mechanically tedious but editorially significant — it changes how readers frame the content section.

3. **Wave dividers soften the page without adding content.** The curved transitions between colour bands (pink→sand, sand→dark, dark→sand) remove the hard horizontal lines that felt clinical. They're pure CSS (`clip-path: ellipse`) with no extra markup and scale responsively (60px mobile, 80px desktop).

4. **Carousel quote sizing needs to match the section's emotional weight.** The initial single-quote carousel was structurally correct but felt too small in the dark section. Scaling up to `text-3xl` with a 6rem speech mark gave each voice the stage presence it needed. The dark background and generous padding do the rest.

5. **Visibility, not just opacity, matters for stacked elements.** `opacity: 0` alone still allows elements to be rendered and interfere with layout/text rendering. Adding `visibility: hidden` properly removes inactive slides from the render tree. This is a common carousel gotcha.

### 2026-03-03 — Section Dividers Removed, Voices Breathing Room, Nav & Book Cover Fixes

**What we did:** Four targeted fixes addressing issues introduced or identified in the previous session's wave divider and navigation work.

**1. Curved section dividers removed (two-tone sand problem):**
The wave dividers added in the previous session used `clip-path: ellipse(55% 100%)` pseudo-elements with `background: var(--color-bg)` to create curved transitions between colour bands. Problem: the body has a paper grain texture overlay (`body::before` with SVG feTurbulence at `opacity: 0.28`), but the wave dividers painted flat sand — so where they met the textured background, two visibly different tones of sand appeared side by side. The fix was complete removal of all wave divider CSS (`.hero::after`, `.homepage-voices-grid::before`/`::after`, `.page-home .site-footer::before`, and the responsive height override). Sections now meet with clean hard edges, which works better with the textured background.

**2. Voices section given more breathing room:**
With the wave dividers gone, the Voices section already recovered 60–80px of space that was being consumed by the overlapping pseudo-elements. Additionally increased `.section--dark` padding from `var(--space-10)`/`var(--space-12)` (80px/128px) to `var(--space-11)`/`10rem` (96px/160px) mobile/desktop. Bumped `.voices-carousel--single .voices-carousel-inner` min-height from 14rem to 16rem. The rationale: these are human voices — the section should feel expansive, not compressed. The opposite of the book's sentiment.

**3. Interior page nav transparency fixed:**
The `.site-header` had no default `background` property — it relied on `.is-scrolled` (added by JS) to set `background: var(--color-bg)`. But the JS only triggers `is-scrolled` when a `.hero` element exists on the page, and interior pages (book, about, podcast, events, contact, blog) don't have heroes. Result: the header stayed transparent on all non-homepage pages, causing text to clash as the user scrolled. Fix: added `background: var(--color-bg)` to the base `.site-header` rule. The homepage overrides this to pink via `.page-home .site-header { background: var(--color-hero-bg) }`, so homepage behaviour is unaffected.

**4. Book cover on book.html enlarged (3x):**
The `.book-intro` grid on book.html had `grid-template-columns: 1fr 14rem`, giving the cover a narrow 224px column. Changed to `1fr 1fr` (equal halves) and increased `.book-cover-placeholder` max-width from 24rem to 42rem. The cover now takes half the page width at desktop, with the text alongside it. The cover is sticky (`position: sticky`) so it scrolls alongside the three-part descriptions. Gap increased from `var(--space-8)` to `var(--space-9)`.

**CSS changes summary:**
- Removed: all wave divider pseudo-elements and responsive height overrides (~55 lines)
- `.site-header`: added `background: var(--color-bg)` to base rule
- `.section--dark`: padding increased to `var(--space-11)` / `10rem`
- `.voices-carousel--single .voices-carousel-inner`: min-height 14rem → 16rem
- `.book-intro` grid: `1fr 14rem` → `1fr 1fr`, gap `var(--space-8)` → `var(--space-9)`
- `.book-cover-placeholder`: max-width 24rem → 42rem

**Files changed:**
- `css/styles.css` — all four fixes

**What we learned:**

1. **Texture and flat colour don't mix in overlapping elements.** The wave dividers looked fine in isolation but the paper grain overlay on the body created a visible seam. Any element that paints a flat background colour over a textured one will produce this mismatch. Either the overlay needs to cover everything (including pseudo-elements), or overlapping elements should be avoided entirely.

2. **Defensive CSS defaults matter.** The nav transparency bug was a classic case of relying on JS to set a visual state that should have been a CSS default. Interior pages had no hero, so the JS scroll watcher never fired, and the header had no fallback background. Setting the default in CSS and overriding for the homepage is the safer pattern.

3. **Emotional weight needs physical space.** The Voices section was structurally complete but felt compressed — the content needed more room to land. For a book about giving people permission to take up space, the design should do the same.

---

## Reflections on Process

### Design approach & preferences
- Charlie values **sophistication** — the demo felt better because it was more considered, not because it had more features. Details matter: nav size, letter-spacing, integration between header and hero.
- **Bold and expressive** doesn't mean busy. It means confident use of space, colour, and type. The pink hero filling 70vh with the title at the bottom is more expressive than adding animations or decorative elements.
- Rendered demos are essential for decision-making. ASCII mockups aren't sufficient — the user needs to see real fonts at real sizes.

### Workflow patterns
- The demo → scaffold → refine loop works well. The demo sets the bar, the scaffold gets the structure right, the refinement pass brings it up to the demo's quality.
- Collapsing design system + scaffold into one pass saved time but created a quality gap vs. the demos. Next time: scaffold should explicitly match the chosen demo, not just use the same variables.
- **A design audit step is essential** and shouldn't be optional. The first pass through design → scaffold → content produced work that was structurally correct and editorially strong but visually flat. It took stepping back and asking "does this design *feel* like this book?" to identify that the typography was the bottleneck. This audit step has been added to the repeatable process.
- **Full-context demos beat specimens.** The type test that worked was showing each typeface in the actual site components (pink hero, sand sections, dark band, real content) — not abstract glyph charts or type specimens. The decision became obvious immediately because the context did the work.
- **Variable fonts are an underused lever.** Fraunces's SOFT and WONK axes let the same typeface express different emotional registers across the site — sharp/defiant for heroes, soft/warm for pull-quotes. This is conceptually powerful and should be explored early in future projects when choosing typefaces.

---

## Skill Candidates

Tasks or workflows that, if systematised into Claude Code skills, could make future projects faster and more consistent.

| Candidate | What it would do | Status |
|---|---|---|
| `/tone-extract` | Given a manuscript (PDF/docx/text), run structured reading passes and produce a tone-of-voice reference document in a standard format | Identified |
| `/site-scaffold` | Given a CLAUDE.md with site architecture defined, generate the full file structure with boilerplate HTML, CSS and JS | Identified |
| `/endorsement-format` | Take raw endorsement text and output structured, designed endorsement components | Identified |
| `/copy-check` | Review draft site copy against the tone-of-voice document and flag mismatches | Identified |
| `/build-log-entry` | Prompt for what was done, decisions made, and reflections, then append a formatted entry to this log | Identified |
| `/book-digest` | Given a manuscript, produce a structured digest: chapter summaries, themes, frameworks, quotable lines, people/references | Identified |
| `/interviewee-extract` | Given a manuscript with attributed quotes, extract all voices into a structured reference table | Identified |
| `/type-demo` | Given a list of typeface pairings and sample content, generate a self-contained HTML comparison page with Google Fonts/Fontshare loaded, showing headline, nav, body, pull-quote, CTA, and endorsement for each pairing | Identified |
| `/palette-directions` | Given a tone-of-voice doc + brief + personality choice, generate 3–5 named emotional directions for colour. Each direction includes: name, 1-line description, emotional keywords it maps to from the tone doc, what it avoids, and a suggested light/dark bias. This is the *thinking* step — no hex values yet. | Identified |
| `/palette-demo` | Given a set of named palette directions + a typeface pairing, generate hex values for each functional colour role (bg, primary, muted, surface, dark, accent) with WCAG AA contrast, then render a self-contained HTML comparison page with swatches + preview for each. This is the *execution* step. | Identified |
| `/design-system` | Given a chosen palette and typeface pairing, generate a CSS file with custom properties (colours, type scale, spacing scale, component patterns) and base reset/typography styles | Identified |
| `/page-scaffold` | Given a CLAUDE.md site architecture and a design system CSS file, generate all HTML pages with shared header/footer/nav structure, semantic markup, and placeholder content sections | Identified |
| `/content-strategy` | Given a book digest and tone-of-voice doc, identify what content can be shared freely (themes, questions, cultural commentary, quotes) vs. what must be protected (frameworks, exercises, tools). Produce a content plan with post types, editorial calendar structure, and newsletter positioning | Identified |
| `/journal-post` | Given a content type (Voice/Reflection/Conversation/Reading), source material, and tone-of-voice doc, generate a production-quality journal post in the author's voice with appropriate structure (pull-quote, closing question, listen CTA, etc.) | Identified |
| `/design-audit` | Given a site's CSS, HTML, tone-of-voice doc, and brief, run a diagnostic analysis comparing the visual design's emotional temperature against the editorial temperature. Output a structured report: what's working, specific gaps (with evidence), prioritised recommendations. The analysis that produced `/docs/design-analysis.md` is the template. | **Built** — `.claude/commands/design-audit.md` |
| `/typeface-researcher` | Given a design brief, palette, and sample content, research candidate display typefaces across Google Fonts / Fontshare / commercial, shortlist 3–4 with rationale mapped to the project's voice, then generate a full-context HTML comparison page showing each in the actual site palette and components. Covers the full pipeline: brief → research → shortlist → rendered test. | **Built** — `.claude/commands/typeface-researcher.md` |
| `/variable-font-tune` | Given a variable font with custom axes (e.g. Fraunces SOFT/WONK, or weight/width/slant on others) and a set of component contexts (hero, pull-quote, card title, endorsement, provocation, etc.), generate a tuning table with recommended axis settings per context with rationale, then apply those settings to the CSS `font-variation-settings` declarations. | Identified |
| `/hero-workshop` | Given a book's key themes, tone-of-voice doc, and target reader, generate 5–10 candidate hero headlines. For each, provide: the line, what emotional register it hits, whether it's warm/defiant/both, and how it would set up the rest of the homepage. Then render the top 3 in the site's actual typeface and palette for visual comparison. The "Come home to your whole self / to the person you were before they told you to be someone else" two-part structure is the current benchmark. | Identified |
| `/design-analysis` | Given a completed site build, produce a structured design analysis document assessing visual-editorial alignment. Template: core problem statement, what's working (preserve list), numbered gaps with diagnosis/what's needed/status, priority order, relationship to other project docs. | Merged into `/design-audit` — the skill now covers both the diagnostic pass and the document output. |

> **Instruction:** Add to this table as new repeatable patterns emerge. For each candidate, note when it moves from "Identified" to "Built" or "Rejected" (with reasoning).

---

## Toward a Repeatable Process

The emerging shape of an author-platform build process:

1. **Brief & CLAUDE.md** — Define purpose, audience, architecture, constraints ✅
2. **Tone-of-voice extraction** — Read the manuscript, produce reference doc ✅
3. **Book digest & interviewee reference** — Structured content summary for use during build ✅
4. **Design direction** — Typography, palette, personality via rendered demos ✅
5. **Design system + scaffold** — CSS custom properties, all pages with shared structure ✅ *(steps 4–7 collapsed into one pass — worked well)*
6. **Content strategy** — Identify shareable vs. protected content, define editorial architecture ✅ *(new step, added after realising the scaffold needed a content plan before population)*
7. **Content population** — Journal posts, page reworks, podcast/about enrichment ✅
8. **Design audit** — Visual-editorial alignment check. Does the design match the voice? Produce a design analysis doc with gaps and priorities. ✅ *(new step — essential. The first pass through steps 4–7 produced "correct" design that lacked personality. The audit identified typography as the key lever and led to the Fraunces switch.)*
9. **Design refinement** — Address audit gaps iteratively: typography → texture/palette → visual surprise → imagery. ✅ *(All five gaps from the design analysis resolved or partially resolved. Image placeholders designed for one-line swap when assets arrive.)*
10. **Review & refine** — Copy check, accessibility audit, mobile testing
10. **Deploy** — GitHub Pages or equivalent

> **Instruction:** Refine this sequence as the build progresses. Note which steps could be parallelised, which are dependencies, and where the process breaks down or needs rethinking.
