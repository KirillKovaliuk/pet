import styled, { css } from 'styled-components';

import { SIZES } from '../../constants';
import { StyledButton } from '../button';

import { IIconButtonStyles } from './icon-button.declarations';

const extraSmallIconButtonStyles = css`
  padding: ${({ theme }) => theme.spacing.md};
`;

const smallIconButtonStyles = css`
  padding: 10px;
`;

const mediumIconButtonStyles = css`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const largeIconButtonStyles = css`
  padding: 14px;
`;

const extraLargeIconButtonStyles = css`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ICON_BUTTON_SIZE_STYLES_MAP = {
  [SIZES.EXTRA_SMALL]: extraSmallIconButtonStyles,
  [SIZES.SMALL]: smallIconButtonStyles,
  [SIZES.MEDIUM]: mediumIconButtonStyles,
  [SIZES.LARGE]: largeIconButtonStyles,
  [SIZES.EXTRA_LARGE]: extraLargeIconButtonStyles,
};

export const StyledIconButton = styled(StyledButton)<IIconButtonStyles>`
  ${({ $size }) => ICON_BUTTON_SIZE_STYLES_MAP[$size || SIZES.MEDIUM]};
`;
