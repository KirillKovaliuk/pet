import { SIZES, SPACING } from '../../../constants';

export const TEXT_FIELD_HEIGHTS_MAP = {
  [SIZES.SMALL]: 40,
  [SIZES.MEDIUM]: 44,
} as const;

export const TEXT_FIELD_PADDINGS_MAP = {
  [SIZES.SMALL]: `${SPACING.md} ${SPACING.lg}`,
  [SIZES.MEDIUM]: '10px 14px',
};
