import * as React from 'react';

export type ToastVariant = 'default' | 'info' | 'success' | 'warning' | 'danger';
export type ToastPosition = 'bottom-right' | 'top-right' | 'top-center';

/**
 * Transient notification with a colored accent bar. Render inside a
 * `ToastStack` for correct viewport positioning and stacking.
 */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'default' (violet) */
  variant?: ToastVariant;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Optional inline action label. */
  action?: React.ReactNode;
  onAction?: () => void;
  /** Show a dismiss button. */
  onClose?: () => void;
}

export interface ToastStackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'bottom-right' */
  position?: ToastPosition;
  children?: React.ReactNode;
}

export function Toast(props: ToastProps): React.ReactElement;
export function ToastStack(props: ToastStackProps): React.ReactElement;
