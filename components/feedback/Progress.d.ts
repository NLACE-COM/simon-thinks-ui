import * as React from 'react';

export type ProgressVariant = 'accent' | 'success' | 'warning' | 'danger';

/**
 * Linear progress bar. Set `indeterminate` for unknown-duration work.
 */
export interface ProgressProps {
  /** Current value. */
  value?: number;
  /** @default 100 */
  max?: number;
  label?: React.ReactNode;
  /** Show the percentage on the right. */
  showValue?: boolean;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** @default 'accent' (violet) */
  variant?: ProgressVariant;
  /** Looping animation for unknown progress. */
  indeterminate?: boolean;
  className?: string;
}

/**
 * Circular progress ring with optional centered percentage. Good for
 * confidence / completion gauges.
 */
export interface ProgressRingProps {
  value?: number;
  /** @default 100 */
  max?: number;
  /** Diameter in px. @default 64 */
  size?: number;
  /** Stroke width in px. @default 6 */
  thickness?: number;
  /** @default 'accent' */
  variant?: ProgressVariant;
  /** @default true */
  showValue?: boolean;
  className?: string;
}

export function Progress(props: ProgressProps): React.ReactElement;
export function ProgressRing(props: ProgressRingProps): React.ReactElement;
