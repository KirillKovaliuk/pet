import {
  FONT_WEIGHT_NAMES,
  TYPOGRAPHY_VARIANT,
  TYPOGRAPHY_VARIANTS_MAP,
} from './typography.constants';
import { ITypographyProps } from './typography.declarations';
import { getTypographyClass } from './typography.utils';

import { StyledTypography } from './typography.styles';

export function Typography({
  weight,
  variant,
  children,
  className,
  size,
  fixed,
  color,
}: ITypographyProps) {
  const safeVariant = variant || TYPOGRAPHY_VARIANT.PARAGRAPH;
  const as = TYPOGRAPHY_VARIANTS_MAP[safeVariant];
  const typographyClass = getTypographyClass(safeVariant);

  return (
    <StyledTypography
      as={as}
      className={className}
      $variant={safeVariant}
      $weight={weight || FONT_WEIGHT_NAMES.REGULAR}
      $size={size}
      $class={typographyClass}
      $fixed={fixed}
      $color={color}
    >
      {children}
    </StyledTypography>
  );
}
