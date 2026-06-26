import * as React from 'react';

export interface BarDatum {
  label: string;
  value: number;
  /** Per-bar color override (CSS color / token). */
  color?: string;
}

/**
 * Vertical bar chart in pure SVG, colored from the brand chart palette. Scales
 * responsively to its container width.
 */
export interface BarChartProps {
  data: BarDatum[];
  title?: React.ReactNode;
  /** SVG height in px. @default 200 */
  height?: number;
  /** Print the value above each bar. @default true */
  showValues?: boolean;
  /** Single color for all bars (overridden by per-datum color). */
  color?: string;
  /** Format the printed value. */
  formatValue?: (value: number) => React.ReactNode;
  className?: string;
}

export function BarChart(props: BarChartProps): React.ReactElement;
