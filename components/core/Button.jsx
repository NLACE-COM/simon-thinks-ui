import React from 'react';

/* Inject component CSS once. Styling references design-system tokens (styles.css). */
const CSS = `
.st-btn{
  font-family:var(--font-body);font-weight:var(--weight-semibold);
  display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);
  border:1px solid transparent;border-radius:var(--radius-md);cursor:pointer;
  white-space:nowrap;text-decoration:none;line-height:1;
  transition:background var(--duration-fast) var(--ease-out),
             color var(--duration-fast) var(--ease-out),
             border-color var(--duration-fast) var(--ease-out),
             box-shadow var(--duration-fast) var(--ease-out),
             transform var(--duration-fast) var(--ease-out);
}
.st-btn:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.st-btn:active{transform:translateY(0.5px)}
.st-btn[disabled]{opacity:.45;cursor:not-allowed;transform:none}

/* sizes */
.st-btn--sm{font-size:var(--text-sm);padding:0 var(--space-3);height:32px}
.st-btn--md{font-size:var(--text-sm);padding:0 var(--space-4);height:40px}
.st-btn--lg{font-size:var(--text-base);padding:0 var(--space-5);height:48px}

/* primary */
.st-btn--primary{background:var(--bg-accent);color:var(--text-on-accent)}
.st-btn--primary:hover:not([disabled]){background:var(--bg-accent-hover)}
.st-btn--primary:active:not([disabled]){background:var(--bg-accent-pressed)}

/* secondary (ink outline) */
.st-btn--secondary{background:var(--bg-surface);color:var(--text-primary);border-color:var(--border-default)}
.st-btn--secondary:hover:not([disabled]){border-color:var(--border-strong);background:var(--bg-subtle)}

/* ghost */
.st-btn--ghost{background:transparent;color:var(--text-primary)}
.st-btn--ghost:hover:not([disabled]){background:var(--bg-subtle)}

/* danger */
.st-btn--danger{background:var(--status-danger);color:#fff}
.st-btn--danger:hover:not([disabled]){filter:brightness(0.93)}

.st-btn--block{display:flex;width:100%}
.st-btn__spin{width:1em;height:1em;border-radius:50%;border:2px solid currentColor;border-top-color:transparent;animation:st-spin .7s linear infinite}
@keyframes st-spin{to{transform:rotate(360deg)}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-button-css')) {
  const s = document.createElement('style'); s.id = 'st-button-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Button({
  children, variant = 'primary', size = 'md', block = false,
  leadingIcon, trailingIcon, loading = false, disabled = false,
  as = 'button', className = '', ...rest
}) {
  const Tag = as;
  const cls = [
    'st-btn', `st-btn--${variant}`, `st-btn--${size}`,
    block ? 'st-btn--block' : '', className,
  ].filter(Boolean).join(' ');
  return (
    <Tag className={cls} disabled={Tag === 'button' ? (disabled || loading) : undefined} aria-busy={loading || undefined} {...rest}>
      {loading && <span className="st-btn__spin" aria-hidden="true" />}
      {!loading && leadingIcon}
      {children && <span>{children}</span>}
      {!loading && trailingIcon}
    </Tag>
  );
}
