import React from 'react';

const CSS = `
.st-tag{
  font-family:var(--font-mono);font-weight:500;font-size:var(--text-xs);line-height:1;
  display:inline-flex;align-items:center;gap:var(--space-1);
  padding:5px var(--space-2);border-radius:var(--radius-sm);
  background:var(--bg-subtle);color:var(--text-secondary);border:1px solid var(--border-subtle);
  transition:border-color var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out);
}
.st-tag--interactive{cursor:pointer}
.st-tag--interactive:hover{border-color:var(--border-strong);color:var(--text-primary)}
.st-tag--selected{background:var(--bg-accent-soft);color:var(--text-accent);border-color:color-mix(in srgb,var(--violet-500) 35%,transparent)}
.st-tag__x{display:inline-flex;cursor:pointer;opacity:.6;margin-left:2px}
.st-tag__x:hover{opacity:1}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-tag-css')) {
  const s = document.createElement('style'); s.id = 'st-tag-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tag({ children, selected = false, onRemove, onClick, className = '', ...rest }) {
  const interactive = !!onClick || selected;
  const cls = ['st-tag', interactive ? 'st-tag--interactive' : '', selected ? 'st-tag--selected' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} onClick={onClick} {...rest}>
      {children}
      {onRemove && (
        <span className="st-tag__x" role="button" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>×</span>
      )}
    </span>
  );
}
