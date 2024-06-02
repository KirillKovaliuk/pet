import styled, { css } from 'styled-components';

import { SIZES } from '../../constants';
import {
  IButtonProps,
  IButtonStyles,
  StyledButton,
} from '../button';

const extraSmallLinkStyles = css`
  min-height: 20px;
  padding: 0 2px;
`;

const smallLinkStyles = css`
  min-height: 20px;
  padding: 0 4px;
`;

const mediumLinkStyles = css`
  min-height: 24px;
  padding: 0 6px;
`;

const largeLinkStyles = css`
  min-height: 24px;
  padding: 0 8px;
`;

const extraLargeLinkStyles = css`
  min-height: 28px;
  padding: 0 10px;
`;

const LINK_BUTTON_SIZE_STYLES_MAP = {
  [SIZES.EXTRA_SMALL]: extraSmallLinkStyles,
  [SIZES.SMALL]: smallLinkStyles,
  [SIZES.MEDIUM]: mediumLinkStyles,
  [SIZES.LARGE]: largeLinkStyles,
  [SIZES.EXTRA_LARGE]: extraLargeLinkStyles,
};

const linkSizeStyles = css<IButtonStyles>`
  ${({ $size }) => LINK_BUTTON_SIZE_STYLES_MAP[$size || SIZES.MEDIUM]}
`;

export const StyledLinkButton = styled(StyledButton)<IButtonProps>`
  &:hover:not(:disabled) {
    background: none;
  }

  ${linkSizeStyles};
`;
