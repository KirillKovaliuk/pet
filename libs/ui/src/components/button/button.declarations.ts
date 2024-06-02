import { ReactNode, SyntheticEvent } from 'react';

import { TSize } from '../../types';
import { TIconName } from '../icon';

import { BUTTON_TYPES, HIERARCHIES } from './button.constants';

type THierarchyKeys = keyof typeof HIERARCHIES;
export type THierarchy = typeof HIERARCHIES[THierarchyKeys];

type TButtonKeys = keyof typeof BUTTON_TYPES;
export type TButton = typeof BUTTON_TYPES[TButtonKeys];

export interface IButtonProps {
  children: ReactNode;
  onClick?: (event: SyntheticEvent) => void;
  className?: string;
  size?: TSize;
  iconBefore?: TIconName;
  iconAfter?: TIconName;
  disabled?: boolean;
  destructive?: boolean;
  colored?: boolean;
  hierarchy?: THierarchy;
  type?: TButton;
  fullWidth?: boolean;
}

type TExcludedMainProps = 'destructive' | 'colored' | 'hierarchy' | 'size' | 'fullWidth';

export interface IButtonStyles extends Omit<IButtonProps, TExcludedMainProps> {
  $destructive?: boolean;
  $colored?: boolean;
  $hierarchy?: THierarchy;
  $size?: TSize;
  $fullWidth?: boolean;
}
