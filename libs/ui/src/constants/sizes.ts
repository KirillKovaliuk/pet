export const SIZES = {
  EXTRA_SMALL: 'extra-small',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large',
} as const;

export const SHADOW_SIZES = {
  ...SIZES,
  TWO_EXTRA_LARGE: 'two-extra-large',
  THREE_EXTRA_LARGE: 'three-extra-large',
} as const;
