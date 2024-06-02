import {
  SHADOWS,
  SPACING,
  TYPOGRAPHY_TEXT,
} from '../../constants';
import { TPalette } from '../../types';

import { getDarkThemeAlpha } from './get-dark-theme-alpha';
import { getDarkThemeBackground } from './get-dark-theme-background';
import { getDarkThemeBorder } from './get-dark-theme-border';
import { getDarkThemeButtons } from './get-dark-theme-buttons';
import { getDarkThemeFocusRings } from './get-dark-theme-focus-rings';
import { getDarkThemeForeground } from './get-dark-theme-foreground';
import { getDarkThemeText } from './get-dark-theme-text';
import { getDarkThemeUtility } from './get-dark-theme-utility';

export const getDarkTheme = (palette: TPalette) => ({
  alpha: getDarkThemeAlpha(palette),
  background: getDarkThemeBackground(palette),
  border: getDarkThemeBorder(palette),
  foreground: getDarkThemeForeground(palette),
  text: getDarkThemeText(palette),
  utility: getDarkThemeUtility(palette),
  button: getDarkThemeButtons(palette),
  ring: getDarkThemeFocusRings(palette),
  spacing: SPACING,
  shadows: SHADOWS,
  typography: TYPOGRAPHY_TEXT,
});
