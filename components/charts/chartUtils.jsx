import React from 'react';

/* Shared brand chart palette + tiny helpers. Not a component itself. */
export const CHART_COLORS = [
  'var(--violet-500)', 'var(--blue-500)', 'var(--green-500)',
  'var(--amber-500)', 'var(--context-500)', 'var(--violet-300)',
];

const BASE_CSS = `
.st-chart{font-family:var(--font-body);color:var(--text-primary)}
.st-chart__title{font-size:var(--text-sm);font-weight:var(--weight-semibold);letter-spacing:var(--tracking-tight);margin:0 0 var(--space-3)}
.st-chart__axis{font-family:var(--font-mono);font-size:10px;fill:var(--text-muted)}
.st-chart__grid{stroke:var(--border-subtle);stroke-width:1}
.st-chart__legend{display:flex;flex-wrap:wrap;gap:var(--space-2) var(--space-4);margin-top:var(--space-3)}
.st-chart__lg{display:inline-flex;align-items:center;gap:6px;font-size:var(--text-xs);color:var(--text-secondary)}
.st-chart__sw{width:10px;height:10px;border-radius:3px;flex:none}
`;
export function ensureChartCss() {
  if (typeof document !== 'undefined' && !document.getElementById('st-chart-base-css')) {
    const s = document.createElement('style'); s.id = 'st-chart-base-css'; s.textContent = BASE_CSS; document.head.appendChild(s);
  }
}
export function niceMax(v) {
  if (v <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / pow;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return step * pow;
}
export function Legend({ items }) {
  return (
    <div className="st-chart__legend">
      {items.map((it, i) => (
        <span key={i} className="st-chart__lg"><span className="st-chart__sw" style={{ background: it.color }} />{it.label}</span>
      ))}
    </div>
  );
}
