import { TPalette } from '../../types';

export const getDarkThemeBorder = (palette: TPalette) => ({
  primary: palette['gray-dark-mode'][700],
  secondary: palette['gray-dark-mode'][800],
  tertiary: palette['gray-dark-mode'][800],
  disabled: palette['gray-dark-mode'][700],
  'disabled-subtle': palette['gray-dark-mode'][800],
  brand: palette.brand[400],
  'brand-solid': palette.brand[500],
  'brand-solid-alt': palette['gray-dark-mode'][700],
  error: palette.error[400],
  'error-solid': palette.error[500],
});
