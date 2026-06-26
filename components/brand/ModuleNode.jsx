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
  think:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A7 7 0 0 1 16 12c0 1.5-.5 2-1 3l-.5 1H9.5L9 15c-.5-1-1-1.5-1-3a7 7 0 0 1 1.5-10Z"/><path d="M9 19h6"/><path d="M10 22h4"/></svg>,
  core:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>,
  custom: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/><circle cx="12" cy="12" r="3"/></svg>,
  light:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>,
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
