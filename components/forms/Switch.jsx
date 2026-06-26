import React from 'react';

const CSS = `
.st-switch{font-family:var(--font-body);display:inline-flex;align-items:center;gap:var(--space-3);cursor:pointer;user-select:none}
.st-switch input{position:absolute;opacity:0;width:0;height:0}
.st-switch__track{
  width:40px;height:24px;border-radius:var(--radius-pill);background:var(--ink-300);
  position:relative;flex:none;transition:background var(--duration-base) var(--ease-out);
}
.st-switch__thumb{
  position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:var(--radius-pill);
  background:#fff;box-shadow:var(--shadow-sm);
  transition:transform var(--duration-base) var(--ease-out);
}
.st-switch input:checked ~ .st-switch__track{background:var(--violet-500)}
.st-switch input:checked ~ .st-switch__track .st-switch__thumb{transform:translateX(16px)}
.st-switch input:focus-visible ~ .st-switch__track{box-shadow:var(--focus-ring)}
.st-switch input:disabled ~ .st-switch__track{opacity:.5}
.st-switch--disabled{cursor:not-allowed}
.st-switch__label{font-size:var(--text-sm);color:var(--text-primary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-switch-css')) {
  const s = document.createElement('style'); s.id = 'st-switch-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Switch({ label, disabled = false, labelPosition = 'right', className = '', ...rest }) {
  const lbl = label && <span className="st-switch__label">{label}</span>;
  return (
    <label className={['st-switch', disabled ? 'st-switch--disabled' : '', className].filter(Boolean).join(' ')}>
      {labelPosition === 'left' && lbl}
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="st-switch__track"><span className="st-switch__thumb" /></span>
      {labelPosition === 'right' && lbl}
    </label>
  );
}
