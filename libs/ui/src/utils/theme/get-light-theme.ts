import {
  SHADOWS,
  SPACING,
  TYPOGRAPHY_TEXT,
} from '../../constants';
import { TPalette } from '../../types';

import { getLightThemeAlpha } from './get-light-theme-alpha';
import { getLightThemeBackground } from './get-light-theme-background';
import { getLightThemeBorder } from './get-light-theme-border';
import { getLightThemeButtons } from './get-light-theme-buttons';
import { getLightThemeFocusRings } from './get-light-theme-focus-rings';
import { getLightThemeForeground } from './get-light-theme-foreground';
import { getLightThemeText } from './get-light-theme-text';
import { getLightThemeUtility } from './get-light-theme-utility';

export const getLightTheme = (palette: TPalette) => ({
  alpha: getLightThemeAlpha(palette),
  background: getLightThemeBackground(palette),
  border: getLightThemeBorder(palette),
  foreground: getLightThemeForeground(palette),
  text: getLightThemeText(palette),
  utility: getLightThemeUtility(palette),
  button: getLightThemeButtons(palette),
  ring: getLightThemeFocusRings(palette),
  spacing: SPACING,
  shadows: SHADOWS,
  typography: TYPOGRAPHY_TEXT,
});
