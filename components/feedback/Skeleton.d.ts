import * as React from 'react';

/**
 * Shimmer placeholder for loading content. `text` with `lines > 1` renders a
 * stacked paragraph (last line shortened). Respects reduced-motion.
 */
export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'rect' */
  variant?: 'text' | 'circle' | 'rect';
  /** CSS width (number = px). */
  width?: number | string;
  /** CSS height (number = px). */
  height?: number | string;
  /** For `text`: number of lines. @default 1 */
  lines?: number;
}

export function Skeleton(props: SkeletonProps): React.ReactElement;
