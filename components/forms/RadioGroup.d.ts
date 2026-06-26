import * as React from 'react';

export interface RadioOption {
  value: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}

/**
 * Single-choice control. Controlled via `value` / `onChange`. Options may be
 * plain strings or `{ value, label, description }`. Use `horizontal` for short
 * inline sets.
 */
export interface RadioGroupProps {
  /** Shared input name (auto-generated if omitted). */
  name?: string;
  /** Selected value. */
  value?: string;
  onChange?: (value: string) => void;
  /** String or object options. */
  options: Array<string | RadioOption>;
  /** @default 'vertical' */
  orientation?: 'vertical' | 'horizontal';
  disabled?: boolean;
  className?: string;
}

export function RadioGroup(props: RadioGroupProps): React.ReactElement;
