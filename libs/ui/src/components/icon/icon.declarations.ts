import { ICON_SIZES, ICONS } from './icon.constants';

export type TIconName = keyof typeof ICONS;
export type TIconSize = typeof ICON_SIZES[number];

export interface IIconProps {
  name: TIconName;
  className?: string;
  size?: TIconSize;
}

export interface IIconStyles {
  $size?: TIconSize;
}
