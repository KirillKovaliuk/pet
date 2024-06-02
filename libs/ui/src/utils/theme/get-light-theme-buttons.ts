import { TPalette } from '../../types';

export const getLightThemeButtons = (palette: TPalette) => ({
  primary: {
    default: {
      background: palette.brand[600],
      'background-hover': palette.brand[700],
      border: palette.brand[600],
      'border-hover': palette.brand[700],
      foreground: palette.base.white,
    },
    error: {
      background: palette.error[600],
      'background-hover': palette.error[700],
      border: palette.error[600],
      'border-hover': palette.error[700],
      foreground: palette.base.white,
    },
  },
  secondary: {
    default: {
      background: palette.base.white,
      'background-hover': palette['gray-light-mode'][50],
      border: palette['gray-light-mode'][300],
      'border-hover': palette['gray-light-mode'][300],
      foreground: palette['gray-light-mode'][700],
      'foreground-hover': palette['gray-light-mode'][800],
    },
    colored: {
      background: palette.base.white,
      'background-hover': palette.brand[50],
      border: palette.brand[300],
      'border-hover': palette.brand[300],
      foreground: palette.brand[700],
      'foreground-hover': palette.brand[800],
    },
    error: {
      background: palette.base.white,
      'background-hover': palette.error[50],
      border: palette.error[300],
      'border-hover': palette.error[300],
      foreground: palette.error[700],
      'foreground-hover': palette.error[800],
    },
  },
  tertiary: {
    default: {
      'background-hover': palette['gray-light-mode'][50],
      foreground: palette['gray-light-mode'][600],
      'foreground-hover': palette['gray-light-mode'][700],
    },
    colored: {
      'background-hover': palette.brand[50],
      foreground: palette.brand[700],
      'foreground-hover': palette.brand[800],
    },
    error: {
      'background-hover': palette.error[50],
      foreground: palette.error[600],
      'foreground-hover': palette.error[800],
    },
  },
});
