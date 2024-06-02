import { create } from '@storybook/theming/create';
import { PALETTE } from '../src/constants';
import { getDarkTheme } from '../src/utils';

import logoImage from '../src/assets/icons/logo/untitled-ui.svg';

const darkTheme = getDarkTheme(PALETTE);

export default create({
  base: 'dark',
  brandImage: logoImage,
  brandTitle: 'Untitled UI',
  brandUrl: location.origin,
  brandTarget: '_self',
  appBg: darkTheme.background.primary,
  barBg: darkTheme.background.primary,
  textColor: darkTheme.text.primary,
  appContentBg: darkTheme.background.primary,
});
