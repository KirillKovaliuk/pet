import { TPalette } from '../../types';
import { hexToRGB } from '../transformations';

export const getDarkThemeAlpha = (palette: TPalette) => ({
  'white-10': `rgba(${hexToRGB(palette['gray-dark-mode'][950])}, 0.1)`,
  'white-20': `rgba(${hexToRGB(palette['gray-dark-mode'][950])}, 0.2)`,
  'white-30': `rgba(${hexToRGB(palette['gray-dark-mode'][950])}, 0.3)`,
  'white-40': `rgba(${hexToRGB(palette['gray-dark-mode'][950])}, 0.4)`,
  'white-50': `rgba(${hexToRGB(palette['gray-dark-mode'][950])}, 0.5)`,
  'white-60': `rgba(${hexToRGB(palette['gray-dark-mode'][950])}, 0.6)`,
  'white-70': `rgba(${hexToRGB(palette['gray-dark-mode'][950])}, 0.7)`,
  'white-80': `rgba(${hexToRGB(palette['gray-dark-mode'][950])}, 0.8)`,
  'white-90': `rgba(${hexToRGB(palette['gray-dark-mode'][950])}, 0.9)`,
  'white-100': `rgba(${hexToRGB(palette['gray-dark-mode'][950])}, 1)`,
  'black-10': `rgba(${hexToRGB(palette.base.white)}, 0.1)`,
  'black-20': `rgba(${hexToRGB(palette.base.white)}, 0.2)`,
  'black-30': `rgba(${hexToRGB(palette.base.white)}, 0.3)`,
  'black-40': `rgba(${hexToRGB(palette.base.white)}, 0.4)`,
  'black-50': `rgba(${hexToRGB(palette.base.white)}, 0.5)`,
  'black-60': `rgba(${hexToRGB(palette.base.white)}, 0.6)`,
  'black-70': `rgba(${hexToRGB(palette.base.white)}, 0.7)`,
  'black-80': `rgba(${hexToRGB(palette.base.white)}, 0.8)`,
  'black-90': `rgba(${hexToRGB(palette.base.white)}, 0.9)`,
  'black-100': `rgba(${hexToRGB(palette.base.white)}, 1)`,
});
