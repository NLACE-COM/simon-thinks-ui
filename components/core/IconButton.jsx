import React from 'react';

const CSS = `
.st-iconbtn{
  display:inline-flex;align-items:center;justify-content:center;flex:none;
  border:1px solid transparent;border-radius:var(--radius-md);cursor:pointer;
  color:var(--text-secondary);background:transparent;
  transition:background var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);
}
.st-iconbtn:hover:not([disabled]){background:var(--bg-subtle);color:var(--text-primary)}
.st-iconbtn:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.st-iconbtn[disabled]{opacity:.4;cursor:not-allowed}
.st-iconbtn--sm{width:32px;height:32px}
.st-iconbtn--md{width:40px;height:40px}
.st-iconbtn--lg{width:48px;height:48px}
.st-iconbtn--outline{border-color:var(--border-default);background:var(--bg-surface)}
.st-iconbtn--outline:hover:not([disabled]){border-color:var(--border-strong)}
.st-iconbtn--solid{background:var(--bg-accent);color:var(--text-on-accent)}
.st-iconbtn--solid:hover:not([disabled]){background:var(--bg-accent-hover);color:var(--text-on-accent)}
.st-iconbtn svg{width:1.15em;height:1.15em;font-size:var(--text-base)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-iconbtn-css')) {
  const s = document.createElement('style'); s.id = 'st-iconbtn-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function IconButton({ children, label, variant = 'ghost', size = 'md', disabled = false, className = '', ...rest }) {
  const cls = ['st-iconbtn', `st-iconbtn--${variant}`, `st-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return (
    <button type="button" className={cls} aria-label={label} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
