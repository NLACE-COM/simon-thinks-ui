import React from 'react';
import { Avatar } from './Avatar.jsx';

const CSS = `
.st-avatargroup{display:inline-flex;align-items:center}
.st-avatargroup .st-avatar{box-shadow:0 0 0 2px var(--bg-surface),inset 0 0 0 1px rgba(11,11,15,.06)}
.st-avatargroup__more{display:inline-flex;align-items:center;justify-content:center;flex:none;
  font-family:var(--font-body);font-weight:var(--weight-semibold);background:var(--ink-100);color:var(--text-secondary);
  border-radius:var(--radius-pill);box-shadow:0 0 0 2px var(--bg-surface),inset 0 0 0 1px rgba(11,11,15,.06)}
.st-avatargroup__more--sm{width:28px;height:28px;font-size:var(--text-2xs)}
.st-avatargroup__more--md{width:36px;height:36px;font-size:var(--text-xs)}
.st-avatargroup__more--lg{width:48px;height:48px;font-size:var(--text-sm)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-avatargroup-css')) {
  const s = document.createElement('style'); s.id = 'st-avatargroup-css'; s.textContent = CSS; document.head.appendChild(s);
}

const OVERLAP = { sm: -8, md: -10, lg: -14 };

export function AvatarGroup({ avatars = [], max = 4, size = 'md', className = '' }) {
  const shown = avatars.slice(0, max);
  const extra = avatars.length - shown.length;
  const ml = OVERLAP[size];
  return (
    <div className={['st-avatargroup', className].filter(Boolean).join(' ')}>
      {shown.map((a, i) => (
        <span key={i} style={{ marginLeft: i === 0 ? 0 : ml, zIndex: shown.length - i }}>
          <Avatar name={a.name} src={a.src} size={size} />
        </span>
      ))}
      {extra > 0 && (
        <span className={`st-avatargroup__more st-avatargroup__more--${size}`} style={{ marginLeft: ml }}>+{extra}</span>
      )}
    </div>
  );
}
