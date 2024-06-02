/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { BREAKPOINT_SIZES } from '../../constants';
import { toPixels } from '../transformations';

// @TODO: add types

export const desktopScreen: typeof css = (
  first: any,
  ...interpolations: any[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${toPixels(BREAKPOINT_SIZES.DESKTOP)}) {
    ${css(first, ...interpolations)}
  }
`;

export const tabletScreen: typeof css = (
  first: any,
  ...interpolations: any[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${toPixels(BREAKPOINT_SIZES.TABLET)}) and (max-width: ${toPixels(BREAKPOINT_SIZES.DESKTOP - 1)}) {
    ${css(first, ...interpolations)}
  }
`;

export const mobileScreen: typeof css = (
  first: any,
  ...interpolations: any[]
): FlattenSimpleInterpolation => css`
  @media (min-width: 0) and (max-width: ${toPixels(BREAKPOINT_SIZES.TABLET - 1)}) {
    ${css(first, ...interpolations)}
  }
`;
