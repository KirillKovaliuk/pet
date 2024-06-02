import { IRingPreviewProps } from './ring-preview.declarations';

import { StyledRingPreview, StyledRingPreviewWrapper } from './ring-preview.styles';

export function RingPreview({
  value,
}: IRingPreviewProps) {
  return (
    <StyledRingPreviewWrapper>
      <StyledRingPreview $value={value} />
    </StyledRingPreviewWrapper>
  );
}
