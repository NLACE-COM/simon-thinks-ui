import React from 'react';

const CSS = `
.st-progress{font-family:var(--font-body);display:flex;flex-direction:column;gap:var(--space-2);width:100%}
.st-progress__top{display:flex;align-items:baseline;justify-content:space-between;gap:var(--space-3)}
.st-progress__label{font-size:var(--text-sm);color:var(--text-primary);font-weight:var(--weight-medium)}
.st-progress__val{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-secondary)}
.st-progress__track{height:8px;border-radius:var(--radius-pill);background:var(--bg-subtle);overflow:hidden}
.st-progress--sm .st-progress__track{height:5px}
.st-progress--lg .st-progress__track{height:12px}
.st-progress__fill{height:100%;border-radius:var(--radius-pill);background:var(--violet-500);
  transition:width var(--duration-slow) var(--ease-out)}
.st-progress--success .st-progress__fill{background:var(--green-500)}
.st-progress--warning .st-progress__fill{background:var(--amber-500)}
.st-progress--danger .st-progress__fill{background:var(--red-500)}
.st-progress__fill--indeterminate{width:35% !important;animation:st-prog-indet 1.2s var(--ease-in-out) infinite}
@keyframes st-prog-indet{0%{margin-left:-35%}100%{margin-left:100%}}

.st-ring{font-family:var(--font-body);position:relative;display:inline-flex;align-items:center;justify-content:center}
.st-ring svg{transform:rotate(-90deg)}
.st-ring__bg{stroke:var(--bg-subtle)}
.st-ring__fg{stroke:var(--violet-500);stroke-linecap:round;transition:stroke-dashoffset var(--duration-slow) var(--ease-out)}
.st-ring--success .st-ring__fg{stroke:var(--green-500)}
.st-ring--warning .st-ring__fg{stroke:var(--amber-500)}
.st-ring--danger .st-ring__fg{stroke:var(--red-500)}
.st-ring__label{position:absolute;font-family:var(--font-mono);font-weight:var(--weight-semibold);color:var(--text-primary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-progress-css')) {
  const s = document.createElement('style'); s.id = 'st-progress-css'; s.textContent = CSS; document.head.appendChild(s);
}

const clamp = (v) => Math.max(0, Math.min(100, v));

export function Progress({ value = 0, max = 100, label, showValue = false, size = 'md', variant = 'accent', indeterminate = false, className = '' }) {
  const pct = clamp((value / max) * 100);
  const cls = ['st-progress', `st-progress--${size}`, variant !== 'accent' ? `st-progress--${variant}` : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      {(label || showValue) && (
        <div className="st-progress__top">
          {label && <span className="st-progress__label">{label}</span>}
          {showValue && !indeterminate && <span className="st-progress__val">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="st-progress__track" role="progressbar" aria-valuenow={indeterminate ? undefined : Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
        <div className={['st-progress__fill', indeterminate ? 'st-progress__fill--indeterminate' : ''].filter(Boolean).join(' ')}
          style={indeterminate ? undefined : { width: pct + '%' }} />
      </div>
    </div>
  );
}

export function ProgressRing({ value = 0, max = 100, size = 64, thickness = 6, variant = 'accent', showValue = true, className = '' }) {
  const pct = clamp((value / max) * 100);
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  const cls = ['st-ring', variant !== 'accent' ? `st-ring--${variant}` : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle className="st-ring__bg" cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={thickness} />
        <circle className="st-ring__fg" cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={thickness}
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct / 100)} />
      </svg>
      {showValue && <span className="st-ring__label" style={{ fontSize: size * 0.26 }}>{Math.round(pct)}%</span>}
    </div>
  );
}
