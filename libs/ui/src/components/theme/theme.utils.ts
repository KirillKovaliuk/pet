import { TPalette } from '../../types';
import { getDarkTheme, getLightTheme } from '../../utils';

import { TThemeMode } from './theme.declarations';

export const applyPaletteForTheme = (mode: TThemeMode, palette: TPalette) => (
  mode === 'dark' ? getDarkTheme(palette) : getLightTheme(palette)
);
