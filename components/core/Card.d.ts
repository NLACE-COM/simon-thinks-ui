import * as React from 'react';

/** Surface container. Optional header (title/subtitle/action). Quiet by default;
 * use `accent` for the focused / active node. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Right-aligned header slot (e.g. an IconButton or Badge). */
  action?: React.ReactNode;
  /** Apply default padding. @default true */
  padded?: boolean;
  /** @default 'flat' */
  elevation?: 'flat' | 'raised';
  /** Violet glow border for the active/selected card. */
  accent?: boolean;
  /** Hover lift + pointer. */
  interactive?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): React.ReactElement;
