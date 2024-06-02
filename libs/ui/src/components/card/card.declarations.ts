import { ReactNode } from 'react';

import { TShadowSize } from '../../types';

export interface ICardProps {
  children: ReactNode;
  shadowSize?: TShadowSize;
  className?: string;
  noGutters?: boolean;
  withBorder?: boolean;
}

export interface ICardStyles {
  $shadowSize: TShadowSize;
  $noGutters: boolean;
  $withBorder?: boolean;
}
