import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media ${({ theme }) => theme.responsive.below899} {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  width: 50%;

  @media ${({ theme }) => theme.responsive.below899} {
    width: 100%;
  }
`;
