import React from 'react';

const CSS = `
.st-drawer__overlay{position:fixed;inset:0;z-index:1000;background:color-mix(in srgb,var(--ink-950) 50%,transparent);
  backdrop-filter:blur(3px);animation:st-drawer-fade var(--duration-base) var(--ease-out)}
.st-drawer{position:fixed;z-index:1001;background:var(--bg-elevated);display:flex;flex-direction:column;
  box-shadow:var(--shadow-xl);font-family:var(--font-body)}
.st-drawer--right{top:0;right:0;bottom:0;width:min(420px,92vw);border-left:1px solid var(--border-subtle);animation:st-drawer-r var(--duration-base) var(--ease-out)}
.st-drawer--left{top:0;left:0;bottom:0;width:min(420px,92vw);border-right:1px solid var(--border-subtle);animation:st-drawer-l var(--duration-base) var(--ease-out)}
.st-drawer--bottom{left:0;right:0;bottom:0;max-height:85vh;border-top:1px solid var(--border-subtle);border-radius:var(--radius-xl) var(--radius-xl) 0 0;animation:st-drawer-b var(--duration-base) var(--ease-out)}
.st-drawer__head{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4);
  padding:var(--space-5) var(--space-6) var(--space-4);border-bottom:1px solid var(--border-subtle)}
.st-drawer__titles{display:flex;flex-direction:column;gap:4px;min-width:0}
.st-drawer__eyebrow{font-family:var(--font-mono);font-size:var(--text-2xs);letter-spacing:var(--tracking-wider);text-transform:uppercase;color:var(--text-accent)}
.st-drawer__title{font-family:var(--font-display);font-weight:var(--weight-semibold);font-size:var(--text-lg);letter-spacing:var(--tracking-tight);color:var(--text-primary);margin:0}
.st-drawer__close{flex:none;background:none;border:1px solid var(--border-default);cursor:pointer;color:var(--text-secondary);
  width:30px;height:30px;border-radius:var(--radius-md);display:inline-flex;align-items:center;justify-content:center}
.st-drawer__close:hover{background:var(--bg-subtle);color:var(--text-primary)}
.st-drawer__body{padding:var(--space-6);overflow:auto;flex:1;font-size:var(--text-sm);color:var(--text-secondary);line-height:var(--leading-normal)}
.st-drawer__foot{display:flex;align-items:center;justify-content:flex-end;gap:var(--space-2);padding:var(--space-4) var(--space-6);border-top:1px solid var(--border-subtle);background:var(--bg-subtle)}
@keyframes st-drawer-fade{from{opacity:0}to{opacity:1}}
@keyframes st-drawer-r{from{transform:translateX(100%)}to{transform:none}}
@keyframes st-drawer-l{from{transform:translateX(-100%)}to{transform:none}}
@keyframes st-drawer-b{from{transform:translateY(100%)}to{transform:none}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-drawer-css')) {
  const s = document.createElement('style'); s.id = 'st-drawer-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Drawer({ open, onClose, side = 'right', title, eyebrow, footer, closeOnOverlay = true, children, className = '' }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <>
      <div className="st-drawer__overlay" onMouseDown={() => { if (closeOnOverlay && onClose) onClose(); }} />
      <aside className={['st-drawer', `st-drawer--${side}`, className].filter(Boolean).join(' ')} role="dialog" aria-modal="true">
        {(title || eyebrow) && (
          <div className="st-drawer__head">
            <div className="st-drawer__titles">
              {eyebrow && <span className="st-drawer__eyebrow">{eyebrow}</span>}
              {title && <h2 className="st-drawer__title">{title}</h2>}
            </div>
            {onClose && (
              <button className="st-drawer__close" aria-label="Cerrar" onClick={onClose}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>
            )}
          </div>
        )}
        <div className="st-drawer__body">{children}</div>
        {footer && <div className="st-drawer__foot">{footer}</div>}
      </aside>
    </>
  );
}
