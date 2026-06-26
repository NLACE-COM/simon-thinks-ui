import * as React from 'react';

/** Checkbox with optional label and description. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  /** Secondary line under the label. */
  description?: React.ReactNode;
}

export function Checkbox(props: CheckboxProps): React.ReactElement;
