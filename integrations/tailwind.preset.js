/**
 * SIMON THINKS — Tailwind preset
 * ---------------------------------------------------------------------------
 * Works with Tailwind CSS v3 (and v4 via `@config`). It maps the design-system
 * tokens onto Tailwind's theme so you get utilities like `bg-violet-500`,
 * `text-3xl`, `rounded-lg`, `shadow-lg`, `font-display`, `tracking-wider`, and
 * the dark-mode-aware semantic classes `bg-surface`, `text-primary`, etc.
 *
 *   // tailwind.config.js  (v3)
 *   module.exports = { presets: [require('@simonthinks/ds/integrations/tailwind.preset.js')] }
 *
 * The RAW palette (violet / blue / ink / status) is emitted as hex so Tailwind's
 * opacity modifiers work (`bg-violet-500/40`). The SEMANTIC tokens are emitted as
 * `var(--token)` so they follow `[data-theme="dark"]` automatically.
 *
 * Requires the consumer to also load the DS stylesheet once (for fonts + the
 * semantic CSS variables + dark theme):  import '@simonthinks/ds/styles.css'
 */

const violet = {
  50: '#F4ECFF', 100: '#EADBFF', 200: '#D6B8FF', 300: '#C293FF', 400: '#AE6EFF',
  500: '#9D50FF', 600: '#883CF2', 700: '#7126D6', 800: '#561CA6', 900: '#3D1478',
};
const blue = {
  50: '#E8ECFF', 100: '#C9D2FF', 200: '#99A8FF', 300: '#6076FF', 400: '#2E48F2',
  500: '#002ADD', 600: '#0022B4', 700: '#001B8F', 800: '#00146B', 900: '#000E47',
};
const ink = {
  50: '#F6F6F6', 100: '#E9E9EC', 200: '#D6D5DA', 300: '#B0AEB6', 400: '#87858F',
  500: '#5D5B66', 600: '#403E49', 700: '#2D2B35', 800: '#201E27', 900: '#17161D', 950: '#0F0E14',
};

/** Semantic tokens — emitted as var() so dark mode (`[data-theme="dark"]`) applies. */
const semantic = {
  // surfaces
  canvas:   'var(--bg-canvas)',
  surface:  'var(--bg-surface)',
  subtle:   'var(--bg-subtle)',
  elevated: 'var(--bg-elevated)',
  inverse:  'var(--bg-inverse)',
  // text (also usable as text-* via the `text` key below)
  primary:   'var(--text-primary)',
  secondary: 'var(--text-secondary)',
  muted:     'var(--text-muted)',
  accent:    'var(--text-accent)',
  // borders
  'border-subtle':  'var(--border-subtle)',
  'border-default': 'var(--border-default)',
  'border-strong':  'var(--border-strong)',
};

const preset = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        violet, blue, ink,
        white: '#FFFFFF',
        // status
        success: '#1FA971',
        warning: '#E0962B',
        danger:  '#D64550',
        info:    '#4C6FE0',
        'success-soft': '#E4F5EE',
        'warning-soft': '#FBF0DD',
        'danger-soft':  '#FBE7E8',
        'info-soft':    '#E7ECFB',
        // brand alias
        brand: violet,
        // dark-mode-aware semantic tokens
        ...semantic,
      },
      fontFamily: {
        sans:    ['Figtree', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        body:    ['Figtree', 'system-ui', 'sans-serif'],
        display: ['Schibsted Grotesk', 'Figtree', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1.4' }],
        xs:   ['0.75rem',  { lineHeight: '1.5' }],
        sm:   ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem',     { lineHeight: '1.5' }],
        md:   ['1.125rem', { lineHeight: '1.5' }],
        lg:   ['1.25rem',  { lineHeight: '1.28' }],
        xl:   ['1.5rem',   { lineHeight: '1.28' }],
        '2xl':['1.875rem', { lineHeight: '1.2' }],
        '3xl':['2.25rem',  { lineHeight: '1.12' }],
        '4xl':['3rem',     { lineHeight: '1.08' }],
        '5xl':['3.75rem',  { lineHeight: '1.04' }],
        '6xl':['4.75rem',  { lineHeight: '0.98' }],
      },
      fontWeight: {
        light: '300', normal: '400', medium: '500',
        semibold: '600', bold: '700', extrabold: '800',
      },
      letterSpacing: {
        tighter: '-0.03em', tight: '-0.015em', normal: '0em',
        wide: '0.04em', wider: '0.12em',
      },
      lineHeight: {
        none: '1', tight: '1.12', snug: '1.28', normal: '1.5', relaxed: '1.68',
      },
      spacing: {
        1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.25rem',
        6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem', 16: '4rem',
        20: '5rem', 24: '6rem', 32: '8rem',
      },
      borderRadius: {
        xs: '4px', sm: '6px', md: '10px', lg: '14px',
        xl: '20px', '2xl': '28px', full: '999px', pill: '999px',
      },
      boxShadow: {
        xs:   '0 1px 2px rgba(11,11,15,0.05)',
        sm:   '0 1px 3px rgba(11,11,15,0.07), 0 1px 2px rgba(11,11,15,0.04)',
        md:   '0 4px 12px rgba(11,11,15,0.08), 0 1px 3px rgba(11,11,15,0.05)',
        lg:   '0 12px 32px rgba(11,11,15,0.10), 0 4px 10px rgba(11,11,15,0.05)',
        xl:   '0 24px 60px rgba(11,11,15,0.14)',
        glow: '0 0 0 1px color-mix(in srgb, #9D50FF 30%, transparent), 0 8px 28px color-mix(in srgb, #9D50FF 22%, transparent)',
      },
      maxWidth: {
        'container-sm': '640px', 'container-md': '840px', 'container-lg': '1080px',
        'container-xl': '1280px', 'container-2xl': '1440px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        'in-out': 'cubic-bezier(0.65, 0.05, 0.36, 1)',
      },
      transitionDuration: { fast: '120ms', base: '200ms', slow: '340ms' },
      ringColor: { accent: 'var(--violet-500)' },
    },
  },
};

/* Export guarded so this file is harmless if the DS compiler evaluates it in a
   non-CommonJS context (it would otherwise throw "module is not defined" and
   break the bundle emit). Tailwind's config loader uses CommonJS `require`. */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = preset;
}
if (typeof window !== 'undefined') {
  window.SIMONTHINKS_TW_PRESET = preset;
}

