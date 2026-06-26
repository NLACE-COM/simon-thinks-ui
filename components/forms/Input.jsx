import React from 'react';

const CSS = `
.st-field{font-family:var(--font-body);display:flex;flex-direction:column;gap:var(--space-2)}
.st-field__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-primary)}
.st-field__label .req{color:var(--status-danger);margin-left:2px}
.st-input-wrap{position:relative;display:flex;align-items:center}
.st-input{
  width:100%;box-sizing:border-box;font-family:var(--font-body);font-size:var(--text-sm);
  color:var(--text-primary);background:var(--bg-surface);
  border:1px solid var(--border-default);border-radius:var(--radius-md);
  height:40px;padding:0 var(--space-3);outline:none;
  transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);
}
.st-input::placeholder{color:var(--text-muted)}
.st-input:hover:not(:disabled){border-color:var(--border-strong)}
.st-input:focus{border-color:var(--violet-500);box-shadow:var(--focus-ring)}
.st-input:disabled{background:var(--bg-subtle);color:var(--text-muted);cursor:not-allowed}
.st-input--has-lead{padding-left:38px}
.st-input--has-trail{padding-right:38px}
.st-input--error{border-color:var(--status-danger)}
.st-input--error:focus{box-shadow:0 0 0 3px var(--red-soft)}
.st-input__icon{position:absolute;display:inline-flex;color:var(--text-muted);pointer-events:none}
.st-input__icon--lead{left:var(--space-3)}
.st-input__icon--trail{right:var(--space-3)}
.st-field__msg{font-size:var(--text-xs);color:var(--text-secondary)}
.st-field__msg--error{color:var(--status-danger)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-input-css')) {
  const s = document.createElement('style'); s.id = 'st-input-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Input({
  label, hint, error, required = false, leadingIcon, trailingIcon,
  id, className = '', ...rest
}) {
  const fieldId = id || (label ? 'in-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const cls = ['st-input', leadingIcon ? 'st-input--has-lead' : '', trailingIcon ? 'st-input--has-trail' : '', error ? 'st-input--error' : '', className].filter(Boolean).join(' ');
  return (
    <div className="st-field">
      {label && <label className="st-field__label" htmlFor={fieldId}>{label}{required && <span className="req">*</span>}</label>}
      <div className="st-input-wrap">
        {leadingIcon && <span className="st-input__icon st-input__icon--lead">{leadingIcon}</span>}
        <input id={fieldId} className={cls} aria-invalid={!!error} {...rest} />
        {trailingIcon && <span className="st-input__icon st-input__icon--trail">{trailingIcon}</span>}
      </div>
      {(error || hint) && <span className={'st-field__msg' + (error ? ' st-field__msg--error' : '')}>{error || hint}</span>}
    </div>
  );
}
