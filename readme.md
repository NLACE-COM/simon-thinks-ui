# SIMON THINKS — Design System

> Turn Knowledge into Decisions.

This project is the brand & UI design system for **SIMON THINKS**, a cognitive
organizational system (B2B). It is consumed by other projects as a compiled
component library + token sheet. Link `styles.css` for tokens/fonts; mount
components from `window.SIMONTHINKSDesignSystem_ae45ac`.

---

## 1 · Company / product context

SIMON THINKS is **a cognitive organizational system — not a chatbot**. It helps
organizations overcome information overload by activating their own knowledge.
The name comes from Herbert Simon and *bounded rationality*: people can't process
all available information, so they decide with what they can reach. SIMON reduces
that complexity — it **remembers** past lessons, **reasons** in the present, and
**anticipates** what's coming.

- **Premise:** AI only adds value when it amplifies human intelligence — it thinks
  *with* organizations, not above them.
- **Purpose:** turn knowledge into decisions. Order information, structure
  knowledge, deliver clarity, remove noise.
- **Modular:** each module activates only when needed (economy of form, elements,
  attention).
- **Product architecture:** `IA → Memory + Context → THINK · CORE · CUSTOM · LIGHT → Decision (Smart & Innovate)`
- **Audience:** B2B organizations transforming internal knowledge into decisions.
- **Design implication / guiding principle:** **claridad gráfica = claridad
  conceptual.** Minimalism, economy of form, a language of modules/nodes that aid
  cognition instead of saturating it.

### Sources provided
- Brand brief (company description, supplied in-chat).
- Logo SVGs (uploaded): horizontal, vertical, and the modular "S" symbol — now in
  `assets/` (`logo-horizontal.svg`, `logo-vertical.svg`, `symbol.svg` + white/violet variants).
- The horizontal logo embeds the micro-tagline **"AI governance for real decisions."**
- No codebase or Figma was provided — product UI surfaces below are brand-led
  recreations built from the brief, not reverse-engineered from an existing app.

---

## 2 · Content fundamentals (voice & copy)

- **Bilingual, Spanish-leading.** Body and product copy are primarily Spanish; the
  master tagline is English ("Turn Knowledge into Decisions"). Mirror this: ES for
  substance, EN for the signature line / module names.
- **Tone:** calm, precise, intelligent. Confident but never loud. The brand
  *reduces* — copy should too. One clear idea per surface.
- **Casing:** sentence case for UI and prose. Module names are **UPPERCASE**
  (THINK, CORE, CUSTOM, LIGHT). Eyebrows/labels are uppercase mono with wide tracking.
- **Person:** speaks about the system in third person ("SIMON recuerda…,
  razona…, anticipa…") and to the organization collectively ("para que los equipos
  decidan mejor"). Avoid hypey first-person AI ("I can…").
- **Verbs of the brand:** recordar · razonar · anticipar · ordenar · estructurar ·
  decidir. Triads are a recurring rhetorical device ("recuerda, razona, anticipa").
- **No emoji.** No exclamation-heavy marketing. No "revolucionario / game-changing"
  filler. Numbers only when they carry a real decision.
- **Examples:**
  - Principle: *"Claridad gráfica = claridad conceptual."*
  - Value: *"Ordena información, estructura el conocimiento, entrega claridad y
    elimina ruido."*
  - Positioning: *"Piensa con las organizaciones, no por encima de ellas."*

---

## 3 · Visual foundations

- **Palette:** violet `#9D50FF` (humanity + technology with purpose) is the primary
  accent; deep blue `#002ADD` is the secondary brand color (links, context, the rare
  second voice); **ink** `#0F0E14` (cool near-black → light `#F6F6F6`) for all
  structure; white `#FFFFFF`. Color is *rationed* — violet earns attention on the
  active/decisive element. Desaturated support colors (green/amber/red) exist for
  status but are used sparingly. See `tokens/colors.css`.
- **Type:** **Figtree** (primary — UI, body, most headings; humanist-geometric,
  clear). **Schibsted Grotesk** for large display (⚠️ *substitute* for the brand's
  **Neue Montreal**, which is a commercial Pangram Pangram font — see Caveats).
  **JetBrains Mono** for technical labels, node IDs, module tags. Scale 11→76px,
  display tracking tight/negative, mono labels uppercase + wide tracking.
- **Layout:** 4px modular grid; everything snaps so blocks/nodes align cleanly
  (economy of form). Generous whitespace; one idea per region.
- **Backgrounds:** flat. White / `ink-50` canvas in light; `ink-950/900` in dark.
  **No gradients**, no photographic hero washes, no textures. The "imagery" of the
  brand is the modular node language itself.
- **Corners / cards:** moderate rounding echoing the logo's interlocking blocks
  (`radius-md 10` for controls, `radius-lg 14` for cards). Cards are quiet: 1px
  `border-subtle`, optional soft shadow. The **active** card uses a violet glow
  (`--shadow-glow`) rather than a heavier shadow.
- **Shadows:** restrained, cool-tinted (`--shadow-sm…xl`). Elevation is for
  genuine layering, not decoration.
- **Borders:** 1px hairlines (`border-subtle/default/strong`); violet border marks
  selection/focus.
- **Iconography:** **HackerNoon Pixel Icon Library** as the primary set — 578 glyphs
  on a 24px grid, two styles per glyph (*line* default / *solid*). Loaded as an icon
  font (`tokens/icons.css` → `assets/icons/iconfont.*`): `<i class="hn hn-search">` or
  the `Icon` component. The retro/pixel character is intentional brand voice; color
  follows `currentColor`, size = font-size. Icons are **CC BY 4.0** — attribution
  required (see Caveats).
- **Hover:** subtle — backgrounds shift to `bg-subtle`, borders to `border-strong`,
  cards lift 1–2px. **Press:** ~0.5px nudge + darker violet (`accent-pressed`); no
  bounce. **Focus:** 3px violet ring (`--focus-ring`).
- **Motion:** calm and purposeful — `ease-out`/`ease-in-out`, 120–340ms. Cognition
  over spectacle: fades and short translates, **no bounce, no infinite loops** on
  content.
- **Transparency/blur:** used rarely (soft violet `color-mix` fills for active node
  surfaces); not a glassmorphism brand.

---

## 4 · Iconography

- **System:** **Lucide** (CDN) — minimal, geometric, consistent 2px stroke, rounded
  caps/joins. This is a **substitute** flagged for review: no proprietary icon set
  was provided. It matches the brand's economy-of-form line quality well.
  Load: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`.
- **Stroke icons only** — no filled/duotone, no multicolor. Inherit `currentColor`;
  default to `--text-secondary`, violet only when active.
- **Module glyphs:** the four modules (THINK/CORE/CUSTOM/LIGHT) have bespoke stroke
  glyphs baked into `ModuleNode` (brain / chip-core / config-node / bolt), matching
  Lucide's weight.
- **Brand mark:** the modular "S" symbol (`assets/symbol*.svg`) — used as app/avatar
  mark, never redrawn. **No emoji.** Mono unicode (`·`, `→`, `=`) appears in copy as
  typographic connective tissue, not as iconography.

---

## 5 · Index / manifest

**Root**
- `styles.css` — entry point (@imports only). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/` — logos (`logo-horizontal*`, `logo-vertical*`), symbol (`symbol*`),
  white & violet variants.
- `guidelines/` — foundation specimen cards (Brand, Colors, Type, Spacing).
- `SKILL.md` — Agent-Skill wrapper for downloading into Claude Code.

**Components** (`window.SIMONTHINKSDesignSystem_ae45ac`)
- `components/core/` — Button, IconButton, Badge, Tag, Avatar, AvatarGroup, Card
- `components/forms/` — Input, Select, RadioGroup, Checkbox, Switch
- `components/navigation/` — Tabs, Breadcrumb, Menu, Pagination
- `components/data/` — Table (sortable), Accordion
- `components/feedback/` — Alert, Toast (+ ToastStack), Modal, Drawer, Tooltip, Progress (+ ProgressRing), Skeleton
- `components/charts/` — BarChart, LineChart, DonutChart, Sparkline
- `components/icons/` — **Icon** (HackerNoon Pixel Icon font, 578 glyphs × line/solid)
- `components/brand/` — **ModuleNode** (signature)

**Framework integration** (`integrations/`)
- `tailwind.preset.js` — Tailwind v3 preset (tokens → utilities)
- `tailwind.css` — Tailwind v4 `@theme` entry
- `stk-components.css` — framework-agnostic `.stk-*` classes (Astro/Vue/Svelte/HTML)
- `README.md` — per-framework wiring (Tailwind · Astro · Vue · Svelte · React · HTML)

**Not yet built (next steps — see Caveats):**
- `ui_kits/app/` — SIMON product dashboard recreation
- `ui_kits/site/` — marketing site
- `slides/` — pitch slide templates

---

## 6 · Caveats & open questions

1. **Font substitution (needs your input):** the brand's secondary font **Neue
   Montreal** is commercial and unavailable as a webfont here. I substituted
   **Schibsted Grotesk** (closest free neo-grotesque). **Primary Figtree is exact.**
   → *Please upload Neue Montreal web files (woff2) if you want pixel-exact display
   type, and I'll swap it in.*
2. **Icon set:** **HackerNoon Pixel Icon Library** is the primary set (578 glyphs,
   line/solid). Licensed **CC BY 4.0** — if shipped without a paid plan you must
   credit “Icons by HackerNoon — pixeliconlibrary.com” and link the license. A
   [Pro/Starter plan](https://pixeliconlibrary.com/license/) removes the attribution
   requirement. Files under `assets/icons/` + `tokens/icons.css`.
3. **No product UI source:** there's no codebase/Figma, so UI kits & slides are
   pending and would be **brand-led originals**, not recreations. Confirm you want
   me to design them from the brand (vs. you sharing real product screens/Figma).
4. **Logo "color" files** are actually monochrome (all-black paths); I generated
   violet & white variants. Confirm the intended icon color in lockups.
