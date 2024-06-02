import styled from 'styled-components';

import { IColorPreviewStyles } from './color-preview.declarations';

export const StyledColorPreview = styled.div<IColorPreviewStyles>`
  width: 100px;
  height: 40px;
  background: ${({ $value }) => $value};
  border: 2px solid ${({ theme }) => theme.border.tertiary};
  border-radius: 4px;
`;

export const StyledColorPreviewWrapper = styled.div`
  width: 150px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background.primary};
  margin: -10px -30px !important;
`;
