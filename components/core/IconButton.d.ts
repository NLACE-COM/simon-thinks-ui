import * as React from 'react';

/** Square icon-only control. Always pass `label` for accessibility. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible label (becomes aria-label). */
  label: string;
  /** @default 'ghost' */
  variant?: 'ghost' | 'outline' | 'solid';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node (e.g. a Lucide SVG). */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): React.ReactElement;
