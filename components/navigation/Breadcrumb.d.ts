import * as React from 'react';

export interface BreadcrumbItem {
  label: React.ReactNode;
  /** Link target; omit on the current (last) item. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
}

/**
 * Path trail for hierarchical navigation. The last item renders as the current
 * page (non-interactive). Default separator is a mono slash.
 */
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Separator between items. @default '/' */
  separator?: React.ReactNode;
  className?: string;
}

export function Breadcrumb(props: BreadcrumbProps): React.ReactElement;
