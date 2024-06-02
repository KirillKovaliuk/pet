import { SHADOW_SIZES } from './sizes';

const EXTRA_SMALL = '0px 1px 2px rgba(16, 24, 40, 0.05)';

const SMALL = '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);';

const MEDIUM = '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)';

const LARGE = '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)';

const EXTRA_LARGE = '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)';

const TWO_EXTRA_LARGE = '0px 24px 48px -12px rgba(16, 24, 40, 0.18)';

const THREE_EXTRA_LARGE = '0px 32px 64px -12px rgba(16, 24, 40, 0.14)';

export const SHADOWS = {
  [SHADOW_SIZES.EXTRA_SMALL]: EXTRA_SMALL,
  [SHADOW_SIZES.SMALL]: SMALL,
  [SHADOW_SIZES.MEDIUM]: MEDIUM,
  [SHADOW_SIZES.LARGE]: LARGE,
  [SHADOW_SIZES.EXTRA_LARGE]: EXTRA_LARGE,
  [SHADOW_SIZES.TWO_EXTRA_LARGE]: TWO_EXTRA_LARGE,
  [SHADOW_SIZES.THREE_EXTRA_LARGE]: THREE_EXTRA_LARGE,
};
