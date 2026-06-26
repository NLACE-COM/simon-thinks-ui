import * as React from 'react';

/**
 * Signature SIMON THINKS component: a cognitive **module node**. Renders one of
 * the product's modules (THINK · CORE · CUSTOM · LIGHT) as an interlocking node
 * card. Modules activate only when needed — use `active` for the live one,
 * `idle` to dim dormant ones.
 *
 * @startingPoint section="Brand" subtitle="Module node — THINK · CORE · CUSTOM · LIGHT" viewport="700x220"
 */
export interface ModuleNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** One of 'think' | 'core' | 'custom' | 'light' — selects the glyph. */
  module?: 'think' | 'core' | 'custom' | 'light' | string;
  /** Display name (defaults to module). */
  name?: React.ReactNode;
  description?: React.ReactNode;
  /** Live / focused module — violet glow. */
  active?: boolean;
  /** Dormant module — dimmed. */
  idle?: boolean;
  /** Override the status line (defaults to Activo / En espera). */
  status?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function ModuleNode(props: ModuleNodeProps): React.ReactElement;
