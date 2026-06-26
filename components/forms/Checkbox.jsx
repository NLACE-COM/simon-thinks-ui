import React from 'react';

const CSS = `
.st-check{font-family:var(--font-body);display:inline-flex;align-items:flex-start;gap:var(--space-3);cursor:pointer;user-select:none}
.st-check input{position:absolute;opacity:0;width:0;height:0}
.st-check__box{
  width:18px;height:18px;flex:none;margin-top:1px;border-radius:var(--radius-xs);
  border:1.5px solid var(--border-strong);background:var(--bg-surface);
  display:inline-flex;align-items:center;justify-content:center;color:#fff;
  transition:background var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out);
}
.st-check__box svg{width:12px;height:12px;opacity:0;transform:scale(.7);transition:opacity var(--duration-fast) var(--ease-out),transform var(--duration-fast) var(--ease-out)}
.st-check:hover input:not(:disabled) ~ .st-check__box{border-color:var(--violet-500)}
.st-check input:checked ~ .st-check__box{background:var(--violet-500);border-color:var(--violet-500)}
.st-check input:checked ~ .st-check__box svg{opacity:1;transform:scale(1)}
.st-check input:focus-visible ~ .st-check__box{box-shadow:var(--focus-ring)}
.st-check input:disabled ~ .st-check__box{background:var(--bg-subtle);border-color:var(--border-default)}
.st-check--disabled{cursor:not-allowed;opacity:.55}
.st-check__text{display:flex;flex-direction:column;gap:1px}
.st-check__label{font-size:var(--text-sm);color:var(--text-primary)}
.st-check__desc{font-size:var(--text-xs);color:var(--text-secondary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-check-css')) {
  const s = document.createElement('style'); s.id = 'st-check-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Checkbox({ label, description, disabled = false, className = '', ...rest }) {
  return (
    <label className={['st-check', disabled ? 'st-check--disabled' : '', className].filter(Boolean).join(' ')}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="st-check__box" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      {(label || description) && (
        <span className="st-check__text">
          {label && <span className="st-check__label">{label}</span>}
          {description && <span className="st-check__desc">{description}</span>}
        </span>
      )}
    </label>
  );
}
