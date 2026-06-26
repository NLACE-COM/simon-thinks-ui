# SIMON THINKS — Design System

> **Turn Knowledge into Decisions.**

The official brand & UI design system for **SIMON THINKS** — a cognitive
organizational system (B2B). It ships as a **framework-agnostic token sheet +
component library + media bank**, consumed by any project that renders HTML.

- **Tokens** drive everything (colors, type, spacing, radius, shadow, dark mode) — link one CSS file.
- **Components** are available as a compiled React/JSX bundle and as plain `.stk-*` CSS classes.
- **Media bank** provides shared images & video (high-res originals + web-optimized derivatives).

There is **no npm package and no build step required** to consume it — link the
CSS, copy the assets, or load the bundle. (The `@simonthinks/ds` import paths in
the framework guide are illustrative of how you'd alias it locally.)

---

## Table of contents

1. [Who this README is for](#who-this-readme-is-for)
2. [For AI agents (read this first)](#for-ai-agents-read-this-first)
3. [Quick start](#quick-start)
4. [Setup & Git LFS](#setup--git-lfs) — **required to get the media originals**
5. [Repository map](#repository-map)
6. [Consuming the system](#consuming-the-system) (HTML · Tailwind · Astro · Vue · Svelte · React)
7. [Design foundations](#design-foundations) (voice · color · type · icons · layout · motion)
8. [Components](#components)
9. [Media bank](#media-bank)
10. [Licensing & caveats](#licensing--caveats)
11. [Roadmap](#roadmap)

---

## Who this README is for

- **Humans** building product UI, marketing surfaces, decks, or prototypes on the SIMON THINKS brand.
- **AI agents** (Claude Code and similar) using this repo as a design skill to generate on-brand interfaces and assets.

This file is also the knowledge base for the bundled **Agent Skill** (`SKILL.md`).
Read it top to bottom to design correctly with the brand.

---

## For AI agents (read this first)

If you are an agent generating artifacts or production code with this system:

1. **Read order:** this `readme.md` → `styles.css` + `tokens/` → `integrations/README.md` → `components/` → `guidelines/*.card.html` (visual specimens).
2. **Source of truth is `styles.css`** (it `@import`s all tokens). Link it in every artifact so fonts and `--tokens` resolve.
3. **Mount React components** from the global the bundle defines: `window.SIMONTHINKSDesignSystem_ae45ac` (after loading `_ds_bundle.js`). For non-React output, use the `.stk-*` CSS classes from `integrations/stk-components.css`.
4. **No package manager.** Don't run `npm install`. Consume by linking files or copying the relevant `assets/`, `tokens/`, and CSS into the target project.
5. **Media:** ship from `assets/media/optimized/` (light), not the originals. The high-res `assets/media/images|videos/` files live in **Git LFS** — run `git lfs pull` if you only see pointer files. See [Media bank](#media-bank).
6. **Hold the brand rules:** Spanish-leading copy, English signature line; no emoji, no gradients, no glassmorphism; color is rationed (violet earns attention); module names are UPPERCASE. Full rules in [Design foundations](#design-foundations).
7. **Substitutions to respect:** display font is **Schibsted Grotesk** (stands in for the commercial Neue Montreal); the icon set is **HackerNoon Pixel Icon Library** (CC BY 4.0 — attribution required). See [Caveats](#licensing--caveats).

---

## Quick start

**Plain HTML, no build step:**

```html
<!-- 1. Tokens + fonts (required) -->
<link rel="stylesheet" href="styles.css" />
<!-- 2. Optional ready-made component classes -->
<link rel="stylesheet" href="integrations/stk-components.css" />

<button class="stk-btn stk-btn--primary">Solicitar demo</button>
<div class="stk-card stk-card--accent" data-theme="dark">Decisión activa</div>
```

**React (compiled bundle):**

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Card, Badge, ModuleNode } = window.SIMONTHINKSDesignSystem_ae45ac;
  // render with your React runtime
</script>
```

**Dark mode** is one attribute — `data-theme="dark"` on any ancestor (`<html>`, a section, a card). All semantic tokens and `.stk-*` classes re-resolve automatically.

For full per-framework wiring (Tailwind v3/v4, Astro, Vue/Nuxt, Svelte, React), see [`integrations/README.md`](integrations/README.md).

---

## Setup & Git LFS

The high-resolution media originals (`assets/media/images/`, `assets/media/videos/`)
are stored with **[Git LFS](https://git-lfs.com)** (≈206 MB). A normal clone gives
you small *pointer files* until you pull the real binaries.

```bash
# once per machine
brew install git-lfs        # macOS  (Linux: apt/dnf install git-lfs)
git lfs install

# clone, then fetch the originals
git clone https://github.com/NLACE-COM/simon-thinks-ui.git
cd simon-thinks-ui
git lfs pull
```

Already cloned without LFS? Run `git lfs install && git lfs pull`.

> If your host has no LFS, the lightweight `assets/media/optimized/` set (~40 MB)
> is enough for most projects — the originals can be fetched on demand or hosted
> on a CDN.

To (re)generate the optimized media derivatives you also need `webp` + `ffmpeg`
(`sips` is built into macOS): `brew install webp ffmpeg` — see [Media bank](#media-bank).

---

## Repository map

```
simon-thinks-ui/
├── styles.css                 # ENTRY POINT — @imports all tokens. Consumers link this.
├── _ds_bundle.js              # Compiled React/JSX component library
├── _ds_manifest.json          # Machine-readable index of components, tokens, cards
├── SKILL.md                   # Agent-Skill wrapper (for Claude Code)
│
├── tokens/                    # The single source of truth (CSS custom properties)
│   ├── fonts.css  colors.css  typography.css
│   ├── spacing.css  effects.css  icons.css
│
├── assets/                    # Brand assets
│   ├── logo-horizontal*.svg  logo-vertical*.svg  symbol*.svg   # + white/violet variants
│   ├── icons/                 # HackerNoon Pixel Icon font (iconfont.woff2/woff/ttf)
│   ├── ref/                   # Reference imagery
│   └── media/                 # ◀ Shared media bank — see its own README
│       ├── images/            #   27 high-res originals (.jpg)   · Git LFS
│       ├── videos/            #   16 high-res originals (.mp4)   · Git LFS
│       ├── optimized/         #   web-ready derivatives (ship these)
│       ├── optimize.sh        #   regenerates optimized/ from originals
│       └── README.md
│
├── components/                # JSX source (32 components)
│   ├── core/  forms/  navigation/  data/
│   ├── feedback/  charts/  icons/  brand/
│
├── guidelines/                # 26 visual specimen cards (*.card.html)
│
└── integrations/              # Framework wiring
    ├── tailwind.preset.js     # Tailwind v3 preset
    ├── tailwind.css           # Tailwind v4 @theme entry
    ├── stk-components.css     # framework-agnostic .stk-* classes
    └── README.md              # per-framework guide
```

---

## Consuming the system

The system has three layers — take only what you need. The single source of truth
is always `styles.css`, so a token change propagates everywhere (including Tailwind
utilities and dark mode).

| Layer | File | Use it for |
|---|---|---|
| **Tokens** (required) | `styles.css` | Fonts + every `--token` + dark theme |
| **Tailwind** | `integrations/tailwind.preset.js` (v3) · `integrations/tailwind.css` (v4) | Utility classes generated from tokens |
| **CSS components** | `integrations/stk-components.css` | Ready `.stk-*` classes — any non-React stack |
| **React components** | `_ds_bundle.js` → `window.SIMONTHINKSDesignSystem_ae45ac` | The full JSX component library |

`.stk-*` class reference (full list in [`integrations/README.md`](integrations/README.md)):

> `.stk-btn` (`--primary --secondary --ghost --subtle --danger`, `--sm --lg --block`) ·
> `.stk-card` (`--flat --raised --accent`, `--pad-sm --pad-lg`) ·
> `.stk-badge` (`--solid --neutral --success --warning --danger --info --dot`) ·
> `.stk-tag` · `.stk-field`/`.stk-label`/`.stk-input`/`.stk-select`/`.stk-textarea`/`.stk-hint` ·
> `.stk-check` · `.stk-switch` · `.stk-alert` · helpers `.stk-eyebrow .stk-display .stk-heading .stk-mono .stk-muted …`

---

## Design foundations

> **Guiding principle: claridad gráfica = claridad conceptual.**
> Minimalism, economy of form, a modular node language that aids cognition
> instead of saturating it. SIMON *reduces* — the design should too.

### Voice & copy

- **Bilingual, Spanish-leading.** Body and product copy are primarily Spanish; the master tagline is English (*"Turn Knowledge into Decisions"*). ES for substance, EN for the signature line / module names.
- **Tone:** calm, precise, intelligent — confident but never loud. One clear idea per surface.
- **Casing:** sentence case for UI and prose. Module names are **UPPERCASE** (THINK, CORE, CUSTOM, LIGHT). Eyebrows/labels are uppercase mono with wide tracking.
- **Person:** third person about the system (*"SIMON recuerda, razona, anticipa"*); collective address to the organization. Avoid hypey first-person AI (*"I can…"*).
- **Brand verbs:** recordar · razonar · anticipar · ordenar · estructurar · decidir. Triads recur (*"recuerda, razona, anticipa"*).
- **No emoji.** No exclamation-heavy marketing, no "revolucionario / game-changing" filler. Numbers only when they carry a real decision.

### Color — `tokens/colors.css`

- **Violet `#9D50FF`** — primary accent (humanity + technology with purpose). *Rationed:* it earns attention on the active/decisive element.
- **Blue `#002ADD`** — secondary brand color (links, context, the rare second voice).
- **Ink `#0F0E14` → light `#F6F6F6`** — all structure, type, surfaces. White `#FFFFFF`.
- **Status** (green/amber/red) — desaturated, used sparingly.
- **Semantic tokens** (`--bg-surface`, `--text-primary`, `--border-default`, …) re-resolve under `data-theme="dark"`; raw palette tokens (`--violet-500`, …) stay fixed.

### Type — `tokens/typography.css`

- **Figtree** — primary: UI, body, most headings (humanist-geometric, clear). **Exact.**
- **Schibsted Grotesk** — large display. ⚠️ *Substitute* for the brand's commercial **Neue Montreal** (see Caveats).
- **JetBrains Mono** — technical labels, node IDs, module tags.
- Scale **11 → 76px**; display tracking tight/negative; mono labels uppercase + wide tracking.

### Iconography

- **Primary set: HackerNoon Pixel Icon Library** — 578 glyphs on a 24px grid, two styles per glyph (*line* default / *solid*). Loaded as an icon font (`tokens/icons.css` → `assets/icons/iconfont.*`): `<i class="hn hn-search"></i>` or the `Icon` component. Color follows `currentColor`, size = font-size. **CC BY 4.0 — attribution required** (see Caveats).
- **Module glyphs:** THINK/CORE/CUSTOM/LIGHT have bespoke stroke glyphs baked into `ModuleNode`.
- **Brand mark:** the modular "S" symbol (`assets/symbol*.svg`) — app/avatar mark, never redrawn. **No emoji.** Mono unicode (`·`, `→`, `=`) is typographic connective tissue, not iconography.

### Layout, surfaces & elevation

- **4px modular grid** — blocks/nodes snap and align cleanly. Generous whitespace; one idea per region.
- **Backgrounds are flat** — white / `ink-50` in light, `ink-950/900` in dark. **No gradients**, no photographic hero washes, no textures. The brand's "imagery" is the modular node language itself (the media bank is for content surfaces, used with restraint).
- **Corners:** moderate rounding echoing the logo's interlocking blocks — `radius-md 10` for controls, `radius-lg 14` for cards.
- **Cards** are quiet: 1px `border-subtle`, optional soft shadow. The **active** card uses a violet glow (`--shadow-glow`), not a heavier shadow.
- **Shadows** restrained, cool-tinted (`--shadow-sm…xl`) — elevation for genuine layering, not decoration.

### Interaction & motion — `tokens/effects.css`

- **Hover:** subtle — backgrounds → `bg-subtle`, borders → `border-strong`, cards lift 1–2px.
- **Press:** ~0.5px nudge + darker violet (`accent-pressed`); no bounce.
- **Focus:** 3px violet ring (`--focus-ring`).
- **Motion:** calm and purposeful — `ease-out`/`ease-in-out`, 120–340ms. Cognition over spectacle: fades and short translates, **no bounce, no infinite loops** on content.
- **Transparency/blur:** rare (soft violet `color-mix` fills for active node surfaces). Not a glassmorphism brand.

---

## Components

Compiled into `_ds_bundle.js`, exposed on `window.SIMONTHINKSDesignSystem_ae45ac`.
Source JSX in `components/`; visual specimens in `guidelines/*.card.html`.

| Group | Components |
|---|---|
| **core/** | Button, IconButton, Badge, Tag, Avatar, AvatarGroup, Card |
| **forms/** | Input, Select, RadioGroup, Checkbox, Switch |
| **navigation/** | Tabs, Breadcrumb, Menu, Pagination |
| **data/** | Table (sortable), Accordion |
| **feedback/** | Alert, Toast (+ ToastStack), Modal, Drawer, Tooltip, Progress (+ ProgressRing), Skeleton |
| **charts/** | BarChart, LineChart, DonutChart, Sparkline (dependency-free SVG, brand palette) |
| **icons/** | **Icon** — HackerNoon Pixel Icon font, 578 glyphs × line/solid |
| **brand/** | **ModuleNode** (signature) — THINK · CORE · CUSTOM · LIGHT, active & idle |

`_ds_manifest.json` is the machine-readable index (components, every token, and the specimen cards with viewports).

---

## Media bank

`assets/media/` is a shared image & video library for **any** project on the system
— heros, backgrounds, social cards, decks, loaders, ambient loops.

```
assets/media/
├── images/      27 high-res originals (.jpg, up to 8K)   · Git LFS
├── videos/      16 high-res originals (.mp4)             · Git LFS
├── optimized/   web-ready derivatives  ◀ ship these
│   ├── images/  <name>-hero.webp (≤1600) · <name>-hero.jpg · <name>-card.webp (≤800)
│   └── videos/  <name>.mp4 (re-encoded) · <name>-poster.jpg
└── optimize.sh  regenerates optimized/ from the originals
```

**Pick the asset by use** — these originals are *high resolution*, so don't ship
more weight than the context needs:

| Use case | Use |
|---|---|
| 4K / print / true full-screen | `images/` **original** |
| Web hero / full-bleed section | `optimized/images/<name>-hero.webp` |
| Content block / grid card / thumbnail | `optimized/images/<name>-card.webp` |
| Non-WebP context (email, legacy) | `optimized/images/<name>-hero.jpg` |
| Background / ambient loop | `optimized/videos/<name>.mp4` |
| Video placeholder / lazy-load | `optimized/videos/<name>-poster.jpg` |
| Editing / re-encode master | `videos/` **original** |

Optimization cuts weight **≈206 MB → ≈40 MB** (e.g. a 46 MB clip → 3 MB; an 8K still → ~60 KB card).

```html
<!-- responsive still, card-sized, WebP with JPG fallback -->
<picture>
  <source srcset="assets/media/optimized/images/2150439135-card.webp" type="image/webp" />
  <img src="assets/media/optimized/images/2150439135-hero.jpg" alt="" loading="lazy" />
</picture>

<!-- ambient brand loop -->
<video src="assets/media/optimized/videos/0_Abstract_Iridescent_1280x720.mp4"
       poster="assets/media/optimized/videos/0_Abstract_Iridescent_1280x720-poster.jpg"
       autoplay muted loop playsinline></video>
```

Regenerate derivatives after adding originals: `cd assets/media && ./optimize.sh`
(needs `webp` + `ffmpeg`; tiers and quality are tunable at the top of the script).
Full inventory, brand-fit notes, and licensing in [`assets/media/README.md`](assets/media/README.md).

---

## Licensing & caveats

1. **Display font substitution (needs input):** the brand's secondary font **Neue Montreal** is commercial and unavailable as a webfont here — substituted with **Schibsted Grotesk** (closest free neo-grotesque). **Primary Figtree is exact.** Upload Neue Montreal `woff2` files to swap in pixel-exact display type.
2. **Icon set licensing:** **HackerNoon Pixel Icon Library** is **CC BY 4.0** — if shipped without a paid plan you must credit *"Icons by HackerNoon — pixeliconlibrary.com"* and link the license. A [Pro/Starter plan](https://pixeliconlibrary.com/license/) removes the attribution requirement.
3. **Media licensing:** the media bank holds third-party stock (Pexels / Getty Images / Google DeepMind and generated renders). **Verify each asset's license before public or commercial use** — Getty assets in particular may require a paid license.
4. **No product UI source:** there is no upstream codebase or Figma — product surfaces here are **brand-led originals** built from the brief, not reverse-engineered. UI kits & slides (below) are pending.
5. **Logo "color" files** were monochrome (all-black paths); violet & white variants were generated. Confirm the intended icon color in lockups.

---

## Roadmap

Not yet built:

- `ui_kits/app/` — SIMON product dashboard recreation
- `ui_kits/site/` — marketing site
- `slides/` — pitch slide templates

---

<div align="center">

**SIMON THINKS** · *Piensa con las organizaciones, no por encima de ellas.*

</div>
