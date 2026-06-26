import React from 'react';

const CSS = `
.st-pagination{font-family:var(--font-body);display:inline-flex;align-items:center;gap:var(--space-1)}
.st-page{min-width:34px;height:34px;padding:0 var(--space-2);display:inline-flex;align-items:center;justify-content:center;
  font-family:var(--font-body);font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-secondary);
  background:none;border:1px solid transparent;border-radius:var(--radius-md);cursor:pointer;
  transition:background var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out)}
.st-page:hover:not(:disabled){background:var(--bg-subtle);color:var(--text-primary)}
.st-page--active{background:var(--bg-accent);color:var(--text-on-accent);font-weight:var(--weight-semibold)}
.st-page--active:hover{background:var(--bg-accent-hover);color:#fff}
.st-page:disabled{opacity:.4;cursor:not-allowed}
.st-page--ellipsis{cursor:default;color:var(--text-muted);min-width:24px}
.st-page--ellipsis:hover{background:none}
.st-page--nav{color:var(--text-secondary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-pagination-css')) {
  const s = document.createElement('style'); s.id = 'st-pagination-css'; s.textContent = CSS; document.head.appendChild(s);
}

function range(start, end) { const r = []; for (let i = start; i <= end; i++) r.push(i); return r; }

export function Pagination({ page = 1, pageCount = 1, onChange, siblings = 1, className = '' }) {
  const go = (p) => { if (p >= 1 && p <= pageCount && p !== page && onChange) onChange(p); };
  const pages = [];
  const left = Math.max(2, page - siblings);
  const right = Math.min(pageCount - 1, page + siblings);
  pages.push(1);
  if (left > 2) pages.push('…');
  pages.push(...range(left, right));
  if (right < pageCount - 1) pages.push('…');
  if (pageCount > 1) pages.push(pageCount);
  const chevron = (d) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points={d === 'l' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}/></svg>;
  return (
    <nav className={['st-pagination', className].filter(Boolean).join(' ')} aria-label="Paginación">
      <button className="st-page st-page--nav" disabled={page <= 1} onClick={() => go(page - 1)} aria-label="Anterior">{chevron('l')}</button>
      {pages.map((p, i) => p === '…'
        ? <span key={`e${i}`} className="st-page st-page--ellipsis">…</span>
        : <button key={p} className={['st-page', p === page ? 'st-page--active' : ''].filter(Boolean).join(' ')}
            aria-current={p === page ? 'page' : undefined} onClick={() => go(p)}>{p}</button>
      )}
      <button className="st-page st-page--nav" disabled={page >= pageCount} onClick={() => go(page + 1)} aria-label="Siguiente">{chevron('r')}</button>
    </nav>
  );
}
