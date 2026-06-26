import * as React from 'react';

export type BadgeVariant = 'neutral' | 'accent' | 'solid' | 'success' | 'warning' | 'danger';

/** Small status / metadata label. Use `dot` for live states. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'neutral' */
  variant?: BadgeVariant;
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): React.ReactElement;
