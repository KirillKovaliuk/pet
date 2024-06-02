import { getIconSize } from '../button';
import { Icon } from '../icon';

import { IIconButtonProps } from './icon-button.declarations';

import { StyledIconButton } from './icon-button.styles';

export function IconButton({
  onClick,
  size,
  disabled,
  destructive,
  colored,
  hierarchy,
  icon,
  className,
}: IIconButtonProps) {
  return (
    <StyledIconButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
      $destructive={destructive}
      $colored={colored}
      $hierarchy={hierarchy}
      $size={size}
    >
      <Icon name={icon} size={getIconSize(size)} />
    </StyledIconButton>
  );
}
