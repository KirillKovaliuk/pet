import { TPalette } from '../../types';

export const getLightThemeBorder = (palette: TPalette) => ({
  primary: palette['gray-light-mode'][300],
  secondary: palette['gray-light-mode'][200],
  tertiary: palette['gray-light-mode'][100],
  disabled: palette['gray-light-mode'][300],
  'disabled-subtle': palette['gray-light-mode'][200],
  brand: palette.brand[300],
  'brand-solid': palette.brand[600],
  'brand-solid-alt': palette.brand[600],
  error: palette.error[300],
  'error-solid': palette.error[600],
});
