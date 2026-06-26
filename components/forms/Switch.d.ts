import * as React from 'react';

/** Toggle for binary settings — module on/off, live preferences. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  /** @default 'right' */
  labelPosition?: 'left' | 'right';
}

export function Switch(props: SwitchProps): React.ReactElement;
