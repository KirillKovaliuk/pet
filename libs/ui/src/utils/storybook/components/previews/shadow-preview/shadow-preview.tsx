import { IShadowPreviewProps } from './shadow-preview.declarations';

import { StyledShadowPreview, StyledShadowPreviewWrapper } from './shadow-preview.styles';

export function ShadowPreview({
  value,
}: IShadowPreviewProps) {
  return (
    <StyledShadowPreviewWrapper>
      <StyledShadowPreview $value={value} />
    </StyledShadowPreviewWrapper>
  );
}
