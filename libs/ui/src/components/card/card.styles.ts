import styled from 'styled-components';

import {
  PALETTE,
  SHADOW_SIZES,
  SHADOWS,
} from '../../constants';

import { ICardStyles } from './card.declarations';

export const StyledCard = styled.div<ICardStyles>`
  background: ${({ theme }) => theme.background['primary-alt']};
  border-radius: 8px;
  border: 1px solid ${({ theme, $withBorder }) => ($withBorder ? theme.border.primary : PALETTE.base.transparent)};
  padding: ${({ $noGutters }) => ($noGutters ? 0 : '8px')};
  overflow-y: auto;
  box-shadow: ${({ $shadowSize = SHADOW_SIZES.MEDIUM }) => SHADOWS[$shadowSize]};
`;
