import React from 'react';

const CSS = `
.st-toaststack{position:fixed;z-index:1100;display:flex;flex-direction:column;gap:var(--space-3);
  bottom:var(--space-6);right:var(--space-6);max-width:calc(100vw - var(--space-12))}
.st-toaststack--tr{top:var(--space-6);bottom:auto;right:var(--space-6)}
.st-toaststack--tc{top:var(--space-6);bottom:auto;left:50%;right:auto;transform:translateX(-50%);align-items:center}
.st-toast{font-family:var(--font-body);position:relative;display:flex;gap:var(--space-3);align-items:flex-start;
  width:340px;max-width:100%;padding:var(--space-4) var(--space-4) var(--space-4) var(--space-5);
  border-radius:var(--radius-md);background:var(--bg-elevated);border:1px solid var(--border-default);
  box-shadow:var(--shadow-lg);overflow:hidden;animation:st-toast-in var(--duration-base) var(--ease-out)}
.st-toast::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--violet-500)}
.st-toast--success::before{background:var(--green-500)}
.st-toast--warning::before{background:var(--amber-500)}
.st-toast--danger::before{background:var(--red-500)}
.st-toast--info::before{background:var(--context-500)}
.st-toast__body{flex:1;display:flex;flex-direction:column;gap:2px;min-width:0}
.st-toast__title{font-weight:var(--weight-semibold);font-size:var(--text-sm);color:var(--text-primary);letter-spacing:var(--tracking-tight)}
.st-toast__desc{font-size:var(--text-xs);color:var(--text-secondary);line-height:var(--leading-snug)}
.st-toast__action{margin-top:var(--space-2);align-self:flex-start;font-family:var(--font-body);font-size:var(--text-xs);
  font-weight:var(--weight-semibold);color:var(--text-accent);background:none;border:none;cursor:pointer;padding:0}
.st-toast__close{flex:none;background:none;border:none;cursor:pointer;color:var(--text-muted);padding:2px;border-radius:var(--radius-xs);line-height:0;display:inline-flex}
.st-toast__close:hover{color:var(--text-primary);background:var(--bg-subtle)}
@keyframes st-toast-in{from{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:none}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-toast-css')) {
  const s = document.createElement('style'); s.id = 'st-toast-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Toast({ variant = 'default', title, description, action, onAction, onClose, className = '', ...rest }) {
  const cls = ['st-toast', variant !== 'default' ? `st-toast--${variant}` : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} role="status" {...rest}>
      <div className="st-toast__body">
        {title && <span className="st-toast__title">{title}</span>}
        {description && <span className="st-toast__desc">{description}</span>}
        {action && <button className="st-toast__action" onClick={onAction}>{action}</button>}
      </div>
      {onClose && (
        <button className="st-toast__close" aria-label="Cerrar" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      )}
    </div>
  );
}

export function ToastStack({ position = 'bottom-right', children, className = '', ...rest }) {
  const map = { 'bottom-right': '', 'top-right': 'st-toaststack--tr', 'top-center': 'st-toaststack--tc' };
  return <div className={['st-toaststack', map[position] || '', className].filter(Boolean).join(' ')} {...rest}>{children}</div>;
}
