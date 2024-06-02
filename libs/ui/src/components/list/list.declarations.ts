import { ReactNode } from 'react';

import { LIST_GAPS } from './list.constants';

type TGap = keyof typeof LIST_GAPS;

export interface IListProps<T> {
  data: Array<T & { id?: number }>;
  className?: string;
  horizontal?: boolean;
  gap?: TGap;
  wrap?: boolean;
  children(item: T, index: number, data: Array<T>): ReactNode;
}

export interface IListStyles {
  className?: string;
  children: ReactNode;
  $horizontal?: boolean;
  $gap: TGap;
  $wrap: boolean;
}
