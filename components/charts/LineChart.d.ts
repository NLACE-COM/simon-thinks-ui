import * as React from 'react';

export interface LineSeries {
  name: string;
  data: number[];
  /** Line color (CSS color / token). Defaults to the brand palette. */
  color?: string;
}

/**
 * Multi-series line chart in pure SVG with a value axis, optional area fill,
 * smoothing, dots and legend. Responsive to container width.
 */
export interface LineChartProps {
  series: LineSeries[];
  /** X-axis category labels. */
  categories?: string[];
  title?: React.ReactNode;
  /** @default 220 */
  height?: number;
  /** Soft area fill under each line. @default true */
  area?: boolean;
  /** Curved lines. @default true */
  smooth?: boolean;
  /** Show point markers. @default true */
  showDots?: boolean;
  /** Show legend when >1 series. @default true */
  legend?: boolean;
  className?: string;
}

export function LineChart(props: LineChartProps): React.ReactElement;
