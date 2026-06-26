import * as React from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

/**
 * Lightweight CSS hover/focus tooltip in ink. Wraps a single trigger element.
 * Keep labels short — one line, no rich content.
 */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text. */
  label: React.ReactNode;
  /** @default 'top' */
  placement?: TooltipPlacement;
  children?: React.ReactNode;
}

export function Tooltip(props: TooltipProps): React.ReactElement;
