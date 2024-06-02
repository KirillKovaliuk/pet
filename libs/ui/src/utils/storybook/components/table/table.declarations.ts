import { ReactNode } from 'react';

export interface ITableColumnProps<T> {
  title: string;
  render: (item: T) => ReactNode;
  width?: number;
  align?: 'left' | 'center' | 'right',
}

export interface ITableProps<T> {
  columns: ITableColumnProps<T>[];
  data: T[];
}
