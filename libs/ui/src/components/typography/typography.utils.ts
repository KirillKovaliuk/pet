import { TYPOGRAPHY_CLASSES } from './typography.constants';
import { TTypographyVariant } from './typography.declarations';

export const getTypographyClass = (variant: TTypographyVariant) => (
  variant.includes(TYPOGRAPHY_CLASSES.HEADER)
    ? TYPOGRAPHY_CLASSES.HEADER
    : TYPOGRAPHY_CLASSES.TEXT
);
