import { TPalette } from '../../types';

export const getDarkThemeText = (palette: TPalette) => ({
  primary: palette['gray-dark-mode'][50],
  'primary-on-brand': palette['gray-dark-mode'][50],
  secondary: palette['gray-dark-mode'][300],
  'secondary-hover': palette['gray-dark-mode'][200],
  'secondary-on-brand': palette['gray-dark-mode'][300],
  tertiary: palette['gray-dark-mode'][400],
  'tertiary-hover': palette['gray-dark-mode'][300],
  'tertiary-on-brand': palette['gray-dark-mode'][400],
  quaternary: palette['gray-dark-mode'][400],
  'quaternary-on-brand': palette['gray-dark-mode'][400],
  white: palette.base.white,
  disabled: palette['gray-dark-mode'][500],
  placeholder: palette['gray-dark-mode'][400],
  'placeholder-subtle': palette['gray-dark-mode'][700],
  'brand-primary': palette['gray-dark-mode'][50],
  'brand-secondary': palette['gray-dark-mode'][300],
  'brand-tertiary': palette['gray-dark-mode'][400],
  'brand-tertiary-alt': palette['gray-dark-mode'][50],
  'error-primary': palette.error[400],
  'warning-primary': palette.warning[400],
  'success-primary': palette.success[400],
});