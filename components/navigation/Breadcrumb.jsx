import React from 'react';

const CSS = `
.st-breadcrumb{font-family:var(--font-body);display:flex;align-items:center;flex-wrap:wrap;gap:var(--space-1)}
.st-breadcrumb__item{display:inline-flex;align-items:center;gap:var(--space-1);
  font-size:var(--text-sm);color:var(--text-secondary);text-decoration:none;
  padding:2px var(--space-2);border-radius:var(--radius-sm);
  transition:color var(--duration-fast) var(--ease-out),background var(--duration-fast) var(--ease-out)}
a.st-breadcrumb__item:hover{color:var(--text-primary);background:var(--bg-subtle)}
.st-breadcrumb__item--current{color:var(--text-primary);font-weight:var(--weight-semibold);cursor:default}
.st-breadcrumb__item__icon{width:15px;height:15px;display:inline-flex;color:var(--text-muted)}
.st-breadcrumb__sep{color:var(--text-muted);display:inline-flex;font-family:var(--font-mono);font-size:var(--text-2xs);user-select:none}
.st-breadcrumb__ellipsis{color:var(--text-muted);padding:0 2px;cursor:default}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-breadcrumb-css')) {
  const s = document.createElement('style'); s.id = 'st-breadcrumb-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Breadcrumb({ items = [], separator = '/', className = '' }) {
  const last = items.length - 1;
  return (
    <nav className={['st-breadcrumb', className].filter(Boolean).join(' ')} aria-label="Breadcrumb">
      {items.map((it, i) => {
        const isCurrent = i === last;
        const node = it.href && !isCurrent ? (
          <a key={`i${i}`} className="st-breadcrumb__item" href={it.href} onClick={it.onClick}>
            {it.icon && <span className="st-breadcrumb__item__icon">{it.icon}</span>}{it.label}
          </a>
        ) : (
          <span key={`i${i}`} className={['st-breadcrumb__item', isCurrent ? 'st-breadcrumb__item--current' : ''].filter(Boolean).join(' ')} aria-current={isCurrent ? 'page' : undefined}>
            {it.icon && <span className="st-breadcrumb__item__icon">{it.icon}</span>}{it.label}
          </span>
        );
        return (
          <React.Fragment key={i}>
            {node}
            {!isCurrent && <span className="st-breadcrumb__sep" aria-hidden="true">{separator}</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
