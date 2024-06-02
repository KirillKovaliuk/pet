import { forwardRef } from 'react';

import { SHADOW_SIZES } from '../../constants';

import { ICardProps } from './card.declarations';

import { StyledCard } from './card.styles';

export const Card = (
  forwardRef<HTMLDivElement, ICardProps>(
    ({
      children,
      shadowSize = SHADOW_SIZES.MEDIUM,
      className,
      noGutters = false,
      withBorder = false,
    }, ref) => (
      <StyledCard
        ref={ref}
        className={className}
        $shadowSize={shadowSize}
        $noGutters={noGutters}
        $withBorder={withBorder}
      >
        {children}
      </StyledCard>
    ),
  )
);
