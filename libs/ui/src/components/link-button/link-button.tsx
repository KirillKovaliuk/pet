'use client';

import Link from 'next/link';

import { getIconSize, HIERARCHIES } from '../button';
import { Icon } from '../icon';

import { ILinkButtonProps } from './link-button.declarations';

import { StyledLinkButton } from './link-button.styles';

export function LinkButton({
  to,
  children,
  onClick,
  size,
  iconBefore,
  iconAfter,
  destructive,
  colored,
  disabled,
  className,
}: ILinkButtonProps) {
  const iconSize = getIconSize(size);

  return (
    <Link href={to}>
      <StyledLinkButton
        onClick={onClick}
        type="button"
        disabled={disabled}
        className={className}
        $size={size}
        $hierarchy={HIERARCHIES.TERTIARY}
        $destructive={destructive}
        $colored={colored}
      >
        {iconBefore && <Icon name={iconBefore} size={iconSize} />}
        {children}
        {iconAfter && <Icon name={iconAfter} size={iconSize} />}
      </StyledLinkButton>
    </Link>
  );
}
