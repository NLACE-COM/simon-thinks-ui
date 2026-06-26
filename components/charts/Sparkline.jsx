import React from 'react';

const CSS = `
.st-spark{display:inline-block;vertical-align:middle}
.st-spark__path{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-spark-css')) {
  const s = document.createElement('style'); s.id = 'st-spark-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Sparkline({ values = [], width = 120, height = 32, color = 'var(--violet-500)', area = true, className = '' }) {
  const n = values.length;
  if (n < 2) return <svg className={['st-spark', className].filter(Boolean).join(' ')} width={width} height={height} />;
  const min = Math.min(...values), max = Math.max(...values);
  const span = max - min || 1;
  const pad = 3;
  const x = (i) => pad + (i * (width - pad * 2)) / (n - 1);
  const y = (v) => pad + (height - pad * 2) * (1 - (v - min) / span);
  const pts = values.map((v, i) => [x(i), y(v)]);
  const line = 'M ' + pts.map(p => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' L ');
  return (
    <svg className={['st-spark', className].filter(Boolean).join(' ')} width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img">
      {area && <path d={`${line} L ${x(n - 1)} ${height - pad} L ${x(0)} ${height - pad} Z`} fill={color} opacity="0.12" stroke="none" />}
      <path className="st-spark__path" d={line} stroke={color} />
      <circle cx={x(n - 1)} cy={y(values[n - 1])} r="2.5" fill={color} />
    </svg>
  );
}
