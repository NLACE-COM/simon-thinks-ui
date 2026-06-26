import React from 'react';
import { CHART_COLORS, ensureChartCss, niceMax, Legend } from './chartUtils.jsx';

const CSS = `
.st-line__path{fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
.st-line__dot{transition:r var(--duration-fast) var(--ease-out)}
.st-line__cat{font-size:11px;fill:var(--text-secondary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-linechart-css')) {
  const s = document.createElement('style'); s.id = 'st-linechart-css'; s.textContent = CSS; document.head.appendChild(s);
}

function smoothPath(pts) {
  if (pts.length < 2) return '';
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return d;
}

export function LineChart({ series = [], categories = [], title, height = 220, area = true, smooth = true, showDots = true, legend = true, className = '' }) {
  ensureChartCss();
  const W = 520, H = height;
  const padL = 30, padR = 12, padT = 12, padB = 26;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const allVals = series.flatMap(s => s.data);
  const maxV = niceMax(Math.max(1, ...allVals));
  const len = Math.max(...series.map(s => s.data.length), 1);
  const xAt = (i) => padL + (len === 1 ? plotW / 2 : (plotW * i) / (len - 1));
  const yAt = (v) => padT + plotH - (v / maxV) * plotH;
  return (
    <div className={['st-chart', className].filter(Boolean).join(' ')}>
      {title && <p className="st-chart__title">{title}</p>}
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMid meet" role="img">
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
          const y = padT + plotH * t;
          return (
            <g key={i}>
              <line className="st-chart__grid" x1={padL} y1={y} x2={W - padR} y2={y} />
              <text className="st-chart__axis" x={padL - 6} y={y + 3} textAnchor="end">{Math.round(maxV * (1 - t))}</text>
            </g>
          );
        })}
        {series.map((s, si) => {
          const c = s.color || CHART_COLORS[si % CHART_COLORS.length];
          const pts = s.data.map((v, i) => [xAt(i), yAt(v)]);
          const path = smooth ? smoothPath(pts) : 'M ' + pts.map(p => p.join(' ')).join(' L ');
          return (
            <g key={si}>
              {area && (
                <path d={`${path} L ${xAt(len - 1)} ${padT + plotH} L ${xAt(0)} ${padT + plotH} Z`}
                  fill={c} opacity="0.1" stroke="none" />
              )}
              <path className="st-line__path" d={path} stroke={c} />
              {showDots && pts.map((p, i) => <circle key={i} className="st-line__dot" cx={p[0]} cy={p[1]} r="3" fill="var(--bg-surface)" stroke={c} strokeWidth="2" />)}
            </g>
          );
        })}
        {categories.map((cat, i) => <text key={i} className="st-line__cat" x={xAt(i)} y={H - 8} textAnchor="middle">{cat}</text>)}
      </svg>
      {legend && series.length > 1 && <Legend items={series.map((s, i) => ({ label: s.name, color: s.color || CHART_COLORS[i % CHART_COLORS.length] }))} />}
    </div>
  );
}
