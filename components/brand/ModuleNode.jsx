import React from 'react';

const CSS = `
.st-module{
  font-family:var(--font-body);position:relative;box-sizing:border-box;
  display:flex;flex-direction:column;gap:var(--space-3);
  background:var(--bg-surface);border:1px solid var(--border-default);
  border-radius:var(--radius-lg);padding:var(--space-5);min-width:180px;
  transition:border-color var(--duration-base) var(--ease-out),box-shadow var(--duration-base) var(--ease-out),transform var(--duration-base) var(--ease-out);
}
.st-module--interactive{cursor:pointer}
.st-module--interactive:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);border-color:var(--border-strong)}
.st-module--active{border-color:transparent;box-shadow:var(--shadow-glow);background:var(--bg-accent-soft)}
.st-module--idle{opacity:.72}
.st-module__top{display:flex;align-items:center;justify-content:space-between;gap:var(--space-2)}
.st-module__glyph{
  width:36px;height:36px;border-radius:var(--radius-md);flex:none;
  display:flex;align-items:center;justify-content:center;
  background:var(--ink-100);color:var(--ink-500);
}
.st-module--active .st-module__glyph{background:var(--violet-500);color:#fff}
.st-module__glyph svg{width:18px;height:18px}
.st-module__id{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted);letter-spacing:var(--tracking-wide)}
.st-module__name{font-family:var(--font-display);font-weight:var(--weight-semibold);font-size:var(--text-lg);letter-spacing:var(--tracking-tight);color:var(--text-primary);margin:0;line-height:1}
.st-module--active .st-module__name{color:var(--violet-700)}
.st-module__desc{font-size:var(--text-sm);color:var(--text-secondary);line-height:var(--leading-snug);margin:0}
.st-module__status{display:inline-flex;align-items:center;gap:var(--space-2);font-size:var(--text-2xs);font-family:var(--font-mono);letter-spacing:var(--tracking-wide);text-transform:uppercase;color:var(--text-muted)}
.st-module__dot{width:7px;height:7px;border-radius:var(--radius-pill);background:var(--ink-300)}
.st-module--active .st-module__dot{background:var(--violet-500)}
.st-module--active .st-module__status{color:var(--violet-600)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-module-css')) {
  const s = document.createElement('style'); s.id = 'st-module-css'; s.textContent = CSS; document.head.appendChild(s);
}

const GLYPHS = {
  think:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 0 0-3 3 2.5 2.5 0 0 0-2 4 2.5 2.5 0 0 0 1 4.5A2.5 2.5 0 0 0 12 19Z"/><path d="M12 5a3 3 0 0 1 3 3 2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1-1 4.5A2.5 2.5 0 0 1 12 19Z"/><path d="M12 5v14"/></svg>,
  core:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>,
  custom: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/><circle cx="9" cy="8" r="2.4"/><circle cx="15" cy="16" r="2.4"/></svg>,
  light:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76Z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/></svg>,
};

export function ModuleNode({
  module, name, description, active = false, idle = false,
  status, onClick, className = '', ...rest
}) {
  const key = (module || name || '').toString().toLowerCase();
  const glyph = GLYPHS[key] || GLYPHS.core;
  const state = active ? 'active' : (idle ? 'idle' : '');
  const cls = ['st-module', state ? 'st-module--' + state : '', onClick ? 'st-module--interactive' : '', className].filter(Boolean).join(' ');
  const statusLabel = status || (active ? 'Activo' : 'En espera');
  return (
    <div className={cls} onClick={onClick} {...rest}>
      <div className="st-module__top">
        <span className="st-module__glyph">{glyph}</span>
        <span className="st-module__id">{(name || module || '').toString().toUpperCase()}</span>
      </div>
      <div>
        <p className="st-module__name">{name || module}</p>
        {description && <p className="st-module__desc" style={{marginTop:'var(--space-2)'}}>{description}</p>}
      </div>
      <span className="st-module__status"><span className="st-module__dot" />{statusLabel}</span>
    </div>
  );
}
