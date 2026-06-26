import * as React from 'react';

export interface DonutDatum {
  label: string;
  value: number;
  color?: string;
}

/**
 * Donut / ring chart with an optional centered value+label and a percentage
 * legend. Pure SVG, brand palette.
 */
export interface DonutChartProps {
  data: DonutDatum[];
  /** Diameter in px. @default 180 */
  size?: number;
  /** Ring thickness in px. @default 26 */
  thickness?: number;
  title?: React.ReactNode;
  /** Big number in the middle. */
  centerValue?: React.ReactNode;
  /** Caption under the center value. */
  centerLabel?: React.ReactNode;
  /** @default true */
  legend?: boolean;
  className?: string;
}

export function DonutChart(props: DonutChartProps): React.ReactElement;
