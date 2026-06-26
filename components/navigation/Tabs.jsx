import React from 'react';

const CSS = `
.st-tabs{font-family:var(--font-body);display:flex;gap:var(--space-1);border-bottom:1px solid var(--border-subtle)}
.st-tabs--pills{border-bottom:none;gap:var(--space-2);background:var(--bg-subtle);padding:var(--space-1);border-radius:var(--radius-md);display:inline-flex}
.st-tab{
  font-family:var(--font-body);font-size:var(--text-sm);font-weight:var(--weight-medium);
  color:var(--text-secondary);background:none;border:none;cursor:pointer;
  padding:var(--space-3) var(--space-3);position:relative;display:inline-flex;align-items:center;gap:var(--space-2);
  transition:color var(--duration-fast) var(--ease-out);
}
.st-tab:hover{color:var(--text-primary)}
.st-tab--active{color:var(--text-primary);font-weight:var(--weight-semibold)}
.st-tab--active::after{content:"";position:absolute;left:var(--space-3);right:var(--space-3);bottom:-1px;height:2px;background:var(--violet-500);border-radius:var(--radius-pill)}
.st-tab__count{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted);background:var(--bg-subtle);border-radius:var(--radius-sm);padding:1px 6px}
.st-tabs--pills .st-tab{border-radius:var(--radius-sm);padding:var(--space-2) var(--space-3)}
.st-tabs--pills .st-tab--active{background:var(--bg-surface);box-shadow:var(--shadow-xs)}
.st-tabs--pills .st-tab--active::after{display:none}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-tabs-css')) {
  const s = document.createElement('style'); s.id = 'st-tabs-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tabs({ items = [], value, onChange, variant = 'underline', className = '' }) {
  const active = value ?? (items[0] && items[0].value);
  return (
    <div className={['st-tabs', variant === 'pills' ? 'st-tabs--pills' : '', className].filter(Boolean).join(' ')} role="tablist">
      {items.map(it => {
        const isActive = it.value === active;
        return (
          <button key={it.value} role="tab" aria-selected={isActive}
            className={['st-tab', isActive ? 'st-tab--active' : ''].filter(Boolean).join(' ')}
            onClick={() => onChange && onChange(it.value)}>
            {it.icon}
            {it.label}
            {it.count != null && <span className="st-tab__count">{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
