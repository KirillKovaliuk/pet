import { TPalette } from '../../types';

export const getDarkThemeButtons = (palette: TPalette) => ({
  primary: {
    default: {
      background: palette.brand[600],
      'background-hover': palette.brand[500],
      border: palette.brand[600],
      'border-hover': palette.brand[500],
      foreground: palette.base.white,
    },
    error: {
      background: palette.error[600],
      'background-hover': palette.error[500],
      border: palette.error[600],
      'border-hover': palette.error[500],
      foreground: palette.base.white,
    },
  },
  secondary: {
    default: {
      background: palette['gray-dark-mode'][900],
      'background-hover': palette['gray-dark-mode'][800],
      border: palette['gray-dark-mode'][700],
      'border-hover': palette['gray-dark-mode'][700],
      foreground: palette['gray-dark-mode'][300],
      'foreground-hover': palette['gray-dark-mode'][100],
    },
    colored: {
      background: palette['gray-dark-mode'][900],
      'background-hover': palette['gray-dark-mode'][800],
      border: palette['gray-dark-mode'][700],
      'border-hover': palette['gray-dark-mode'][700],
      foreground: palette['gray-dark-mode'][300],
      'foreground-hover': palette['gray-dark-mode'][100],
    },
    error: {
      background: palette.error[950],
      'background-hover': palette.error[900],
      border: palette.error[800],
      'border-hover': palette.error[700],
      foreground: palette.error[200],
      'foreground-hover': palette.error[100],
    },
  },
  tertiary: {
    default: {
      'background-hover': palette['gray-dark-mode'][800],
      foreground: palette['gray-dark-mode'][400],
      'foreground-hover': palette['gray-dark-mode'][200],
    },
    colored: {
      'background-hover': palette['gray-dark-mode'][800],
      foreground: palette['gray-dark-mode'][300],
      'foreground-hover': palette['gray-dark-mode'][100],
    },
    error: {
      'background-hover': palette.error[900],
      foreground: palette.error[300],
      'foreground-hover': palette.error[200],
    },
  },
});
