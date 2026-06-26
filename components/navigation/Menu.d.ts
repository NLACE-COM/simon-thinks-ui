import * as React from 'react';

export interface MenuItem {
  /** Omit for an action item; 'separator' or 'label' for structural rows. */
  type?: 'item' | 'separator' | 'label';
  label?: React.ReactNode;
  icon?: React.ReactNode;
  /** Right-aligned mono shortcut hint. */
  shortcut?: React.ReactNode;
  /** Render in danger color. */
  danger?: boolean;
  onSelect?: () => void;
}

/**
 * Dropdown menu anchored to a trigger. Opens on click, closes on outside-click
 * / Escape / selection. Provide your own trigger node (e.g. a Button or
 * IconButton).
 */
export interface MenuProps {
  /** Clickable trigger element. */
  trigger: React.ReactNode;
  items: MenuItem[];
  /** Horizontal anchor. @default 'start' */
  align?: 'start' | 'end';
  /** Vertical side. @default 'bottom' */
  placement?: 'bottom' | 'top';
  className?: string;
}

export function Menu(props: MenuProps): React.ReactElement;
