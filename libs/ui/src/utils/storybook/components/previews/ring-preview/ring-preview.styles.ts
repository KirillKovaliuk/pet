import styled from 'styled-components';

import { IRingPreviewStyles } from './ring-preview.declarations';

export const StyledRingPreview = styled.div<IRingPreviewStyles>`
  width: 100px;
  height: 100px;
  margin: 25px 0;
  background: ${({ theme }) => theme.background.primary};
  border-radius: 8px;
  box-shadow: ${({ $value }) => $value};
`;

export const StyledRingPreviewWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background.primary};
  margin: -10px -15px !important;
`;
