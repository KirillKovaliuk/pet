import { TPalette } from '../../types';
import { hexToRGB } from '../transformations';

export const getDarkThemeFocusRings = (palette: TPalette) => {
  const brand = hexToRGB(palette.brand[500]);
  const gray400 = hexToRGB(palette['gray-dark-mode'][400]);
  const gray900 = hexToRGB(palette['gray-dark-mode'][900]);
  const error = hexToRGB(palette.error[500]);

  return ({
    brand: `0px 0px 0px 4px rgba(${brand}, 0.24);`,
    gray: `0px 0px 0px 4px rgba(${gray400}, 0.14);`,
    'gray-secondary': `0px 0px 0px 4px rgba(${gray400}, 0.20);`,
    error: `0px 0px 0px 4px rgba(${error}, 0.24);`,
    'brand-shadow-xs': `0px 1px 2px 0px rgba(${gray900}, 0.05), 0px 0px 0px 4px rgba(${brand}, 0.24);`,
    'brand-shadow-sm': `0px 1px 3px 0px rgba(${gray900}, 0.10), 0px 1px 2px 0px rgba(${gray900}, 0.06), 0px 0px 0px 4px rgba(${brand}, 0.24);`,
    'gray-shadow-xs': `0px 1px 2px 0px rgba(${gray900}, 0.05), 0px 0px 0px 4px rgba(${gray400}, 0.14);`,
    'gray-shadow-sm': `0px 1px 3px 0px rgba(${gray900}, 0.10), 0px 1px 2px 0px rgba(${gray900}, 0.06), 0px 0px 0px 4px rgba(${gray400}, 0.14);`,
    'error-shadow-xs': `0px 1px 2px 0px rgba(${gray900}, 0.05), 0px 0px 0px 4px rgba(${error}, 0.24);`,
  });
};
