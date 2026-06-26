import React from 'react';

const CSS = `
.st-avatar{
  display:inline-flex;align-items:center;justify-content:center;flex:none;
  font-family:var(--font-body);font-weight:var(--weight-semibold);
  background:var(--violet-100);color:var(--violet-700);
  border-radius:var(--radius-pill);overflow:hidden;user-select:none;
  box-shadow:inset 0 0 0 1px rgba(11,11,15,.06);
}
.st-avatar img{width:100%;height:100%;object-fit:cover;display:block}
.st-avatar--sm{width:28px;height:28px;font-size:var(--text-2xs)}
.st-avatar--md{width:36px;height:36px;font-size:var(--text-xs)}
.st-avatar--lg{width:48px;height:48px;font-size:var(--text-sm)}
.st-avatar--square{border-radius:var(--radius-md)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-avatar-css')) {
  const s = document.createElement('style'); s.id = 'st-avatar-css'; s.textContent = CSS; document.head.appendChild(s);
}

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}

export function Avatar({ name = '', src, size = 'md', square = false, className = '', ...rest }) {
  const cls = ['st-avatar', `st-avatar--${size}`, square ? 'st-avatar--square' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
