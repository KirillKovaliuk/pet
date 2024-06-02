import { ReactNode } from 'react';

import { BRAND_COLORS } from './theme.constants';

export type TThemeMode = 'dark' | 'light';
export type TBrandColor = typeof BRAND_COLORS[number];

export interface IPaletteChangeAction {
  type: 'change-brand-color';
  payload: TBrandColor;
}

export interface IThemeProps {
  children: ReactNode;
  brandColor?: TBrandColor;
  mode?: TThemeMode;
}

export interface IThemeHandlers {
  mode: TThemeMode;
  onChangeMode:(themeMode: TThemeMode) => void;
  onChangeBrandColor: (brandColor: TBrandColor) => void;
}
