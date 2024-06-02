import { SIZES, TYPOGRAPHY_TEXT } from '../../constants';

export const DEFAULT_TYPOGRAHY_COLOR = 'primary';

export const FONT_WEIGHT = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
} as const;

export const FONT_WEIGHT_NAMES = {
  REGULAR: 'regular',
  MEDIUM: 'medium',
  SEMIBOLD: 'semi-bold',
  BOLD: 'bold',
} as const;

export const FONT_WEIGHT_NAMES_MAP = {
  [FONT_WEIGHT_NAMES.REGULAR]: FONT_WEIGHT.REGULAR,
  [FONT_WEIGHT_NAMES.MEDIUM]: FONT_WEIGHT.MEDIUM,
  [FONT_WEIGHT_NAMES.SEMIBOLD]: FONT_WEIGHT.SEMIBOLD,
  [FONT_WEIGHT_NAMES.BOLD]: FONT_WEIGHT.BOLD,
} as const;

export const TYPOGRAPHY_VARIANT = {
  HEADER_1: 'header-1',
  HEADER_2: 'header-2',
  HEADER_3: 'header-3',
  HEADER_4: 'header-4',
  HEADER_5: 'header-5',
  HEADER_6: 'header-6',
  PARAGRAPH: 'paragraph',
  SPAN: 'span',
} as const;

export const TYPOGRAPHY_VARIANTS_MAP = {
  [TYPOGRAPHY_VARIANT.HEADER_1]: 'h1',
  [TYPOGRAPHY_VARIANT.HEADER_2]: 'h2',
  [TYPOGRAPHY_VARIANT.HEADER_3]: 'h3',
  [TYPOGRAPHY_VARIANT.HEADER_4]: 'h4',
  [TYPOGRAPHY_VARIANT.HEADER_5]: 'h5',
  [TYPOGRAPHY_VARIANT.HEADER_6]: 'h6',
  [TYPOGRAPHY_VARIANT.PARAGRAPH]: 'p',
  [TYPOGRAPHY_VARIANT.SPAN]: 'span',
} as const;

export const TYPOGRAPHY_CLASSES = {
  HEADER: 'header',
  TEXT: 'text',
} as const;

// header 1: Font size: 72px / 4.5rem | Line height: 90px / 5.625rem | Tracking: -2%
// header 2: Font size: 60px / 3.75rem | Line height: 72px / 4.5rem | Tracking: -2%
// header 3: Font size: 48px / 3rem | Line height: 60px / 3.75rem | Tracking: -2%
// header 4: Font size: 36px / 2.25rem | Line height: 44px / 2.75rem | Tracking: -2%
// header 5: Font size: 30px / 1.875rem | Line height: 38px / 2.375rem
// header 6: Font size: 24px / 1.5rem | Line height: 32px / 2rem

export const TYPOGRAPHY_HEADER_SIZES_MAP = {
  [TYPOGRAPHY_VARIANT.HEADER_1]: {
    fixed: {
      fontSize: 72,
      lineHeight: 90,
      letterSpacing: -0.02,
    },
    relative: {
      fontSize: 4.5,
      lineHeight: 5.625,
      letterSpacing: -0.02,
    },
  },
  [TYPOGRAPHY_VARIANT.HEADER_2]: {
    fixed: {
      fontSize: 60,
      lineHeight: 72,
      letterSpacing: -0.02,
    },
    relative: {
      fontSize: 3.75,
      lineHeight: 4.5,
      letterSpacing: -0.02,
    },
  },
  [TYPOGRAPHY_VARIANT.HEADER_3]: {
    fixed: {
      fontSize: 48,
      lineHeight: 60,
      letterSpacing: -0.02,
    },
    relative: {
      fontSize: 3,
      lineHeight: 3.75,
      letterSpacing: -0.02,
    },
  },
  [TYPOGRAPHY_VARIANT.HEADER_4]: {
    fixed: {
      fontSize: 36,
      lineHeight: 44,
      letterSpacing: -0.02,
    },
    relative: {
      fontSize: 2.25,
      lineHeight: 2.75,
      letterSpacing: -0.02,
    },
  },
  [TYPOGRAPHY_VARIANT.HEADER_5]: {
    fixed: {
      fontSize: 30,
      lineHeight: 38,
      letterSpacing: null,
    },
    relative: {
      fontSize: 1.875,
      lineHeight: 2.375,
      letterSpacing: null,
    },
  },
  [TYPOGRAPHY_VARIANT.HEADER_6]: {
    fixed: {
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: null,
    },
    relative: {
      fontSize: 1.5,
      lineHeight: 2,
      letterSpacing: null,
    },
  },
};

// text xl: Font size: 20px / 1.25rem | Line height: 30px / 1.875rem
// text lg: Font size: 18px / 1.125rem | Line height: 28px / 1.75rem
// text md: Font size: 16px / 1rem | Line height: 24px / 1.5rem
// text sm: Font size: 14px / 0.875rem | Line height: 20px / 1.25rem
// text xs: Font size: 12px / 0.75rem | Line height: 18px / 1.125rem

export const TYPOGRAPHY_TEXT_SIZES_MAP = {
  [SIZES.EXTRA_LARGE]: {
    fixed: TYPOGRAPHY_TEXT[SIZES.EXTRA_LARGE],
    relative: {
      fontSize: 1.25,
      lineHeight: 1.875,
    },
  },
  [SIZES.LARGE]: {
    fixed: TYPOGRAPHY_TEXT[SIZES.LARGE],
    relative: {
      fontSize: 1.125,
      lineHeight: 1.75,
    },
  },
  [SIZES.MEDIUM]: {
    fixed: TYPOGRAPHY_TEXT[SIZES.MEDIUM],
    relative: {
      fontSize: 1,
      lineHeight: 1.5,
    },
  },
  [SIZES.SMALL]: {
    fixed: TYPOGRAPHY_TEXT[SIZES.SMALL],
    relative: {
      fontSize: 0.875,
      lineHeight: 1.25,
    },
  },
  [SIZES.EXTRA_SMALL]: {
    fixed: TYPOGRAPHY_TEXT[SIZES.EXTRA_SMALL],
    relative: {
      fontSize: 0.75,
      lineHeight: 1.125,
    },
  },
};
