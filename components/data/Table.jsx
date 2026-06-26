import React from 'react';

const CSS = `
.st-table-wrap{font-family:var(--font-body);width:100%;overflow:auto;border:1px solid var(--border-default);
  border-radius:var(--radius-lg);background:var(--bg-surface)}
.st-table{width:100%;border-collapse:collapse;font-size:var(--text-sm)}
.st-table thead th{
  text-align:left;font-family:var(--font-mono);font-size:var(--text-2xs);font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-wider);text-transform:uppercase;color:var(--text-muted);
  padding:var(--space-3) var(--space-4);background:var(--bg-subtle);border-bottom:1px solid var(--border-default);
  white-space:nowrap;position:sticky;top:0}
.st-table th.st-table--num,.st-table td.st-table--num{text-align:right;font-variant-numeric:tabular-nums}
.st-table tbody td{padding:var(--space-3) var(--space-4);border-bottom:1px solid var(--border-subtle);color:var(--text-primary);vertical-align:middle}
.st-table tbody tr:last-child td{border-bottom:none}
.st-table--hover tbody tr{transition:background var(--duration-fast) var(--ease-out)}
.st-table--hover tbody tr:hover{background:var(--bg-accent-soft)}
.st-table--striped tbody tr:nth-child(even){background:var(--bg-subtle)}
.st-table__sort{display:inline-flex;align-items:center;gap:4px;cursor:pointer;color:inherit;background:none;border:none;font:inherit;letter-spacing:inherit;text-transform:inherit;padding:0}
.st-table__sort:hover{color:var(--text-secondary)}
.st-table__sort svg{opacity:.5}
.st-table__sort--active{color:var(--text-accent)}
.st-table__sort--active svg{opacity:1}
.st-table__cell-mono{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-table-css')) {
  const s = document.createElement('style'); s.id = 'st-table-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Table({ columns = [], data = [], hover = true, striped = false, sortBy, sortDir = 'asc', onSort, rowKey, className = '' }) {
  const tcls = ['st-table', hover ? 'st-table--hover' : '', striped ? 'st-table--striped' : ''].filter(Boolean).join(' ');
  return (
    <div className={['st-table-wrap', className].filter(Boolean).join(' ')}>
      <table className={tcls}>
        <thead>
          <tr>
            {columns.map(col => {
              const numCls = col.align === 'right' ? 'st-table--num' : '';
              if (col.sortable && onSort) {
                const active = sortBy === col.key;
                return (
                  <th key={col.key} className={numCls}>
                    <button className={['st-table__sort', active ? 'st-table__sort--active' : ''].filter(Boolean).join(' ')}
                      onClick={() => onSort(col.key, active && sortDir === 'asc' ? 'desc' : 'asc')}>
                      {col.header}
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        {active && sortDir === 'desc' ? <polyline points="6 9 12 15 18 9"/> : <polyline points="6 15 12 9 18 15"/>}
                      </svg>
                    </button>
                  </th>
                );
              }
              return <th key={col.key} className={numCls}>{col.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={rowKey ? row[rowKey] : i}>
              {columns.map(col => (
                <td key={col.key} className={col.align === 'right' ? 'st-table--num' : ''}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
