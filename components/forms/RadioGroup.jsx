import React from 'react';

const CSS = `
.st-radiogroup{font-family:var(--font-body);display:flex;flex-direction:column;gap:var(--space-3)}
.st-radiogroup--row{flex-direction:row;flex-wrap:wrap;gap:var(--space-5)}
.st-radio{display:inline-flex;align-items:flex-start;gap:var(--space-3);cursor:pointer;user-select:none}
.st-radio input{position:absolute;opacity:0;width:0;height:0}
.st-radio__dot{
  width:18px;height:18px;flex:none;margin-top:1px;border-radius:var(--radius-pill);
  border:1.5px solid var(--border-strong);background:var(--bg-surface);position:relative;
  transition:border-color var(--duration-fast) var(--ease-out)}
.st-radio__dot::after{content:"";position:absolute;inset:0;margin:auto;width:8px;height:8px;border-radius:var(--radius-pill);
  background:var(--violet-500);transform:scale(0);transition:transform var(--duration-fast) var(--ease-out)}
.st-radio:hover input:not(:disabled) ~ .st-radio__dot{border-color:var(--violet-500)}
.st-radio input:checked ~ .st-radio__dot{border-color:var(--violet-500)}
.st-radio input:checked ~ .st-radio__dot::after{transform:scale(1)}
.st-radio input:focus-visible ~ .st-radio__dot{box-shadow:var(--focus-ring)}
.st-radio input:disabled ~ .st-radio__dot{background:var(--bg-subtle);border-color:var(--border-default)}
.st-radio--disabled{cursor:not-allowed;opacity:.55}
.st-radio__text{display:flex;flex-direction:column;gap:1px}
.st-radio__label{font-size:var(--text-sm);color:var(--text-primary)}
.st-radio__desc{font-size:var(--text-xs);color:var(--text-secondary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-radio-css')) {
  const s = document.createElement('style'); s.id = 'st-radio-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function RadioGroup({ name, value, onChange, options = [], orientation = 'vertical', disabled = false, className = '' }) {
  const gname = name || React.useId();
  const cls = ['st-radiogroup', orientation === 'horizontal' ? 'st-radiogroup--row' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} role="radiogroup">
      {options.map(opt => {
        const o = typeof opt === 'string' ? { value: opt, label: opt } : opt;
        const isDisabled = disabled || o.disabled;
        return (
          <label key={o.value} className={['st-radio', isDisabled ? 'st-radio--disabled' : ''].filter(Boolean).join(' ')}>
            <input type="radio" name={gname} value={o.value} checked={value === o.value}
              disabled={isDisabled} onChange={() => onChange && onChange(o.value)} />
            <span className="st-radio__dot" aria-hidden="true" />
            {(o.label || o.description) && (
              <span className="st-radio__text">
                {o.label && <span className="st-radio__label">{o.label}</span>}
                {o.description && <span className="st-radio__desc">{o.description}</span>}
              </span>
            )}
          </label>
        );
      })}
    </div>
  );
}
