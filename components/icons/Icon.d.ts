import * as React from 'react';

/**
 * Pixel icon from the HackerNoon Pixel Icon Library (578 glyphs on a 24px grid),
 * rendered from the icon font. Two styles per glyph: line (default) and `solid`.
 * Inherits `currentColor`; sized by `size`. Browse names in the Icons card or in
 * `tokens/icons.css` (`hn-<name>`).
 */
export interface IconProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  /** Glyph name without prefix, e.g. "search", "chart-line", "robot". */
  name: string;
  /** Use the filled variant (`hn-<name>-solid`). @default false */
  solid?: boolean;
  /** Size in px (number) or any CSS length. @default 18 */
  size?: number | string;
  /** Icon color. Defaults to currentColor. */
  color?: string;
  /** Accessible label. When set, the icon is exposed to AT; otherwise hidden. */
  title?: string;
}

export function Icon(props: IconProps): React.ReactElement;
