import * as React from 'react';

/**
 * Page navigation with first/last anchors, sibling pages around the current
 * one, and truncation ellipses. Controlled via `page` / `onChange`.
 */
export interface PaginationProps {
  /** Current 1-based page. */
  page: number;
  /** Total number of pages. */
  pageCount: number;
  onChange?: (page: number) => void;
  /** Pages shown on each side of the current page. @default 1 */
  siblings?: number;
  className?: string;
}

export function Pagination(props: PaginationProps): React.ReactElement;
