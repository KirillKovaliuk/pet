import styled, { css } from 'styled-components';

import { PALETTE, SIZES } from '../../constants';

import { HIERARCHIES } from './button.constants';
import { IButtonStyles, THierarchy } from './button.declarations';

import {
  largeTextStyles,
  mediumTextStyles,
  smallTextStyles,
} from '../typography/typography.styles';

// sizes declaration start
const extraSmallButtonStyles = css`
  min-height: 36px;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.xs};
  ${smallTextStyles};
`;

const smallButtonStyles = css`
  min-height: 40px;
  padding: 10px 14px;
  gap: ${({ theme }) => theme.spacing.xs};
  ${smallTextStyles};
`;

const mediumButtonStyles = css`
  min-height: 44px;
  padding: 10px ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.sm};
  ${mediumTextStyles};
`;

const largeButtonStyles = css`
  min-height: 48px;
  padding: ${({ theme }) => theme.spacing.lg} 18px;
  gap: ${({ theme }) => theme.spacing.sm};
  ${mediumTextStyles};
`;

const extraLargeButtonStyles = css`
  min-height: 60px;
  padding: ${({ theme }) => theme.spacing.xl} 22px;
  gap: ${({ theme }) => theme.spacing.lg};
  ${largeTextStyles};
`;

const BUTTON_SIZE_STYLES_MAP = {
  [SIZES.EXTRA_SMALL]: extraSmallButtonStyles,
  [SIZES.SMALL]: smallButtonStyles,
  [SIZES.MEDIUM]: mediumButtonStyles,
  [SIZES.LARGE]: largeButtonStyles,
  [SIZES.EXTRA_LARGE]: extraLargeButtonStyles,
};

const buttonSizeStyles = css<IButtonStyles>`
  ${({ $size }) => BUTTON_SIZE_STYLES_MAP[$size || SIZES.MEDIUM]};
`;

// sizes declaration end

const getButtonStyledType = ($destructive?: boolean, $colored?: boolean) => {
  let type = 'default';

  if ($destructive) {
    type = 'error';
  } else if ($colored) {
    type = 'colored';
  }

  return type;
};

const getButtonStylesByType = (hierarchy: THierarchy, propertyName: string) => css<IButtonStyles>`
  ${({ theme, $destructive, $colored }) => {
    let type = getButtonStyledType($destructive, $colored);

    if (hierarchy === 'primary' && $colored) {
      type = $destructive ? 'error' : 'default';
    }

    // @TODO: improve types
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return theme.button[hierarchy][type][propertyName];
  }}
`;

const getPrimaryFocusRing = css<IButtonStyles>`${({ $destructive, theme }) => {
  if ($destructive) {
    return theme.ring['error-shadow-xs'];
  }

  return theme.ring['brand-shadow-xs'];
}}`;

const getSecondaryFocusRing = css<IButtonStyles>`${({ $destructive, $colored, theme }) => {
  if ($destructive) {
    return theme.ring['error-shadow-xs'];
  } if ($colored) {
    return theme.ring['brand-shadow-xs'];
  }

  return theme.ring['gray-shadow-xs'];
}}`;

// primary button styles declaration start
const primaryButtonStyles = css<IButtonStyles>`
  background: ${getButtonStylesByType('primary', 'background')};
  border: 1px solid ${getButtonStylesByType('primary', 'border')};
  color: ${getButtonStylesByType('primary', 'foreground')};
  box-shadow: ${({ theme }) => theme.shadows['extra-small']};

  &:hover:not(:disabled) {
    background: ${getButtonStylesByType('primary', 'background-hover')};
    border: 1px solid ${getButtonStylesByType('primary', 'border-hover')};
  }

  &:focus {
    box-shadow: ${getPrimaryFocusRing};
  }

  &:disabled {
    color: ${({ theme }) => theme.foreground.disabled};
    background: ${({ theme }) => theme.background.disabled};
    border: 1px solid ${({ theme }) => theme.border['disabled-subtle']};
    cursor: not-allowed;
  }
`;
// primary button styles declaration end

// secondary button styles declaration start
const secondaryButtonStyles = css<IButtonStyles>`
  background: ${getButtonStylesByType('secondary', 'background')};
  border: 1px solid ${getButtonStylesByType('secondary', 'border')};
  color: ${getButtonStylesByType('secondary', 'foreground')};

  &:hover:not(:disabled) {
    background: ${getButtonStylesByType('secondary', 'background-hover')};
    color: ${getButtonStylesByType('secondary', 'foreground-hover')};
    border: 1px solid ${getButtonStylesByType('secondary', 'border-hover')};
  }

  &:focus {
    box-shadow: ${getSecondaryFocusRing};
  }

  &:disabled {
    color: ${({ theme }) => theme.foreground.disabled};
    background: ${({ theme }) => theme.background.primary};
    border: 1px solid ${({ theme }) => theme.border['disabled-subtle']};
    cursor: not-allowed;
  }
`;
// secondary button styles declaration end

// tertiary button styles declaration start
const tertiaryButtonStyles = css<IButtonStyles>`
  color: ${getButtonStylesByType('tertiary', 'foreground')};
  border: none;
  background: none;
  box-shadow: none;
  border: 1px solid ${PALETTE.base.transparent};

  &:hover:not(:disabled) {
    color: ${getButtonStylesByType('tertiary', 'foreground-hover')};
    background: ${getButtonStylesByType('tertiary', 'background-hover')};
  }

  &:disabled {
    color: ${({ theme }) => theme.foreground.disabled};
    border: 1px solid ${PALETTE.base.transparent};
  }
`;
// tertiary button styles declaration end

const BUTTON_HIERARCHY_STYLES_MAP = {
  [HIERARCHIES.PRIMARY]: primaryButtonStyles,
  [HIERARCHIES.SECONDARY]: secondaryButtonStyles,
  [HIERARCHIES.TERTIARY]: tertiaryButtonStyles,
};

const buttonHierarchyStyles = css<IButtonStyles>`
  ${({ $hierarchy }) => {
    const safeHierarchy = $hierarchy || HIERARCHIES.PRIMARY;

    return BUTTON_HIERARCHY_STYLES_MAP[safeHierarchy];
  }}
`;

export const StyledButton = styled.button<IButtonStyles>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  transition: all .2s ease-in;
  font-weight: 600;
  font-style: normal;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    user-select: none;
  }

  ${buttonSizeStyles};
  ${buttonHierarchyStyles};
`;
