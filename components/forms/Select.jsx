import React from 'react';

const CSS = `
.st-field{font-family:var(--font-body);display:flex;flex-direction:column;gap:var(--space-2)}
.st-field__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-primary)}
.st-field__msg{font-size:var(--text-xs);color:var(--text-secondary)}
.st-field__msg--error{color:var(--status-danger)}
.st-select-wrap{position:relative;display:flex;align-items:center}
.st-select{
  width:100%;box-sizing:border-box;font-family:var(--font-body);font-size:var(--text-sm);
  color:var(--text-primary);background:var(--bg-surface);
  border:1px solid var(--border-default);border-radius:var(--radius-md);
  height:40px;padding:0 var(--space-8) 0 var(--space-3);outline:none;cursor:pointer;
  appearance:none;-webkit-appearance:none;
  transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);
}
.st-select:hover:not(:disabled){border-color:var(--border-strong)}
.st-select:focus{border-color:var(--violet-500);box-shadow:var(--focus-ring)}
.st-select:disabled{background:var(--bg-subtle);color:var(--text-muted);cursor:not-allowed}
.st-select__chev{position:absolute;right:var(--space-3);pointer-events:none;color:var(--text-muted);display:inline-flex}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-select-css')) {
  const s = document.createElement('style'); s.id = 'st-select-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Select({ label, hint, error, options = [], placeholder, id, className = '', children, ...rest }) {
  const fieldId = id || (label ? 'sel-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div className="st-field">
      {label && <label className="st-field__label" htmlFor={fieldId}>{label}</label>}
      <div className="st-select-wrap">
        <select id={fieldId} className={['st-select', className].filter(Boolean).join(' ')} {...rest}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map(o => {
            const opt = typeof o === 'string' ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
          {children}
        </select>
        <span className="st-select__chev" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </div>
      {(error || hint) && <span className={'st-field__msg' + (error ? ' st-field__msg--error' : '')}>{error || hint}</span>}
    </div>
  );
}
