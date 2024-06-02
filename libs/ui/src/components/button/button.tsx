'use client';

import { forwardRef } from 'react';

import { Icon } from '../icon';

import { BUTTON_TYPES } from './button.constants';
import { IButtonProps } from './button.declarations';
import { getIconSize } from './button.utils';

import { StyledButton } from './button.styles';

export const Button = (
  forwardRef<HTMLButtonElement, IButtonProps>(
    ({
      type = BUTTON_TYPES.BUTTON_TYPE,
      children,
      className,
      onClick,
      size,
      hierarchy,
      iconBefore,
      iconAfter,
      destructive,
      colored,
      disabled,
      fullWidth,
    }, ref) => {
      const iconSize = getIconSize(size);

      return (
        <StyledButton
          ref={ref}
          onClick={onClick}
          disabled={disabled}
          className={className}
          type={type}
          $size={size}
          $hierarchy={hierarchy}
          $destructive={destructive}
          $colored={colored}
          $fullWidth={fullWidth}
        >
          { iconBefore && <Icon name={iconBefore} size={iconSize} />}
          {children}
          {iconAfter && <Icon name={iconAfter} size={iconSize} />}
        </StyledButton>
      );
    },
  )
);
