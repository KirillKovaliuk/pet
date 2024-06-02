import { SIZES } from '../../constants';
import { TSize } from '../../types';

import { BUTTON_ICON_SIZES } from './button.constants';

export const getIconSize = (size?: TSize) => (
  size === SIZES.EXTRA_LARGE
    ? BUTTON_ICON_SIZES.LARGE
    : BUTTON_ICON_SIZES.MEDIUM
);
