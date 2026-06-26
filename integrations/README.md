# SIMON THINKS — Framework integration

The design system is built on **framework-agnostic CSS custom properties** (tokens),
so it drops into anything that renders HTML. There are three layers — pick what you need:

| Layer | File | Use it for |
|---|---|---|
| **Tokens** (required) | `styles.css` | Fonts + every `--token` (colors, type, spacing, radius, shadow) + dark theme |
| **Tailwind** | `integrations/tailwind.preset.js` (v3) · `integrations/tailwind.css` (v4) | Utility classes generated from the tokens |
| **CSS components** | `integrations/stk-components.css` | Ready `.st-*` classes (button, card, badge, input…) — for any non-React stack |
| **React components** | `_ds_bundle.js` → `window.SIMONTHINKSDesignSystem_*` | The full JSX component library |

The single source of truth is always `styles.css`. Everything else maps onto it, so a token
change propagates everywhere — including through Tailwind utilities and dark mode.

---

## 1 · Plain HTML / CDN (no build step)

```html
<link rel="stylesheet" href="https://cdn.../styles.css">
<link rel="stylesheet" href="https://cdn.../integrations/stk-components.css">

<button class="stk-btn stk-btn--primary">Solicitar demo</button>
<div class="stk-card stk-card--accent">…</div>
```

Dark mode: set `data-theme="dark"` on any ancestor (`<html>`, a section, a card).

---

## 2 · Tailwind CSS

### v4 (CSS-first)
```css
/* app.css */
@import "@simonthinks/ds/integrations/tailwind.css";
```
```html
<div class="bg-surface text-primary rounded-lg shadow-md font-display tracking-tighter">…</div>
<div data-theme="dark" class="bg-canvas">dark:… variants work too</div>
```

### v3 (config preset)
```js
// tailwind.config.js
module.exports = {
  presets: [require('@simonthinks/ds/integrations/tailwind.preset.js')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
};
```
```js
// entry, once:
import '@simonthinks/ds/styles.css';
```
Utilities: `bg-violet-500`, `text-3xl`, `font-mono`, `rounded-xl`, `shadow-lg`, `tracking-wider`,
plus dark-aware semantics `bg-surface` / `text-primary` / `border-default`. Opacity modifiers
(`bg-violet-500/40`) work on the raw palette.

---

## 3 · Astro

```astro
---
// src/layouts/Base.astro
import '@simonthinks/ds/styles.css';
import '@simonthinks/ds/integrations/stk-components.css'; // optional CSS components
---
<html data-theme="light">
  <body>
    <button class="stk-btn stk-btn--primary">Empezar</button>
    <slot />
  </body>
</html>
```
Using Tailwind in Astro? Add the preset/`@import` above — both work. React islands can also
consume the JSX components directly via `client:*` directives.

---

## 4 · Vue / Nuxt

```js
// main.js
import '@simonthinks/ds/styles.css';
import '@simonthinks/ds/integrations/stk-components.css';
```
```vue
<template>
  <button class="stk-btn stk-btn--primary">Guardar</button>
  <span class="stk-badge stk-badge--success stk-badge--dot">Aprobado</span>
</template>
```

---

## 5 · Svelte / SvelteKit

```js
// +layout.svelte  or  app entry
import '@simonthinks/ds/styles.css';
import '@simonthinks/ds/integrations/stk-components.css';
```
```svelte
<button class="stk-btn stk-btn--ghost">Cancelar</button>
```

---

## 6 · React

```jsx
import '@simonthinks/ds/styles.css';
// then either the CSS classes above, Tailwind, or the JSX library:
const { Button, Card, Badge } = window.SIMONTHINKSDesignSystem; // from _ds_bundle.js
```

---

## Dark mode

A single attribute drives the whole semantic layer — no class swaps per element:

```html
<html data-theme="dark">      <!-- whole app -->
<section data-theme="dark">   <!-- one region -->
```
Semantic tokens (`--bg-surface`, `--text-primary`, `--border-default`, the `surface`/`primary`
Tailwind colors, and the `.st-*` classes) all re-resolve automatically. Raw palette tokens
(`--violet-500`, etc.) stay fixed.

## CSS component class reference

`.stk-btn` (`--primary --secondary --ghost --subtle --danger`, `--sm --lg --block`) ·
`.stk-card` (`--flat --raised --accent`, `--pad-sm --pad-lg`) ·
`.stk-badge` (`--solid --neutral --success --warning --danger --info --dot`) ·
`.stk-tag` (`--mono`) · `.stk-field` / `.stk-label` / `.stk-input` / `.stk-select` / `.stk-textarea` /
`.stk-hint` (`--error`) · `.stk-check` · `.stk-switch` (`> .stk-track`) ·
`.stk-alert` (`--success --warning --danger --info`) ·
helpers: `.stk-eyebrow .stk-display .stk-heading .stk-mono .stk-muted .stk-surface .stk-canvas .stk-inverse .stk-divider`
