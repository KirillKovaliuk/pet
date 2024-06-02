/* eslint-disable @typescript-eslint/no-explicit-any */
import { SIZES } from '../../constants';
import {
  ArgumentTypeBuilder,
  booleanArgumentType,
  childrenArgumentType,
  hierarchyArgumentType,
  optionalIconArgumentType,
  sizeArgumentType,
} from '../../utils';

import { Button as ButtonUI } from './button';
import { HIERARCHIES } from './button.constants';

export function Sandbox(props: any) {
  return (
    <ButtonUI {...props} />
  );
}

export default {
  title: 'Elements/Button',
  component: Sandbox,
  argTypes: {
    children: ArgumentTypeBuilder
      .from(childrenArgumentType)
      .setDescription('Button content')
      .setRequired(true)
      .setDefaultValue('-'),
    hierarchy: hierarchyArgumentType,
    size: sizeArgumentType,
    destructive: ArgumentTypeBuilder
      .from(booleanArgumentType)
      .setDescription('Is action destructive?'),
    colored: ArgumentTypeBuilder
      .from(booleanArgumentType)
      .setDescription('Is button colored? Ignored when primary'),
    disabled: ArgumentTypeBuilder
      .from(booleanArgumentType)
      .setDescription('Is button unclickable?'),
    iconBefore: optionalIconArgumentType,
    iconAfter: optionalIconArgumentType,
    fullWidth: ArgumentTypeBuilder
      .from(booleanArgumentType)
      .setDescription('Is button full width?'),
  },
  args: {
    children: 'label',
    hierarchy: HIERARCHIES.PRIMARY,
    size: SIZES.MEDIUM,
    destructive: false,
    colored: false,
    disabled: false,
    fullWidth: false,
  },
};
