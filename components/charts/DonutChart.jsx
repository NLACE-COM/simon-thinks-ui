import React from 'react';
import { CHART_COLORS, ensureChartCss, Legend } from './chartUtils.jsx';

const CSS = `
.st-donut__seg{transition:opacity var(--duration-fast) var(--ease-out)}
.st-donut:hover .st-donut__seg{opacity:.6}
.st-donut__seg:hover{opacity:1 !important}
.st-donut__center{display:flex;flex-direction:column;align-items:center;justify-content:center}
.st-donut__num{font-family:var(--font-display);font-weight:var(--weight-semibold);letter-spacing:var(--tracking-tight);color:var(--text-primary);line-height:1}
.st-donut__cap{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted);letter-spacing:var(--tracking-wide)}
.st-donut__wrap{position:relative;display:inline-flex}
.st-donut__overlay{position:absolute;inset:0;pointer-events:none}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-donut-css')) {
  const s = document.createElement('style'); s.id = 'st-donut-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function DonutChart({ data = [], size = 180, thickness = 26, title, centerValue, centerLabel, legend = true, className = '' }) {
  ensureChartCss();
  const total = data.reduce((a, d) => a + d.value, 0) || 1;
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  let acc = 0;
  return (
    <div className={['st-chart', className].filter(Boolean).join(' ')}>
      {title && <p className="st-chart__title">{title}</p>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
        <div className="st-donut__wrap st-donut" style={{ width: size, height: size }}>
          <svg width={size} height={size} role="img">
            <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
              <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--bg-subtle)" strokeWidth={thickness} />
              {data.map((d, i) => {
                const frac = d.value / total;
                const dash = frac * circ;
                const c = d.color || CHART_COLORS[i % CHART_COLORS.length];
                const seg = (
                  <circle key={i} className="st-donut__seg" cx={size / 2} cy={size / 2} r={r} fill="none"
                    stroke={c} strokeWidth={thickness} strokeDasharray={`${dash} ${circ - dash}`}
                    strokeDashoffset={-acc * circ} strokeLinecap="butt" />
                );
                acc += frac;
                return seg;
              })}
            </g>
          </svg>
          {(centerValue != null || centerLabel) && (
            <div className="st-donut__overlay st-donut__center">
              {centerValue != null && <span className="st-donut__num" style={{ fontSize: size * 0.2 }}>{centerValue}</span>}
              {centerLabel && <span className="st-donut__cap">{centerLabel}</span>}
            </div>
          )}
        </div>
        {legend && <Legend items={data.map((d, i) => ({ label: `${d.label} · ${Math.round((d.value / total) * 100)}%`, color: d.color || CHART_COLORS[i % CHART_COLORS.length] }))} />}
      </div>
    </div>
  );
}
