import styled, { css } from 'styled-components';

import { SIZES } from '../../constants';
import {
  toPercents,
  toPixels,
  toRems,
} from '../../utils';

import {
  DEFAULT_TYPOGRAHY_COLOR,
  FONT_WEIGHT_NAMES,
  FONT_WEIGHT_NAMES_MAP,
  TYPOGRAPHY_CLASSES,
  TYPOGRAPHY_HEADER_SIZES_MAP,
  TYPOGRAPHY_TEXT_SIZES_MAP,
  TYPOGRAPHY_VARIANT,
} from './typography.constants';
import { ITypographyStyles, TTypographyHeaderVariant } from './typography.declarations';

const headersStyles = css<ITypographyStyles>`
  ${({ $variant, $fixed }) => {
    const safeVariant = ($variant || TYPOGRAPHY_VARIANT.HEADER_1) as TTypographyHeaderVariant;
    const { fixed, relative } = TYPOGRAPHY_HEADER_SIZES_MAP[safeVariant];

    const currentStyles = $fixed ? fixed : relative;
    const toUnits = $fixed ? toPixels : toRems;

    const { fontSize, lineHeight, letterSpacing } = currentStyles;

    return css`
      font-size: ${toUnits(fontSize)};
      line-height: ${toUnits(lineHeight)};
      letter-spacing: ${letterSpacing ? toPercents(letterSpacing) : 'normal'};
    `;
  }}
`;

const textsStyles = css<ITypographyStyles>`
  ${({ $size, $fixed }) => {
    const safeSize = $size || SIZES.MEDIUM;
    const { fixed, relative } = TYPOGRAPHY_TEXT_SIZES_MAP[safeSize];
    const currentStyles = $fixed ? fixed : relative;
    const { fontSize, lineHeight } = currentStyles;

    const toUnits = $fixed ? toPixels : toRems;

    return css`
      font-size: ${toUnits(fontSize)};
      line-height: ${toUnits(lineHeight)};
    `;
  }}
`;

export const StyledTypography = styled.p<ITypographyStyles>`
  margin: 0;
  padding: 0;
  font-weight: ${({ $weight }) => FONT_WEIGHT_NAMES_MAP[$weight || FONT_WEIGHT_NAMES.REGULAR]};
  color: ${({ theme, $color }) => theme.text[$color || DEFAULT_TYPOGRAHY_COLOR]};

  ${({ $class }) => ($class === TYPOGRAPHY_CLASSES.HEADER ? headersStyles : textsStyles)}
`;

export const extraSmallTextStyles = css`
  font-size: ${({ theme }) => toPixels(theme.typography['extra-small'].fontSize)};
  line-height: ${({ theme }) => toPixels(theme.typography['extra-small'].lineHeight)};
`;

export const smallTextStyles = css`
  font-size: ${({ theme }) => toPixels(theme.typography.small.fontSize)};
  line-height: ${({ theme }) => toPixels(theme.typography.small.lineHeight)};
`;

export const mediumTextStyles = css`
  font-size: ${({ theme }) => toPixels(theme.typography.medium.fontSize)};
  line-height: ${({ theme }) => toPixels(theme.typography.medium.lineHeight)};
`;

export const largeTextStyles = css`
  font-size: ${({ theme }) => toPixels(theme.typography.large.fontSize)};
  line-height: ${({ theme }) => toPixels(theme.typography.large.lineHeight)};
`;

export const extraLargeTextStyles = css`
  font-size: ${({ theme }) => toPixels(theme.typography['extra-large'].fontSize)};
  line-height: ${({ theme }) => toPixels(theme.typography['extra-large'].lineHeight)};
`;
