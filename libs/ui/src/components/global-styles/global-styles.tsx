'use client';

import { createGlobalStyle } from 'styled-components';

import {
  globalStyles,
  normalizeStyles,
  paletteDeclarationsStyles,
} from './global-styles.styles';

export const GlobalStyles = createGlobalStyle`
  ${normalizeStyles}
  ${globalStyles}
  ${paletteDeclarationsStyles}
`;
