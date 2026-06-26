import * as React from 'react';

/** Text field with label, hint, error and optional inline icons. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — switches the field to its error state. */
  error?: React.ReactNode;
  required?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function Input(props: InputProps): React.ReactElement;
