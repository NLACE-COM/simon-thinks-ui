import * as React from 'react';

/**
 * Compact inline trend line (no axes). Drop next to a metric. Pure SVG.
 */
export interface SparklineProps {
  values: number[];
  /** @default 120 */
  width?: number;
  /** @default 32 */
  height?: number;
  /** Line color. @default violet */
  color?: string;
  /** Soft area fill. @default true */
  area?: boolean;
  className?: string;
}

export function Sparkline(props: SparklineProps): React.ReactElement;
