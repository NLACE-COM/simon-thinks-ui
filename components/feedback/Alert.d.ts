import * as React from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

/**
 * Inline contextual message. Uses the SIMON THINKS status palette (soft
 * surfaces). `info` for neutral notes, `success`/`warning`/`danger` for
 * outcome states. Pass `onClose` to make it dismissible.
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'info' */
  variant?: AlertVariant;
  /** Bold lead line above the message. */
  title?: React.ReactNode;
  /** Leading icon node; falls back to a variant glyph. */
  icon?: React.ReactNode;
  /** Show a dismiss button and handle the click. */
  onClose?: () => void;
  children?: React.ReactNode;
}

export function Alert(props: AlertProps): React.ReactElement;
