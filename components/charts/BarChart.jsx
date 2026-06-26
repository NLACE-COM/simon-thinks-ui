import React from 'react';
import { CHART_COLORS, ensureChartCss, niceMax } from './chartUtils.jsx';

const CSS = `
.st-bar__rect{transition:opacity var(--duration-fast) var(--ease-out)}
.st-bar:hover .st-bar__rect{opacity:.82}
.st-bar__val{font-family:var(--font-mono);font-size:10px;fill:var(--text-secondary)}
.st-bar__lbl{font-size:11px;fill:var(--text-secondary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-barchart-css')) {
  const s = document.createElement('style'); s.id = 'st-barchart-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function BarChart({ data = [], title, height = 200, showValues = true, color, formatValue = (v) => v, className = '' }) {
  ensureChartCss();
  const W = 480, H = height;
  const padL = 8, padR = 8, padT = showValues ? 22 : 10, padB = 28;
  const n = data.length || 1;
  const maxV = niceMax(Math.max(1, ...data.map(d => d.value)));
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const gap = plotW / n;
  const bw = Math.min(46, gap * 0.62);
  return (
    <div className={['st-chart', className].filter(Boolean).join(' ')}>
      {title && <p className="st-chart__title">{title}</p>}
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMid meet" role="img">
        {[0, 0.5, 1].map((t, i) => {
          const y = padT + plotH * t;
          return <line key={i} className="st-chart__grid" x1={padL} y1={y} x2={W - padR} y2={y} />;
        })}
        {data.map((d, i) => {
          const h = (d.value / maxV) * plotH;
          const x = padL + gap * i + (gap - bw) / 2;
          const y = padT + plotH - h;
          const c = d.color || color || CHART_COLORS[i % CHART_COLORS.length];
          return (
            <g key={i} className="st-bar">
              <rect className="st-bar__rect" x={x} y={y} width={bw} height={Math.max(1, h)} rx="4" fill={c} />
              {showValues && <text className="st-bar__val" x={x + bw / 2} y={y - 6} textAnchor="middle">{formatValue(d.value)}</text>}
              <text className="st-bar__lbl" x={x + bw / 2} y={H - 9} textAnchor="middle">{d.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
