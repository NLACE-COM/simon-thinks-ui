import React from 'react';

const CSS = `
.st-card{
  font-family:var(--font-body);background:var(--bg-surface);
  border:1px solid var(--border-subtle);border-radius:var(--radius-lg);
  display:flex;flex-direction:column;
  transition:border-color var(--duration-base) var(--ease-out),box-shadow var(--duration-base) var(--ease-out),transform var(--duration-base) var(--ease-out);
}
.st-card--padded{padding:var(--space-5)}
.st-card--flat{box-shadow:none}
.st-card--raised{box-shadow:var(--shadow-md)}
.st-card--interactive{cursor:pointer}
.st-card--interactive:hover{border-color:var(--border-strong);box-shadow:var(--shadow-md);transform:translateY(-1px)}
.st-card--accent{border-color:color-mix(in srgb,var(--violet-500) 30%,transparent);box-shadow:var(--shadow-glow)}
.st-card__header{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);margin-bottom:var(--space-3)}
.st-card__title{font-weight:var(--weight-semibold);font-size:var(--text-md);color:var(--text-primary);letter-spacing:var(--tracking-tight);margin:0}
.st-card__sub{font-size:var(--text-sm);color:var(--text-secondary);margin:2px 0 0}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-card-css')) {
  const s = document.createElement('style'); s.id = 'st-card-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Card({
  children, title, subtitle, action, padded = true,
  elevation = 'flat', accent = false, interactive = false,
  className = '', ...rest
}) {
  const cls = [
    'st-card', padded ? 'st-card--padded' : '',
    `st-card--${elevation}`, accent ? 'st-card--accent' : '',
    interactive ? 'st-card--interactive' : '', className,
  ].filter(Boolean).join(' ');
  const hasHeader = title || subtitle || action;
  return (
    <div className={cls} {...rest}>
      {hasHeader && (
        <div className="st-card__header">
          <div>
            {title && <p className="st-card__title">{title}</p>}
            {subtitle && <p className="st-card__sub">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
