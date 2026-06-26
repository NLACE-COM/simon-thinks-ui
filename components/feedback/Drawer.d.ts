import * as React from 'react';

/**
 * Edge-anchored panel (sheet) that slides in over an overlay. Controlled via
 * `open` / `onClose`; closes on Escape and overlay click. Use for filters,
 * detail views, side forms.
 */
export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  /** Anchor edge. @default 'right' */
  side?: 'right' | 'left' | 'bottom';
  title?: React.ReactNode;
  /** Mono eyebrow above the title. */
  eyebrow?: React.ReactNode;
  /** Footer node — typically action buttons. */
  footer?: React.ReactNode;
  /** @default true */
  closeOnOverlay?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function Drawer(props: DrawerProps): React.ReactElement | null;
