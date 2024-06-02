import { Button } from '../../../../components/button';
import { Icon } from '../../../../components/icon';
import { Typography } from '../../../../components/typography';

import {
  StyledExternalLinksSection,
  StyledLink,
  StyledLinksSection,
  StyledWelcome,
  StyledWrapper,
} from './welcome.styles';

export function Welcome() {
  return (
    <StyledWrapper>
      <StyledWelcome>
        <StyledExternalLinksSection>
          <StyledLink href="https://github.com/KirillKovaliuk/pet" target="_blank" rel="noreferrer">
            <Icon name="socials-github" size={20} />
            GitHub
            <Icon name="arrow-narrow-right" size={20} />
          </StyledLink>
          <StyledLink href="https://www.figma.com/file/5OtZ9gq2jAPCYkmVI2Dd8e/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v4.0)?type=design&node-id=1480-0&mode=design&t=nspFSz9FSTkvqOpJ-0" target="_blank" rel="noreferrer">
            <Icon name="socials-figma" size={20} />
            Figma
            <Icon name="arrow-narrow-right" size={20} />
          </StyledLink>
        </StyledExternalLinksSection>
        <Typography variant="header-3">
          Лучший UI kit и дизайн-система для Figma
        </Typography>
        <Typography size="medium" color="secondary">
          Untitled UI — крупнейший в мире UI kit и дизайн-система для Figma. Запустите любой проект,
          сэкономьте тысячи часов и повысьте свой профессиональный уровень.
        </Typography>
        <StyledLinksSection>
          {/* eslint-disable-next-line no-restricted-globals */}
          <StyledLink href={`${location.origin}/pet/?path=/docs/documentation-design-methodology--overview`} rel="noreferrer">
            <Button>
              Изучить документацию
            </Button>
          </StyledLink>
          {/* eslint-disable-next-line no-restricted-globals */}
          <StyledLink href={`${location.origin}/pet/?path=/docs/documentation-design-methodology--overview`} rel="noreferrer">
            <Button>
              Изучить компоненты
            </Button>
          </StyledLink>
        </StyledLinksSection>

      </StyledWelcome>
      <img alt="" src="images/docs/welcome.png" />
    </StyledWrapper>
  );
}
