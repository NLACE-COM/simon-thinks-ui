import * as React from 'react';

/** Surface container. Optional header (title/subtitle/action) and footer (actions).
 * Quiet by default; use `accent` for the focused / active node.
 *
 * Layout rule: two or more Cards side by side must share the same height,
 * matched to the tallest. Wrap them in `CardGrid` (or any container with
 * `align-items: stretch`) — the footer pins to the bottom via `margin-top: auto`,
 * so every CTA lands on the same line. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Right-aligned header slot (e.g. an IconButton or Badge). */
  action?: React.ReactNode;
  /** Bottom action bar, right-aligned. Pass one Button for a single CTA, or
   * `<><Button variant="ghost">Cancelar</Button><Button>Acción</Button></>`
   * for the confirm/dismiss pair. Omit for a read-only card. */
  footer?: React.ReactNode;
  /** Apply default padding. @default true */
  padded?: boolean;
  /** @default 'flat' */
  elevation?: 'flat' | 'raised';
  /** Violet glow border for the active/selected card. */
  accent?: boolean;
  /** Hover lift + pointer. This is the `hover` variant in Figma — a state, not
   * a resting style. */
  interactive?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): React.ReactElement;

/** Auto-fit grid that stretches every Card in a row to the tallest one. */
export function CardGrid(props: React.HTMLAttributes<HTMLDivElement>): React.ReactElement;
