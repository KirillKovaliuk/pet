import styled from 'styled-components';

import { IShadowPreviewStyles } from './shadow-preview.declarations';

export const StyledShadowPreview = styled.div<IShadowPreviewStyles>`
  width: 100px;
  height: 100px;
  margin: 25px 0;
  background: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.border.primary};
  border-radius: 8px;
  box-shadow: ${({ $value }) => $value};
`;

export const StyledShadowPreviewWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background.primary};
  margin: -10px -15px !important;
`;
