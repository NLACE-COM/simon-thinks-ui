import * as React from 'react';

export interface AccordionItem {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

/**
 * Vertically stacked, expandable sections. `single` (default) keeps one panel
 * open; `multiple` allows many. Smooth grid-rows height animation.
 */
export interface AccordionProps {
  items: AccordionItem[];
  /** @default 'single' */
  type?: 'single' | 'multiple';
  /** Initially open value(s). */
  defaultValue?: string | string[];
  /** Show a mono index before each title. */
  numbered?: boolean;
  className?: string;
}

export function Accordion(props: AccordionProps): React.ReactElement;
