import * as React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Optional count pill. */
  count?: number;
}

/** Controlled tab strip. `underline` for page-level nav, `pills` for compact
 * in-card segmented control. */
export interface TabsProps {
  items: TabItem[];
  /** Active value (controlled). Defaults to first item. */
  value?: string;
  onChange?: (value: string) => void;
  /** @default 'underline' */
  variant?: 'underline' | 'pills';
  className?: string;
}

export function Tabs(props: TabsProps): React.ReactElement;
