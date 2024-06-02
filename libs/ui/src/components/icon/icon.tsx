'use client';

import { ICONS } from './icon.constants';
import { IIconProps } from './icon.declarations';

import { StyledIcon } from './icon.styles';

export function Icon({
  name,
  className,
  size,
}: IIconProps) {
  const IconComponent = ICONS[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <StyledIcon $size={size} className={className}>
      <IconComponent />
    </StyledIcon>
  );
}
