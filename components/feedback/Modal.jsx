import React from 'react';

const CSS = `
.st-modal__overlay{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;
  padding:var(--space-6);background:color-mix(in srgb,var(--ink-950) 55%,transparent);
  backdrop-filter:blur(3px);animation:st-modal-fade var(--duration-base) var(--ease-out)}
.st-modal{font-family:var(--font-body);background:var(--bg-elevated);border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg);box-shadow:var(--shadow-xl);width:100%;max-width:480px;max-height:calc(100vh - var(--space-12));
  display:flex;flex-direction:column;overflow:hidden;animation:st-modal-pop var(--duration-base) var(--ease-out)}
.st-modal--sm{max-width:380px}
.st-modal--lg{max-width:640px}
.st-modal__head{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4);
  padding:var(--space-6) var(--space-6) var(--space-3)}
.st-modal__titles{display:flex;flex-direction:column;gap:4px;min-width:0}
.st-modal__eyebrow{font-family:var(--font-mono);font-size:var(--text-2xs);letter-spacing:var(--tracking-wider);
  text-transform:uppercase;color:var(--text-accent)}
.st-modal__title{font-family:var(--font-display);font-weight:var(--weight-semibold);font-size:var(--text-lg);
  letter-spacing:var(--tracking-tight);line-height:var(--leading-tight);color:var(--text-primary);margin:0}
.st-modal__close{flex:none;background:none;border:1px solid var(--border-default);cursor:pointer;color:var(--text-secondary);
  width:30px;height:30px;border-radius:var(--radius-md);display:inline-flex;align-items:center;justify-content:center;
  transition:background var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out)}
.st-modal__close:hover{background:var(--bg-subtle);color:var(--text-primary)}
.st-modal__body{padding:0 var(--space-6) var(--space-5);font-size:var(--text-sm);color:var(--text-secondary);
  line-height:var(--leading-normal);overflow:auto}
.st-modal__foot{display:flex;align-items:center;justify-content:flex-end;gap:var(--space-2);
  padding:var(--space-4) var(--space-6);border-top:1px solid var(--border-subtle);background:var(--bg-subtle)}
@keyframes st-modal-fade{from{opacity:0}to{opacity:1}}
@keyframes st-modal-pop{from{opacity:0;transform:translateY(10px) scale(.985)}to{opacity:1;transform:none}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-modal-css')) {
  const s = document.createElement('style'); s.id = 'st-modal-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Modal({ open, onClose, title, eyebrow, footer, size = 'md', closeOnOverlay = true, children, className = '' }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const cls = ['st-modal', size !== 'md' ? `st-modal--${size}` : '', className].filter(Boolean).join(' ');
  return (
    <div className="st-modal__overlay" onMouseDown={(e) => { if (closeOnOverlay && e.target === e.currentTarget && onClose) onClose(); }}>
      <div className={cls} role="dialog" aria-modal="true">
        {(title || eyebrow) && (
          <div className="st-modal__head">
            <div className="st-modal__titles">
              {eyebrow && <span className="st-modal__eyebrow">{eyebrow}</span>}
              {title && <h2 className="st-modal__title">{title}</h2>}
            </div>
            {onClose && (
              <button className="st-modal__close" aria-label="Cerrar" onClick={onClose}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>
            )}
          </div>
        )}
        <div className="st-modal__body">{children}</div>
        {footer && <div className="st-modal__foot">{footer}</div>}
      </div>
    </div>
  );
}
