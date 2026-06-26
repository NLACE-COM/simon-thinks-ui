import * as React from 'react';

/** User / agent avatar. Falls back to initials on violet when no image. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — used for initials and alt text. */
  name?: string;
  /** Image URL; omit to render initials. */
  src?: string;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Rounded-square instead of circle. */
  square?: boolean;
}

export function Avatar(props: AvatarProps): React.ReactElement;
