import styled from 'styled-components';

/* eslint-disable-next-line import/prefer-default-export */
export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media ${({ theme }) => theme.responsive.below1199} {
    display: block;
  }
`;
