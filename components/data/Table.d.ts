import * as React from 'react';

export interface TableColumn<Row = any> {
  /** Field key in each row object. */
  key: string;
  /** Header content. */
  header: React.ReactNode;
  /** Right-align (use for numbers). */
  align?: 'left' | 'right';
  /** Make the header a sort toggle (requires `onSort`). */
  sortable?: boolean;
  /** Custom cell renderer. */
  render?: (value: any, row: Row) => React.ReactNode;
}

/**
 * Data table with sticky header, hover/striped rows and optional column sorting.
 * Sorting is controlled — keep `data` ordered yourself in response to `onSort`.
 */
export interface TableProps<Row = any> {
  columns: Array<TableColumn<Row>>;
  data: Row[];
  /** @default true */
  hover?: boolean;
  striped?: boolean;
  /** Active sort column key. */
  sortBy?: string;
  /** @default 'asc' */
  sortDir?: 'asc' | 'desc';
  onSort?: (key: string, dir: 'asc' | 'desc') => void;
  /** Field used as React key per row. */
  rowKey?: string;
  className?: string;
}

export function Table<Row = any>(props: TableProps<Row>): React.ReactElement;
