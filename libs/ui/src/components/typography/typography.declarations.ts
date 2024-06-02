import { ReactNode } from 'react';

import { TSize } from '../../types';
import { getLightThemeText } from '../../utils/theme/get-light-theme-text';

import {
  FONT_WEIGHT_NAMES,
  TYPOGRAPHY_CLASSES,
  TYPOGRAPHY_VARIANT,
} from './typography.constants';

export type TTypographyWeightKeys = keyof typeof FONT_WEIGHT_NAMES;
export type TTypographyWeight = typeof FONT_WEIGHT_NAMES[TTypographyWeightKeys];

export type TTypographyVariantKeys = keyof typeof TYPOGRAPHY_VARIANT;
export type TTypographyVariant = typeof TYPOGRAPHY_VARIANT[TTypographyVariantKeys];

export type TTypographyClassKeys = keyof typeof TYPOGRAPHY_CLASSES;
export type TTypographyClass = typeof TYPOGRAPHY_CLASSES[TTypographyClassKeys];

export type TTypographyTextVariant = 'span' | 'paragraph';
export type TTypographyHeaderVariant = Exclude<TTypographyVariant, TTypographyTextVariant>;

export type TTypographyColor = keyof ReturnType<typeof getLightThemeText>;

export interface ITypographyProps {
  weight?: TTypographyWeight;
  variant?: TTypographyVariant;
  children?: ReactNode;
  className?: string;
  size?: TSize;
  fixed?: boolean;
  color?: TTypographyColor;
}

export interface ITypographyStyles extends ITypographyProps {
  $weight?: TTypographyWeight;
  $variant?: TTypographyVariant;
  $class: TTypographyClass;
  $size?: TSize;
  $fixed?: boolean;
  $color?: TTypographyColor;
}
