import * as React from 'react';

export type ModalSize = 'sm' | 'md' | 'lg';

/**
 * Centered dialog with overlay. Controlled via `open` / `onClose`. Closes on
 * Escape and (by default) overlay click. Provide `footer` for actions.
 */
export interface ModalProps {
  /** Visibility. Renders nothing when false. */
  open: boolean;
  /** Called on close affordances (button, overlay, Escape). */
  onClose?: () => void;
  /** Dialog heading. */
  title?: React.ReactNode;
  /** Mono eyebrow above the title. */
  eyebrow?: React.ReactNode;
  /** Footer node — typically action buttons. */
  footer?: React.ReactNode;
  /** @default 'md' */
  size?: ModalSize;
  /** Close when the backdrop is clicked. @default true */
  closeOnOverlay?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function Modal(props: ModalProps): React.ReactElement | null;
