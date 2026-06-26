import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/** Native select, styled to match Input. Pass `options` or `<option>` children. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Array of `{value,label}` or plain strings. */
  options?: Array<SelectOption | string>;
  /** Disabled first option shown when nothing is selected. */
  placeholder?: string;
}

export function Select(props: SelectProps): React.ReactElement;
