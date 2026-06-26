import React from 'react';

const CSS = `
.st-tooltip{position:relative;display:inline-flex}
.st-tooltip__pop{position:absolute;z-index:60;background:var(--ink-950);color:#fff;
  font-family:var(--font-body);font-size:var(--text-2xs);font-weight:var(--weight-medium);letter-spacing:var(--tracking-tight);
  padding:6px 9px;border-radius:var(--radius-sm);white-space:nowrap;pointer-events:none;
  box-shadow:var(--shadow-md);opacity:0;transition:opacity var(--duration-fast) var(--ease-out),transform var(--duration-fast) var(--ease-out)}
.st-tooltip__pop::after{content:"";position:absolute;width:7px;height:7px;background:var(--ink-950);transform:rotate(45deg)}
.st-tooltip:hover .st-tooltip__pop,.st-tooltip:focus-within .st-tooltip__pop{opacity:1}

.st-tooltip__pop--top{bottom:calc(100% + 7px);left:50%;transform:translateX(-50%) translateY(3px)}
.st-tooltip:hover .st-tooltip__pop--top,.st-tooltip:focus-within .st-tooltip__pop--top{transform:translateX(-50%)}
.st-tooltip__pop--top::after{bottom:-3px;left:50%;margin-left:-3px}

.st-tooltip__pop--bottom{top:calc(100% + 7px);left:50%;transform:translateX(-50%) translateY(-3px)}
.st-tooltip:hover .st-tooltip__pop--bottom,.st-tooltip:focus-within .st-tooltip__pop--bottom{transform:translateX(-50%)}
.st-tooltip__pop--bottom::after{top:-3px;left:50%;margin-left:-3px}

.st-tooltip__pop--left{right:calc(100% + 7px);top:50%;transform:translateY(-50%) translateX(3px)}
.st-tooltip:hover .st-tooltip__pop--left,.st-tooltip:focus-within .st-tooltip__pop--left{transform:translateY(-50%)}
.st-tooltip__pop--left::after{right:-3px;top:50%;margin-top:-3px}

.st-tooltip__pop--right{left:calc(100% + 7px);top:50%;transform:translateY(-50%) translateX(-3px)}
.st-tooltip:hover .st-tooltip__pop--right,.st-tooltip:focus-within .st-tooltip__pop--right{transform:translateY(-50%)}
.st-tooltip__pop--right::after{left:-3px;top:50%;margin-top:-3px}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-tooltip-css')) {
  const s = document.createElement('style'); s.id = 'st-tooltip-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tooltip({ label, placement = 'top', children, className = '', ...rest }) {
  return (
    <span className={['st-tooltip', className].filter(Boolean).join(' ')} tabIndex={0} {...rest}>
      {children}
      <span className={`st-tooltip__pop st-tooltip__pop--${placement}`} role="tooltip">{label}</span>
    </span>
  );
}
