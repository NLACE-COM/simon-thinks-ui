import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary action control for SIMON THINKS. Violet `primary` carries the main
 * action on a view; use `secondary`/`ghost` for everything around it. One
 * primary per view — clarity over noise.
 *
 * @startingPoint section="Core" subtitle="Buttons — primary, secondary, ghost, danger" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** Stretch to fill container width. */
  block?: boolean;
  /** Icon node rendered before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  trailingIcon?: React.ReactNode;
  /** Show spinner and disable interaction. */
  loading?: boolean;
  /** Render as a different element (e.g. 'a'). @default 'button' */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): React.ReactElement;
