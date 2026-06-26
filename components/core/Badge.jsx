import React from 'react';

const CSS = `
.st-badge{
  font-family:var(--font-body);font-weight:var(--weight-semibold);
  display:inline-flex;align-items:center;gap:var(--space-1);
  font-size:var(--text-2xs);line-height:1;letter-spacing:var(--tracking-wide);
  padding:3px var(--space-2);border-radius:var(--radius-sm);border:1px solid transparent;
}
.st-badge--dot::before{content:"";width:6px;height:6px;border-radius:var(--radius-pill);background:currentColor;flex:none}
.st-badge--neutral{background:var(--bg-subtle);color:var(--text-secondary);border-color:var(--border-subtle)}
.st-badge--accent{background:var(--bg-accent-soft);color:var(--text-accent);border-color:color-mix(in srgb,var(--violet-500) 22%,transparent)}
.st-badge--solid{background:var(--bg-accent);color:var(--text-on-accent)}
.st-badge--success{background:var(--green-soft);color:#1c7a52}
.st-badge--warning{background:var(--amber-soft);color:#946312}
.st-badge--danger{background:var(--red-soft);color:#a8322f}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-badge-css')) {
  const s = document.createElement('style'); s.id = 'st-badge-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Badge({ children, variant = 'neutral', dot = false, className = '', ...rest }) {
  const cls = ['st-badge', `st-badge--${variant}`, dot ? 'st-badge--dot' : '', className].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{children}</span>;
}
