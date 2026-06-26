import React from 'react';

const CSS = `
.st-accordion{font-family:var(--font-body);display:flex;flex-direction:column;border:1px solid var(--border-default);
  border-radius:var(--radius-lg);overflow:hidden;background:var(--bg-surface)}
.st-accordion__item + .st-accordion__item{border-top:1px solid var(--border-subtle)}
.st-accordion__trigger{display:flex;align-items:center;gap:var(--space-3);width:100%;text-align:left;
  font-family:var(--font-body);font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--text-primary);
  background:none;border:none;cursor:pointer;padding:var(--space-4) var(--space-5);
  transition:background var(--duration-fast) var(--ease-out)}
.st-accordion__trigger:hover{background:var(--bg-subtle)}
.st-accordion__num{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted);letter-spacing:var(--tracking-wide)}
.st-accordion__title{flex:1}
.st-accordion__chev{flex:none;color:var(--text-muted);transition:transform var(--duration-base) var(--ease-out)}
.st-accordion__item--open .st-accordion__chev{transform:rotate(180deg);color:var(--text-accent)}
.st-accordion__panel{overflow:hidden;display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--duration-base) var(--ease-out)}
.st-accordion__item--open .st-accordion__panel{grid-template-rows:1fr}
.st-accordion__panel-inner{min-height:0;overflow:hidden}
.st-accordion__content{padding:0 var(--space-5) var(--space-4);font-size:var(--text-sm);color:var(--text-secondary);line-height:var(--leading-normal)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-accordion-css')) {
  const s = document.createElement('style'); s.id = 'st-accordion-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Accordion({ items = [], type = 'single', defaultValue, numbered = false, className = '' }) {
  const init = defaultValue != null ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : [];
  const [open, setOpen] = React.useState(init);
  const toggle = (value) => {
    setOpen(prev => {
      const has = prev.includes(value);
      if (type === 'multiple') return has ? prev.filter(v => v !== value) : [...prev, value];
      return has ? [] : [value];
    });
  };
  return (
    <div className={['st-accordion', className].filter(Boolean).join(' ')}>
      {items.map((it, i) => {
        const isOpen = open.includes(it.value);
        return (
          <div key={it.value} className={['st-accordion__item', isOpen ? 'st-accordion__item--open' : ''].filter(Boolean).join(' ')}>
            <button className="st-accordion__trigger" aria-expanded={isOpen} onClick={() => toggle(it.value)}>
              {numbered && <span className="st-accordion__num">{String(i + 1).padStart(2, '0')}</span>}
              <span className="st-accordion__title">{it.title}</span>
              <svg className="st-accordion__chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div className="st-accordion__panel">
              <div className="st-accordion__panel-inner">
                <div className="st-accordion__content">{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
