// !!! Import constant directly to avoid dependencies cycling !!!
import { HIERARCHIES } from '../../components/button/button.constants';
import { ICONS } from '../../components/icon/icon.constants';
import { FONT_WEIGHT } from '../../components/typography/typography.constants';
import { SIZES } from '../../constants/sizes';

import { ArgumentTypeBuilder } from './storybook';

// base

export const textArgumentType = new ArgumentTypeBuilder({
  control: 'text',
  description: 'text prop of component',
  type: 'string',
  defaultValue: '',
});

export const booleanArgumentType = new ArgumentTypeBuilder({
  control: 'boolean',
  description: 'boolean prop of component',
  type: 'boolean',
  defaultValue: false,
});

export const selectArgumentType = new ArgumentTypeBuilder({
  control: 'select',
  description: 'list of options',
  type: 'Array',
  defaultValue: '-',
});

export const radioArgumentType = new ArgumentTypeBuilder({
  control: 'radio',
  description: 'list of options',
  type: 'Array',
  defaultValue: '-',
});

// customized

export const childrenArgumentType = ArgumentTypeBuilder
  .from(textArgumentType)
  .setDescription('Element content')
  .setType('ReactNode')
  .setDefaultValue(null);

export const hierarchyArgumentType = ArgumentTypeBuilder
  .from(radioArgumentType)
  .setOptions(Object.values(HIERARCHIES))
  .setDescription('How important should the button be?')
  .setType('THierarchy')
  .setDefaultValue(HIERARCHIES.PRIMARY);

export const sizeArgumentType = ArgumentTypeBuilder
  .from(radioArgumentType)
  .setOptions(Object.values(SIZES))
  .setDescription('How large should the element be?')
  .setType('TSize')
  .setDefaultValue(SIZES.MEDIUM);

export const optionalIconArgumentType = ArgumentTypeBuilder
  .from(selectArgumentType)
  .setOptions(['none', ...Object.keys(ICONS)])
  .setDescription('icon item')
  .setType('TIcon');

export const iconArgumentType = ArgumentTypeBuilder
  .from(optionalIconArgumentType)
  .setOptions(Object.keys(ICONS))
  .setRequired(true);

/*
export const colorArgumentType = ArgumentTypeBuilder
  .from(selectArgumentType)
  .setOptions(Object.keys(PALETTE))
  .setDescription('Color from palette')
  .setType('TColor')
  .setDefaultValue('grey-900');
*/

export const typographyWeightArgumentType = ArgumentTypeBuilder
  .from(selectArgumentType)
  .setOptions(Object.values(FONT_WEIGHT))
  .setDescription('Weight of typography')
  .setType('TTypographyWeight')
  .setDefaultValue(500);
