import { SIZES } from './sizes';

// text xl: Font size: 20px | Line height: 30px
// text lg: Font size: 18px | Line height: 28px
// text md: Font size: 16px | Line height: 24px
// text sm: Font size: 14px | Line height: 20px
// text xs: Font size: 12px | Line height: 18px

export const TYPOGRAPHY_TEXT = {
  [SIZES.EXTRA_LARGE]: {
    fontSize: 20,
    lineHeight: 30,
  },
  [SIZES.LARGE]: {
    fontSize: 18,
    lineHeight: 28,
  },
  [SIZES.MEDIUM]: {
    fontSize: 16,
    lineHeight: 24,
  },
  [SIZES.SMALL]: {
    fontSize: 14,
    lineHeight: 20,
  },
  [SIZES.EXTRA_SMALL]: {
    fontSize: 12,
    lineHeight: 18,
  },
};
