import { IColorPreviewProps } from './color-preview.declarations';

import { StyledColorPreview, StyledColorPreviewWrapper } from './color-preview.styles';

export function ColorPreview({
  value,
}: IColorPreviewProps) {
  return (
    <StyledColorPreviewWrapper>
      <StyledColorPreview $value={value} />
    </StyledColorPreviewWrapper>
  );
}
