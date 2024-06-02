import { SHADOW_SIZES, SIZES } from '../constants';

type TSizeKeys = keyof typeof SIZES;
export type TSize = typeof SIZES[TSizeKeys];

type TShadowSizeKeys = keyof typeof SHADOW_SIZES;
export type TShadowSize = typeof SHADOW_SIZES[TShadowSizeKeys];
