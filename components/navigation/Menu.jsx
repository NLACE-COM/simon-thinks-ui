import React from 'react';

const CSS = `
.st-menu{font-family:var(--font-body);position:relative;display:inline-flex}
.st-menu__panel{position:absolute;z-index:80;min-width:200px;background:var(--bg-elevated);
  border:1px solid var(--border-default);border-radius:var(--radius-md);box-shadow:var(--shadow-lg);
  padding:var(--space-2);display:flex;flex-direction:column;gap:1px;
  animation:st-menu-in var(--duration-fast) var(--ease-out)}
.st-menu__panel--start{left:0}
.st-menu__panel--end{right:0}
.st-menu__panel--top{bottom:calc(100% + 6px)}
.st-menu__panel--bottom{top:calc(100% + 6px)}
.st-menu__item{display:flex;align-items:center;gap:var(--space-3);width:100%;text-align:left;
  font-family:var(--font-body);font-size:var(--text-sm);color:var(--text-primary);
  background:none;border:none;cursor:pointer;padding:var(--space-2) var(--space-3);border-radius:var(--radius-sm);
  transition:background var(--duration-fast) var(--ease-out)}
.st-menu__item:hover{background:var(--bg-accent-soft);color:var(--text-accent)}
.st-menu__item__icon{flex:none;width:16px;height:16px;display:inline-flex;color:var(--text-muted)}
.st-menu__item:hover .st-menu__item__icon{color:var(--text-accent)}
.st-menu__item__shortcut{margin-left:auto;font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted)}
.st-menu__item--danger{color:var(--red-500)}
.st-menu__item--danger:hover{background:var(--red-soft);color:var(--red-500)}
.st-menu__item--danger .st-menu__item__icon{color:var(--red-500)}
.st-menu__label{font-family:var(--font-mono);font-size:var(--text-2xs);letter-spacing:var(--tracking-wider);
  text-transform:uppercase;color:var(--text-muted);padding:var(--space-2) var(--space-3) var(--space-1)}
.st-menu__sep{height:1px;background:var(--border-subtle);margin:var(--space-1) 0}
@keyframes st-menu-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-menu-css')) {
  const s = document.createElement('style'); s.id = 'st-menu-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Menu({ trigger, items = [], align = 'start', placement = 'bottom', className = '' }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);
  const panelCls = ['st-menu__panel', `st-menu__panel--${align}`, `st-menu__panel--${placement}`].join(' ');
  return (
    <span className={['st-menu', className].filter(Boolean).join(' ')} ref={ref}>
      <span onClick={() => setOpen(o => !o)}>{trigger}</span>
      {open && (
        <div className={panelCls} role="menu">
          {items.map((it, i) => {
            if (it.type === 'separator') return <div key={i} className="st-menu__sep" />;
            if (it.type === 'label') return <div key={i} className="st-menu__label">{it.label}</div>;
            return (
              <button key={i} role="menuitem"
                className={['st-menu__item', it.danger ? 'st-menu__item--danger' : ''].filter(Boolean).join(' ')}
                onClick={() => { setOpen(false); it.onSelect && it.onSelect(); }}>
                {it.icon && <span className="st-menu__item__icon">{it.icon}</span>}
                <span>{it.label}</span>
                {it.shortcut && <span className="st-menu__item__shortcut">{it.shortcut}</span>}
              </button>
            );
          })}
        </div>
      )}
    </span>
  );
}
