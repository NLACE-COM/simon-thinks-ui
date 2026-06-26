import React from 'react';

/* SIMON THINKS — Icon
   Thin wrapper over the HackerNoon Pixel Icon font (loaded globally via
   tokens/icons.css). Renders an <i class="hn hn-<name>[-solid]">. Color follows
   currentColor; size is font-size in px. No per-component CSS to inject — the
   glyph classes live in the global stylesheet. */

export function Icon({ name, solid = false, size = 18, color, title, className = '', style, ...rest }) {
  const cls = ['hn', `hn-${name}${solid ? '-solid' : ''}`, className].filter(Boolean).join(' ');
  const a11y = title
    ? { role: 'img', 'aria-label': title, title }
    : { 'aria-hidden': true };
  return <i className={cls} style={{ fontSize: typeof size === 'number' ? `${size}px` : size, color, ...style }} {...a11y} {...rest} />;
}
