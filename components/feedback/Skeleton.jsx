import React from 'react';

const CSS = `
.st-skeleton{display:block;background:var(--bg-subtle);position:relative;overflow:hidden;border-radius:var(--radius-sm)}
.st-skeleton::after{content:"";position:absolute;inset:0;transform:translateX(-100%);
  background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--ink-300) 22%,transparent),transparent);
  animation:st-shimmer 1.4s var(--ease-in-out) infinite}
@keyframes st-shimmer{100%{transform:translateX(100%)}}
.st-skeleton--text{height:0.72em;border-radius:var(--radius-xs);margin:0.18em 0}
.st-skeleton--circle{border-radius:var(--radius-pill)}
.st-skeleton--rect{border-radius:var(--radius-md)}
.st-skeleton-group{display:flex;flex-direction:column;gap:var(--space-2)}
@media (prefers-reduced-motion:reduce){.st-skeleton::after{animation:none}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-skeleton-css')) {
  const s = document.createElement('style'); s.id = 'st-skeleton-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Skeleton({ variant = 'rect', width, height, lines = 1, className = '', style, ...rest }) {
  if (variant === 'text' && lines > 1) {
    return (
      <span className="st-skeleton-group" {...rest}>
        {Array.from({ length: lines }).map((_, i) => (
          <span key={i} className="st-skeleton st-skeleton--text"
            style={{ width: i === lines - 1 ? '65%' : (width || '100%') }} />
        ))}
      </span>
    );
  }
  const cls = ['st-skeleton', `st-skeleton--${variant}`, className].filter(Boolean).join(' ');
  const s = { width, height: variant === 'circle' ? (height || width) : height, ...style };
  return <span className={cls} style={s} {...rest} />;
}
