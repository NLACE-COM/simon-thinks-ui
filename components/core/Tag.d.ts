import * as React from 'react';

/** Monospace token/filter chip. Selectable and removable. Used for node IDs,
 * module filters, and knowledge tags. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Selected (violet) state. */
  selected?: boolean;
  /** When provided, renders a × affordance and fires on click. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): React.ReactElement;
