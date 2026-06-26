import React from 'react';

const CSS = `
.st-alert{font-family:var(--font-body);display:flex;gap:var(--space-3);align-items:flex-start;
  padding:var(--space-4);border-radius:var(--radius-md);border:1px solid var(--border-default);
  background:var(--bg-surface);color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-snug)}
.st-alert__icon{flex:none;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;margin-top:1px;color:var(--text-accent)}
.st-alert__body{flex:1;display:flex;flex-direction:column;gap:2px;min-width:0}
.st-alert__title{font-weight:var(--weight-semibold);color:var(--text-primary);letter-spacing:var(--tracking-tight)}
.st-alert__close{flex:none;background:none;border:none;cursor:pointer;color:var(--text-muted);
  padding:2px;border-radius:var(--radius-xs);line-height:0;display:inline-flex}
.st-alert__close:hover{color:var(--text-primary);background:var(--bg-subtle)}
.st-alert--info{background:var(--context-soft);border-color:color-mix(in srgb,var(--context-500) 35%,transparent)}
.st-alert--info .st-alert__icon{color:#2E4DB0}
.st-alert--success{background:var(--green-soft);border-color:color-mix(in srgb,var(--green-500) 35%,transparent)}
.st-alert--success .st-alert__icon{color:#0E7A4E}
.st-alert--warning{background:var(--amber-soft);border-color:color-mix(in srgb,var(--amber-500) 35%,transparent)}
.st-alert--warning .st-alert__icon{color:#9A6212}
.st-alert--danger{background:var(--red-soft);border-color:color-mix(in srgb,var(--red-500) 35%,transparent)}
.st-alert--danger .st-alert__icon{color:#A52A33}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-alert-css')) {
  const s = document.createElement('style'); s.id = 'st-alert-css'; s.textContent = CSS; document.head.appendChild(s);
}

const GLYPH = { info: 'i', success: '✓', warning: '!', danger: '×' };

export function Alert({ variant = 'info', title, icon, onClose, children, className = '', ...rest }) {
  const cls = ['st-alert', `st-alert--${variant}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} role={variant === 'danger' ? 'alert' : 'status'} {...rest}>
      <span className="st-alert__icon" aria-hidden="true">{icon ?? <b style={{ fontFamily: 'var(--font-mono)' }}>{GLYPH[variant]}</b>}</span>
      <div className="st-alert__body">
        {title && <span className="st-alert__title">{title}</span>}
        {children && <span>{children}</span>}
      </div>
      {onClose && (
        <button className="st-alert__close" aria-label="Cerrar" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      )}
    </div>
  );
}
