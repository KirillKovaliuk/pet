import styled from 'styled-components';

export const StyledWrapper = styled.section`
  display: flex;
  flex-direction: row;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 0 30px;
  max-width: 540px;
  height: 100vh;
`;

export const StyledExternalLinksSection = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLinksSection = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.text.primary};
  gap: 8px;
`;
